import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/api/uploadthing',
    "/api/webhooks(.*)",
    '/app/api/webhooks/clerk', // Add '/app/api/webhooks/clerk' to publicRoutes
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/app/api/webhooks/clerk'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
