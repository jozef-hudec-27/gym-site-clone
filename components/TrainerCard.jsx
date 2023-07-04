'use client'

import Image from 'next/image'
import { useState } from 'react'

function TrainerCard({ trainer }) {
  const { name, filename, description } = trainer

  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div className="flex  flex-col gap-3">
      <div className="relative flex flex-col">
        <Image src={`/assets/images/${filename}`} alt={`Trainer ${name}`} width={287} height={0} />

        <div className="w-10/12 absolute bg-white p-3 -right-4 bottom-3">
          <p className="uppercase ">{name}</p>
        </div>
      </div>

      <p className="max-w-xs text-justify text-sm translate-x-0 md:translate-x-5 text-slate-700 leading-6">
        {showFullDescription ? description : description.slice(0, 75) + '...'}
      </p>

      <button
        className="translate-x-0 md:translate-x-5 font-semibold w-fit hover:text-slate-700"
        onClick={() => {
          setShowFullDescription((prev) => !prev)
        }}
      >
        Read {showFullDescription ? 'less' : 'more'}
      </button>
    </div>
  )
}

export default TrainerCard
