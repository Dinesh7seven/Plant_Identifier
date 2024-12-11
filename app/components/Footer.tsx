// app/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Plant Identifier</h3>
          <p>Plant Identifier is an AI-powered platform to help you identify and learn about plants instantly.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="/about" className="block hover:text-green-300">About Us</Link>
            <Link href="/privacy" className="block hover:text-green-300">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-green-300">Terms of Service</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: support@plantidentifier.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-green-700 pt-4">
        © 2024 Plant Identifier. All Rights Reserved.
      </div>
    </footer>
  )
}