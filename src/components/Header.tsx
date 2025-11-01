import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between bg-white/40 backdrop-blur-md rounded-xl py-3 shadow-sm">
        <Link href="/">
          <Link href='/' className="flex items-center gap-3">
            <Image src="/logo.png" alt="TILA logo" width={48} height={48} />
            <div>
              <div className="font-heading text-lg text-tila-primary">The Indian Legal Associates</div>
              <div className="text-sm text-tila-lightText">Law Firm</div>
            </div>
          </Link>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#team">Team</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
