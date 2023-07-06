import TestimonialsCarousel from '@components/testimonials/TestimonialsCarousel'
import AboutSection from '@components/sections/About'
import FacilitiesSection from '@components/sections/Facilities'
import TrainersSection from '@components/sections/Trainers'
import PhotosSection from '@components/sections/Photos'
import ContactSection from '@components/sections/Contact'
import HeroSection from '@components/sections/Hero'
import { API_KEY } from '@secret'

function HomePage() {
  return (
    <div>
      {/* HERO  */}
      <HeroSection />

      {/* DESCRIPTION + JOIN */}
      <AboutSection />

      {/* FACILITIES */}
      <FacilitiesSection />

      {/* TRAINERS */}
      <TrainersSection />

      {/* PHOTOS */}
      <PhotosSection />

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* CONTACT US */}
      <ContactSection />

      {/* LOCATION */}
      <iframe
        className="w-10/12 mx-auto"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg-CAom-7woARepNLzusEFxE&key=${API_KEY}`}
      ></iframe>
    </div>
  )
}

export default HomePage
