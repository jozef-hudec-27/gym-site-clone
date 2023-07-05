import Image from 'next/image'

function Testimonial({ testimonial }) {
  const { filename, text, author } = testimonial

  return (
    <div className="relative">
      <Image className="brightness-90" src={`/assets/images/${filename}`} alt="Testimonial" width={1905} height={0} />

      <div className="w-3/4 xl:w-1/3 bg-white px-5 pt-7 xl:pt-14 pb-5 xl:pb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="md:hidden text-sm xl:text-lg">"{text.slice(0, 60) + '...'}"</p>
        <p className="hidden md:block text-sm xl:text-lg">"{text}"</p>

        <p className="mt-2 xl:mt-5 text-slate-700 font-light">{author}</p>
      </div>
    </div>
  )
}

export default Testimonial
