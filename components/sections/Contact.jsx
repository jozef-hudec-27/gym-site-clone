import ContactUsForm from "@components/ContactUsForm"
import Image from "next/image"

function ContactSection() {
  return (
    <section className="flex flex-col xl:flex-row gap-12 justify-between w-10/12 mt-14 bg-neutral-200 py-7 px-16 lg:px-32 mx-auto">
      <div className="flex-center flex-col gap-8">
        <div className="flex flex-col items-center gap-6">
          <Image src="/assets/images/logo2.webp" alt="Gym logo" width={455} height={0} />
          <p className="font-semibold">11567 Santa Monica Blvd, Los Angeles, CA 90025</p>
        </div>
        <p className="font-semibold">contact@thegym.la</p>
        <p className="font-semibold">+1 424 248 8496</p>
      </div>

      <ContactUsForm />
    </section>
  )
}

export default ContactSection
