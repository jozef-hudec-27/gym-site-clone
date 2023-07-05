import FacilityCard from "@components/FacilityCard"
import { facilities } from "@info"

function FacilitiesSection() {
  return (
    <section className="bg-neutral-300 py-14 flex-center flex-col gap-14 mt-1.5">
      <h2 className="uppercase font-extrabold text-5xl md:text-7xl">Facilities</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-3/4">
        {facilities.map((facility, i) => {
          return <FacilityCard key={i} facility={facility} />
        })}
      </div>
    </section>
  )
}

export default FacilitiesSection
