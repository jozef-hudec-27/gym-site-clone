import FacilityCard from '@components/FacilityCard'
import TrainerCard from '@components/TrainerCard'
import Image from 'next/image'
import { trainers, facilities } from '@info'
import TestimonialsCarousel from '@components/testimonials/TestimonialsCarousel'
import ContactUsForm from '@components/ContactUsForm'

function HomePage() {
  return (
    <div>
      {/* HERO  */}
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

      {/* DESCRIPTION + JOIN */}
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

      {/* FACILITIES */}
      <section className="bg-neutral-300 py-14 flex-center flex-col gap-14 mt-1.5">
        <h2 className="uppercase font-extrabold text-5xl md:text-7xl">Facilities</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-3/4">
          {facilities.map((facility, i) => {
            return <FacilityCard key={i} facility={facility} />
          })}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="flex-center flex-col mt-14">
        <h2 className="uppercase font-extrabold text-5xl md:text-7xl text-center">Meet our trainers</h2>
        <p className="mt-8 px-4 py-2 text-gray-600">
          No matter your starting point, our team of certified and experienced trainers will make your fitness their
          priority as your personalized fitness partner.{' '}
        </p>

        <div className="flex flex-wrap justify-center gap-10 bg-neutral-200 w-11/12 py-12 mt-3">
          {trainers.map((trainer, i) => {
            return <TrainerCard key={i} trainer={trainer} />
          })}
        </div>
      </section>

      {/* PHOTOS */}
      <section className="mt-20">
        <h2 className="uppercase font-extrabold text-5xl md:text-7xl text-center">The gym L.A.</h2>

        <div className="flex-center gap-8 flex-wrap pt-12 pb-24 px-12 mt-3 w-11/12 bg-neutral-200 mx-auto">
          <Image src="/assets/images/gym1.webp" alt="Gym photo" width={286} height={0} />
          <Image src="/assets/images/gym2.webp" alt="Gym photo" width={286} height={0} />
          <Image src="/assets/images/gym3.webp" alt="Gym photo" width={286} height={0} />
          <Image src="/assets/images/gym4.webp" alt="Gym photo" width={286} height={0} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* CONTACT US */}
      <section className="flex flex-col xl:flex-row gap-12 justify-between w-10/12 mt-14 bg-neutral-200 py-7 px-16 lg:px-32 mx-auto">
        <div className="flex-center flex-col gap-8">
          <div className="flex flex-col items-center gap-6">
            <Image src="/assets/images/logo.webp" alt="Gym logo" width={455} height={0} />
            <p className="font-semibold">11567 Santa Monica Blvd, Los Angeles, CA 90025</p>
          </div>
          <p className="font-semibold">contact@thegym.la</p>
          <p className="font-semibold">+1 424 248 8496</p>
        </div>

        <ContactUsForm />
      </section>
    </div>
  )
}

export default HomePage
