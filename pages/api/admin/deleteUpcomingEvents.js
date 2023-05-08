import UpcomingEvents from "@/model/UpcomingEvents"
import connectDB from "@/database/connectDB"

const handler = async (req, res) => {
    if(req.method == 'POST') {
        const formData = req?.body;
        let result = await UpcomingEvents.findOneAndDelete({topic: formData.topic}) 
        
        res.status(200).send(`<h3 align="center">Successfully Deleted Event ${formData.topic}!</h3>`)
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" })
    }
}


export default connectDB(handler);  
