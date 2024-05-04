import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export default clerkMiddleware();

const isProtectedRoute = createRouteMatcher([ 
    '/'
    // '/forum(.*)',
  ]);
  
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();

    publicRoutes: ['/api/webhooks/clerk']
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};