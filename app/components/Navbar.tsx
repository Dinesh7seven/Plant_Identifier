// app/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Plant Identifier
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-green-200 transition">Home</Link>
          <Link href="/about" className="hover:text-green-200 transition">About</Link>
          <Link href="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}