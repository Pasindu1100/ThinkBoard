import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try{
        const {success} = await ratelimit.limit(req.ip);

        if(!success){
            return res.status(429).json({message:"Too many requests, please try again later"});
        }
    next();
    }catch(error){
        console.error("Error in rateLimiter middleware:", error);
        return res.status(500).json({message:"internal server error"});
    }

}


export default rateLimiter;