import Image from 'next/image'

function HomePage() {
  return (
    <div>
      <section className="hero-section flex-center flex-col gap-32 py-24 px-12 bg-hero bg-cover w-10/12 mx-auto">
        <h1 className="text-3xl md:text-6xl text-center uppercase text-white font-extrabold drop-shadow-2xl">
          The ultimate
          <br className="hidden 2xl:block" />
          training facility
        </h1>

        <button className="uppercase py-2 px-4 bg-orange-400 font-semibold hover:text-white hover:bg-blue-500 duration-[400ms] border-solid border-black border drop-shadow-2xl">
          Guess pass
        </button>
      </section>

      <section className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-3 w-10/12 mx-auto mt-10">
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
      </section>
    </div>
  )
}

export default HomePage
