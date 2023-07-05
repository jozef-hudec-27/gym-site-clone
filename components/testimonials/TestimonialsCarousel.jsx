'use client'

import { Carousel } from 'react-responsive-carousel'
import { testimonials } from '@info'
import Testimonial from './Testimonial'

export default function TestimonialsCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {testimonials.map((testimonial, i) => {
        return <Testimonial key={i} testimonial={testimonial} />
      })}
    </Carousel>
  )
}
