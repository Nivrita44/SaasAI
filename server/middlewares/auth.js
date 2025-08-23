import { clerkClient } from "@clerk/express";

export const auth = async(req, res, next) => {
    try {

        const { userId, has } = await req.auth();
        const hasPremiumPlan = await has({ plan: 'premium' });

        const user = await clerkClient.users.getUser(userId);
        if (!hasPremiumPlan && user.privateMetadata.free_usage) {
            req.free_usage = user.privateMetadata.free_usage;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            })
            req.free_usage = 0;
        }
        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next()
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export default auth;

// import { clerkClient } from "@clerk/express";

// export const auth = async(req, res, next) => {
//     try {
//         const { userId } = req.auth(); // Clerk session info
//         const user = await clerkClient.users.getUser(userId);

//         // Determine plan and free usage
//         const plan = user.privateMetadata && user.privateMetadata.plan ?
//             user.privateMetadata.plan :
//             "free";

//         const free_usage = user.privateMetadata && user.privateMetadata.free_usage ?
//             user.privateMetadata.free_usage :
//             0;


//         req.userId = userId;
//         req.plan = plan;
//         req.free_usage = free_usage;

//         next();
//     } catch (error) {
//         res.status(403).json({ success: false, message: error.message });
//     }
// };

// export default auth;