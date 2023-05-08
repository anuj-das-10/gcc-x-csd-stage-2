import RankHolder from "@/model/RankHolder"
import connectDB from "@/database/connectDB"


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;

            let rank_holder = await RankHolder({
                name: formData.fullName,
                rank: formData.rank,
                year: formData.year
            });
            await rank_holder.save();
        // }
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  