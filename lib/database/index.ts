import mongoose from 'mongoose'
const MONGODB_URL = process.env.MONGODB_URI
let cached = (global as any).mongoose||{conn:null, promise:null}
export const connecttoDatabase =async()=>
{
    if(cached.conn) return cached.promise;
    if(!MONGODB_URL) throw new Error('MONOGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL,{
        dbName:'evently',
        bufferCommands:false,
    })

    cached.conn = await cached.promise;
    return cached.conn;
     
}