import Socials from './Socials'

function Footer() {
  return (
    <footer className="mt-auto flex justify-center items-center px-1 py-4 pt-8">
      <div className="flex flex-col items-center gap-6">
        <p>contact@thegym.la</p>
        <Socials />
        <p className="text-xs text-gray-500">©{new Date().getFullYear()} THE GYM L.A.</p>
      </div>
    </footer>
  )
}

export default Footer
