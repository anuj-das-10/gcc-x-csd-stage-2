import PendingRQST from "@/model/PendingRQST"
import connectDB from "@/database/connectDB"
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function(req, file, cb) {
//        cb(null, new Date().toISOString() + file.originalname) 
//     }
// });

// const upload = multer({storage: storage})


async function handler(req, res) {
    if (req.method == 'POST') {
        const formData = req?.body;
        // return res.json({msg: formData})
        // upload.single("documentProof");
        console.log(req?.file);
        // for (let i = 0; i < req.body.length; i++) {

            let submit_registration_rqsts = await PendingRQST({
                name: formData.fullName,
                email: formData.email,
                mobile_no: formData.phone,
                password: formData.confirmPass,
                sex: formData.sex,
                admission_year: formData.admissionYear,
                passing_year: formData.passingYear,
                current_city: formData.currentCity,
         
         // Post Graduation or Other Degree after UG
                any_degree_after_ug: formData.pg,
                pg_degree: formData.pgDegree,
                pg_specialization: formData.pgSpecialization,
                pg_admissionYear: formData.pgStartingYear,
                pg_passingYear: formData.pgPassingYear,
         
                
         // Current Occupation
                current_occupation: formData.current_occupation,
                company_or_org: formData.companyName,
                yrs_of_experience: formData.yrsOfExp,
                workingInTechField: formData.tech,
         
               
        // Social URL 
                twitter_url: formData.twitter_url,
                linkedin_url: formData.linkedIn_url,
                facebook_url: formData.fb_url,
                instagram_url: formData.insta_url,
                github_url: formData.github_url,
                portfolio_url: formData.portfolio_url,

        //  Document Proof

        
            });
            await submit_registration_rqsts.save();
        // }
        res.status(200).json({ success: "success" });
    }
    else {
        res.status(400).json({ error: "Bad Request! This method is not allowed" });
    }
}


export default connectDB(handler);  