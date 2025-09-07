import React from 'react'
import Image from 'next/image'

const Ads: React.FC = () => {
  return (
    <div className='flex items-center justify-center gap-2 py-2 px-3 md:px-6 bg-[#34967C]'>
      <Image src="/assets/images/case.svg" alt="Logo" width={24} height={24} />
      <p className='text-xs text-white md:text-base'>
        Overseas trip? Get the latest information on travel guides
      </p>
      <button type='button' className='px-2 py-1 min-w-[86px] text-xs text-white bg-black rounded-full cursor-pointer md:text-base hover:bg-black/80'>
            More Info
        </button>
    </div>
  )
}

export default Ads;