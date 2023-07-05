import TestimonialsCarousel from '@components/testimonials/TestimonialsCarousel'
import AboutSection from '@components/sections/About'
import FacilitiesSection from '@components/sections/Facilities'
import TrainersSection from '@components/sections/Trainers'
import PhotosSection from '@components/sections/Photos'
import ContactSection from '@components/sections/Contact'
import HeroSection from '@components/sections/Hero'

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
    </div>
  )
}

export default HomePage
