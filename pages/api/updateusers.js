import PendingRQST from "@/model/PendingRQST"
import connectDB from "@/database/connectDB"


const handler = async (req, res) => {
    if(req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            
            let update_user_info = await PendingRQST.findByIdAndUpdate(req.body[i]._id, req.body[i])
           
        }
        res.status(200).json({ success: "success"})
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" })
    }
}


export default connectDB(handler);  


// Need to modify later
// await User.findByIdAndUpdate(req.body[i]._id, req.body[i]);


// import User from "@/model/User"