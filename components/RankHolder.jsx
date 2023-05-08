import React from 'react'

const RankHolder = ({name, rank, year}) => {
  return (
    
        <tr className='text-slate-400 text-md md:text-xl bg-black/40'>
              <td className='p-2 md:p-8 py-3 border border-gray-500 text-center'>{year}</td>
              <td className='p-2 md:p-8 py-3 border border-gray-500 font-semibold'>{name}</td>
              <td className='p-2 md:p-8 py-3 border border-gray-500'>{rank}</td>
        </tr>

  )
}

export default RankHolder
