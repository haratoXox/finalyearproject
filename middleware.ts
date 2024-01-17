import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes:
    [
        '/',
        '/event/"id',
        '/api/webhook/clerk',
        '/api/uploadthing',
        '/api/uploadthing'
    ],
    ignoredRoutes:
    [
        '/api/webhook/clerk',
        '/api/uploadthing',
        '/api/uploadthing' 
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};