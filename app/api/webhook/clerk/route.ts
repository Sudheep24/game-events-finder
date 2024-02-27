import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { createUser, updateUser, deleteUser } from '../../../../lib/actions/user.actions';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }
 
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');
 
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }
 
  const payload = await req.json();
  const body = JSON.stringify(payload);
 
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent;
 
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }
 
  const { id } = evt.data;
  const eventType = evt.type;
 
  try {
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { email_addresses, image_url, first_name, last_name, username } = evt.data;

      if (!id) {
        throw new Error('No clerkID provided in the webhook payload');
      }

      const user = {
        clerkId: id,
        email: email_addresses?.[0]?.email_address || '',
        username: username || '',
        firstName: first_name || '',
        lastName: last_name || '',
        photo: image_url || '',
      };

      if (eventType === 'user.created') {
        const newUser = await createUser(user);
        await clerkClient.users.updateUserMetadata(id, { publicMetadata: { userId: newUser._id } });
        return NextResponse.json({ message: 'OK', user: newUser });
      } else {
        const updatedUser = await updateUser(id, user);
        return NextResponse.json({ message: 'OK', user: updatedUser });
      }
    } else if (eventType === 'user.deleted') {
      if (!id) {
        throw new Error('No clerkID provided in the webhook payload');
      }

      const deletedUser = await deleteUser(id);
      return NextResponse.json({ message: 'OK', user: deletedUser });
    }

    return new Response('', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return new Response('Error occurred', { status: 500 });
  }
}
