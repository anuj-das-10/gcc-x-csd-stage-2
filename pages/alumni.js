import React from 'react'
import mongoose from "mongoose";
import VerifiedAlumni from "@/model/VerifiedAlumni";
import { AlumniComponent } from '@/components'
import { SubHeader } from '@/components';

const alumni = ({ verified_alumni }) => {
  return (   
    <div className='bg-gradient-to-br from-black via-indigo-950 to-sky-950'>
      

        <SubHeader gradientText='CSxAlumni' text='Network.' 
        metaDescription='Here, you can find all alumni of Department of Computer Science - Gurucharan College, Silchar' />
        
        <div className='max-w-4xl lg:mx-32 py-12'>
        { verified_alumni.map((user) => (
          <AlumniComponent key={user._id} 
          _fullName={user.name}
          _email={user.email} 
          _sex={user.sex} 
          _ugAdmissionYear={user.admission_year}       
          _ugPassingYear={user.passing_year} 
          _currentCity={user.current_city} 
          
          _currentOccupation={user.current_occupation}
          _currentCompany={user.company_or_org}
          _yearsOfExperience={user.yrs_of_experience}
          

          _anyDegreeAfterUG={user.any_degree_after_ug}
          _lastDegree={user.pg_degree}
          _lastDegreeSpecialization={user.pg_specialization}
          _pgAdmissionYear={user.pg_admissionYear} 
          _pgPassingYear={user.pg_passingYear} 
          

          _facebook_url={user.facebook_url}
          _instagram_url={user.instagram_url}
          _twitter_url={user.twitter_url}
          _linkedin_url={user.linkedin_url}
          _github_url={user.github_url}
          _portfolio_url={user.portfolio_url}

          />
        
        ))

        }
        </div>

    </div>
  )
}



export async function getServerSideProps() {
 
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }

  let verified_alumni = await VerifiedAlumni.find();

  // These will be passed to the page component as props
  return {
    props: {
      verified_alumni: JSON.parse(JSON.stringify(verified_alumni)),
    }, 
  };
}

export default alumni
