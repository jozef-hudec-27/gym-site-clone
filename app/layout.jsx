import Navbar from '@components/navbar/Navbar'
import './globals.css'
import Footer from '@components/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const metadata = {
  title: 'The GYM L.A. | gym | 11567 Santa Monica Boulevard, Los Angeles, CA, USA',
  description: 'The ultimate training facility',
  keywords: ['gym', 'trainer', 'muscle'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
