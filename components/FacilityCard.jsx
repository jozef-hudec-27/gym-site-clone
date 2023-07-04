import Image from "next/image"

function FacilityCard({ facility }) {
  const { filename, items } = facility

  return (
    <div className="bg-black flex border border-black border-solid border-t-0">
      <div className="w-1/2">
        <Image src={`/assets/images/${filename}`} alt="Gym facility" width={310} height={0} />
      </div>

      <div className="w-1/2 p-6">
        {items.map((item, i) => {
          return (
            <p key={i} className="text-white font-semibold text-sm md:text-lg">
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FacilityCard
