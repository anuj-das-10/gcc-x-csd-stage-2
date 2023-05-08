import { RankHolder } from '@/components'
import React from 'react'

const RankersList = () => {
  return (
    <div className='lg:w-[960px] m-auto'>
     <table className='border-separate w-full'>
        <thead>
          <tr className='text-white bg-black text-xl'>
            <th className='p-4 sm:py-2 py-4 border border-gray-500'>YEAR</th>
            <th className='p-4 sm:py-2 py-4 m-auto border border-gray-500'>NAME</th>
            <th className='p-4 sm:py-2 py-4 border border-gray-500'>RANK</th>
          </tr>
        </thead>
        <tbody>

{/*       ADD NEW RANK HOLDER HERE!       */}

{/* ---------------------------------------------------------------------------------------  */}
          <RankHolder name='Rimli Shome' rank='First Class Gold Madelist' year='2021' />
          <RankHolder name='Saswati Chakroborty' rank='First Class Gold Madelist' year='2020' />
          <RankHolder name='Hrishav Dhawaj Purkayastha' rank='First Class Gold Madelist' year='2020' />
          <RankHolder name='Subham Singha' rank='Second Class' year='2019' />
          <RankHolder name='Abhinav Mazumder' rank='First Class Gold Madelist' year='2018' />
          <RankHolder name='Nachirul Haque Barbhuiya' rank='First Class Gold Madelist' year='2018' />
          <RankHolder name='Kshounish Mazumder' rank='First Class Gold Madelist' year='2017' />
          <RankHolder name='Bikash Gupta' rank='Second Class' year='2015' />
          <RankHolder name='Sahanara Begum Laskar' rank='First Class Gold Madelist' year='2014' />
          <RankHolder name='Mahbabul Hasan Laskar' rank='First Class Gold Madelist' year='2013' />
          <RankHolder name='Swafana Rahaman Laskar' rank='First Class Gold Madelist' year='2012' />
          <RankHolder name='Papree Dhar' rank='Second Class' year='2011' />
          <RankHolder name='Jasmine Barlaskar' rank='1st0 Class Second' year='2010' />
        </tbody>
     </table>  
    </div>
  )
}

export default RankersList
