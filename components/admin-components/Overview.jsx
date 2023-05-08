import React, { useState } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import {ManageUpcomingEvents, ViewAccessCodes} from '@/components'

const Overview = ({ pending_request_DB, verified_alumni_DB, access_code_DB, admin_DB, UpcomingEvents_DB }) => {

      const [viewEvents, setViewEvents] = useState(false)
      const [viewPendingRQST, setViewPendingRQST] = useState(false)
      const [viewRegisteredAdmin, setViewRegisteredAdmin] = useState(false)
      const [viewAccessCodes, setViewAccessCodes] = useState(false)
      const [viewMessages, setViewMessages] = useState(false)
      const [viewVerifiedAlumni, setViewVerifiedAlumni] = useState(false)
      const [viewFAQ, setViewFAQ] = useState(false)

      const OpenUpcomingEvents = () => {
            setViewEvents(true);

            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }
      
      const OpenPendingRQST = () => {
            setViewPendingRQST(true);

            setViewEvents(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }
      const OpenVerifiedAlumni = () => {
            setViewVerifiedAlumni(true);

            setViewEvents(false);
            setViewPendingRQST(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }
      const OpenAccessCode = () => {
            setViewAccessCodes(true);

            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }
      const OpenMessages = () => {
            setViewMessages(true);

            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }
      const OpenRegisteredAdmin = () => {
            setViewRegisteredAdmin(true);

            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewFAQ(false);
      }
      const OpenFAQ = () => {
            setViewFAQ(true);
            
            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
      }

      const handleClose = () => {
            setViewEvents(false);
            setViewPendingRQST(false);
            setViewVerifiedAlumni(false);
            setViewAccessCodes(false);
            setViewMessages(false);
            setViewRegisteredAdmin(false);
            setViewFAQ(false);
      }

  return (
    <div className='h-screen bg-slate-900 w-full flex gap-8'>
      <div className='w-[25%] pt-12'>

<button className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Pending Registration Requests</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{pending_request_DB.length}</h2>
</button>
<button onClick={OpenUpcomingEvents}
      className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Upcoming Events</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{UpcomingEvents_DB.length}</h2>
</button>

<button className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Verified Alumni</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{verified_alumni_DB.length}</h2>
</button>

<button onClick={OpenAccessCode}
      className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Access Code Generated</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{access_code_DB.length}</h2>
</button>

<button className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Registered Admin</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{admin_DB.length}</h2>
</button>

<button className='bg-gray-950 hover:bg-gray-900 hover:border-gray-500 w-full h-16 rounded-lg p-3 m-2 flex justify-between align-middle border-[1px] border-gray-800'>
      <h1 className='text-center text-gray-400 text-md font-semibold self-center'>Messages</h1>
      <h2 className='text-center text-sm font-medium bg-red-800 rounded-full w-12 text-white self-center p-1'>{admin_DB.length}</h2>
</button>
</div>



{viewEvents && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ManageUpcomingEvents UpcomingEvents_DB={UpcomingEvents_DB} />
      </div>
)}


{viewAccessCodes && (
      <div className='pt-14 w-[70%]'>
      <button type='reset' className='w-fit text-white absolute right-10 top-24' onClick={handleClose}>
            <RxCrossCircled size={24} className='text-red-500 hover:text-red-700' />
      </button>
            <ViewAccessCodes ProtectedView_DB={access_code_DB} />
      </div>
) }

    </div>
)
}

export default Overview
