import Image from "next/image"

function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-3 w-10/12 mx-auto mt-10 relative">
      <div className="bg-black flex-center p-16 lg:p-5 w-full lg:w-1/2">
        <div className="flex flex-col gap-12 items-center w-10/12 sm:w-2/3">
          <h2 className="text-white text-5xl font-semibold">THE GYM L.A.</h2>
          <p className="text-white text-justify">
            Real people working really hard, to get real results. At THE GYM L.A your fitness is our #1 priority. From
            the moment you walk in the doors, you know what to expect.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <Image src="/assets/images/gym.webp" alt="Man curling 60 pounds" width={863} height={100} />
      </div>

      <button className="bg-yellow-200 py-4 px-9 uppercase font-semibold rounded-lg hover:rounded-3xl duration-200 absolute left-1/2 top-0 lg:top-3/4 -translate-y-1/3 lg:translate-y-0 -translate-x-1/2">
        Join now
      </button>
    </section>
  )
}

export default AboutSection
