import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser, updateUser, deleteUser } from '@/lib/actions/user.actions';
import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }

  // Get the ID and type
  const id = evt.data?.id;
  const eventType = evt.type;

  if (eventType === 'user.created') {
    if (id) {
      const { email_addresses, image_url, first_name, last_name, username } = evt.data;

      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name,
        lastName: last_name,
        photo: image_url
      };

      try {
        const newUser = await createUser(user);

        if (newUser) {
          await clerkClient.users.updateUserMetadata(id, {
            publicMetadata: {
              userId: newUser._id
            }
          });
          return NextResponse.json({ message: 'OK', user: newUser });
        } else {
          return new Response('Failed to create user', { status: 500 });
        }
      } catch (error) {
        console.error('Error creating user:', error);
        return new Response('Failed to create user', { status: 500 });
      }
    } else {
      return new Response('User ID is undefined', { status: 400 });
    }
  } else if (eventType === 'user.updated') {
    if (id) {
      const { email_addresses, image_url, first_name, last_name, username } = evt.data;

      const updatedUser = {
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name,
        lastName: last_name,
        photo: image_url
      };

      try {
        const updated = await updateUser(id, updatedUser);
        if (updated) {
          return NextResponse.json({ message: 'User updated successfully' });
        } else {
          return new Response('Failed to update user', { status: 500 });
        }
      } catch (error) {
        console.error('Error updating user:', error);
        return new Response('Failed to update user', { status: 500 });
      }
    } else {
      return new Response('User ID is undefined', { status: 400 });
    }
  } else if (eventType === 'user.deleted') {
    if (id) {
      try {
        const deleted = await deleteUser(id);
        if (deleted) {
          return NextResponse.json({ message: 'User deleted successfully' });
        } else {
          return new Response('Failed to delete user', { status: 500 });
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        return new Response('Failed to delete user', { status: 500 });
      }
    } else {
      return new Response('User ID is undefined', { status: 400 });
    }
  }

  return new Response('', { status: 200 });
}
