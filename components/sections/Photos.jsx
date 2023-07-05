import Image from "next/image"

function PhotosSection() {
  return (
    <section className="mt-20">
      <h2 className="uppercase font-extrabold text-5xl md:text-7xl text-center">The gym L.A.</h2>

      <div className="flex-center gap-8 flex-wrap pt-12 pb-24 px-12 mt-3 w-11/12 bg-neutral-200 mx-auto">
        <Image src="/assets/images/gym1.webp" alt="Gym photo" width={286} height={0} />
        <Image src="/assets/images/gym2.webp" alt="Gym photo" width={286} height={0} />
        <Image src="/assets/images/gym3.webp" alt="Gym photo" width={286} height={0} />
        <Image src="/assets/images/gym4.webp" alt="Gym photo" width={286} height={0} />
      </div>
    </section>
  )
}

export default PhotosSection
