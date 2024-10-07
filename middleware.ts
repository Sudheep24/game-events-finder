import { authMiddleware } from "@clerk/nextjs/server";

// Define the middleware to handle authentication
export default authMiddleware({
  publicRoutes: [
    '/',                // Home page
    '/events/:id',     // Dynamic event pages
    '/api/webhook/clerk', // Webhook for Clerk
    '/api/webhook/stripe', // Webhook for Stripe
    '/api/uploadthing' // Upload API
  ],
  ignoredRoutes: [
    '/api/webhook/clerk', // Ignore Clerk webhook
    '/api/webhook/stripe', // Ignore Stripe webhook
    '/api/uploadthing' // Ignore Uploadthing API
  ]
});

// Configuration for the middleware
export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // Match all paths excluding files and _next
    '/', // Home page
    '/(api|trpc)(.*)' // Match API and trpc routes
  ],
};
