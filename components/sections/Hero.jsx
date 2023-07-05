function HeroSection() {
  return (
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
  )
}

export default HeroSection
