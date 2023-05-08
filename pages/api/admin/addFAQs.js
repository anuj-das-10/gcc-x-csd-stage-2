import FAQ from "@/model/FAQ"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let frequently_asked_question = await FAQ({
                question: formData.faq,
                answer: formData.faq_answer,
            });
            await frequently_asked_question.save();
        // }
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  