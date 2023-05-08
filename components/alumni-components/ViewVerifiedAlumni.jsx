import React from 'react'
import { SiBattledotnet } from 'react-icons/si'


const ViewVerifiedAlumni = ({ verified_Alumni_DB }) => {
  return (
    <div className='py-8'>
        {
            verified_Alumni_DB.reverse().map((user) => (
                <div key={user._id} className='p-2 border-collapse border-[1px] bg-black/60'> 
                    <h3 className='flex text-white'>{user.name} <SiBattledotnet size={15} className='self-center mx-2 text-sky-400' /> ({user.sex})</h3>
                    <h3 className='flex text-white'>B.Sc(Hons)-Computer Science [ Batch: {user.admission_year} - {user.passing_year} ]</h3>
                </div>
            ))
        }
      
    </div>
  )
}

export default ViewVerifiedAlumni
