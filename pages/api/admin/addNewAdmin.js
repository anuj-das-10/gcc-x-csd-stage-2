import Admin from "@/model/Admin"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let add_admin = await Admin({
                email: formData.email,
                password: formData.confirm_password,
            });
            await add_admin.save();
        // }
        res.status(200).send(`<h1 className='text-center font-semibold text-2xl text-red-500'>New Admin Registered Successfully</h1>`)
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  