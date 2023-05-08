import UserMessages from "@/model/UserMessages"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let message = await UserMessages({
                fullname: formData.fullName,
                email: formData.email,
                message: formData.message,
            });
            await message.save();
        // }

        res.status(200).send('about.js');
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  