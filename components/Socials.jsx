import { BsFacebook, BsTwitter, BsTiktok, BsInstagram } from 'react-icons/bs'

function Socials() {
  return (
    <div className="flex gap-5">
      <BsFacebook className="text-xl" aria-label="Facebook" />
      <BsTwitter className="text-xl" aria-label="Twitter" />
      <BsTiktok className="text-xl" aria-label="TikTok" />
      <BsInstagram className="text-xl" aria-label="Instagram" />
    </div>
  )
}

export default Socials
