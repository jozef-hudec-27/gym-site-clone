import TrainerCard from "@components/TrainerCard"
import { trainers } from "@info"

function TrainersSection() {
  return (
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
  )
}

export default TrainersSection
