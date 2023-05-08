import React from 'react'
import Image from 'next/image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { SubHeader } from '@/components'
import { galleryImages } from '@/util'


const gallery = () => {

  return (
    <> 
<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} 
    className='h-auto bg-gradient-to-br from-black via-indigo-900 to-sky-500 overflow-hidden'>
    <SubHeader text='< CSxGallery />' />

    <Masonry>
      {
        galleryImages.map((image, i) => (
            <Image unoptimized key={i}
            src={image.url}
            alt='CS DEPT - Gallery' 
            className='block w-auto m-2 rounded-lg transition-all duration-300'
            width={20}
            height={0}
            data-aos="fade-up"
            />
        ))
      }
    </Masonry>
</ResponsiveMasonry> 
    </>
  )
}

export default gallery
