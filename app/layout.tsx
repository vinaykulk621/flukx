import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flukx',
  description:
    'A revolutionary link shortener! 🔗✂️ What makes it truly unique? Unlike others, this tool provides weird and creative words as memorable substitutes instead of random codes. Say goodbye to complicated Codes',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
    'Link shortner',
  ],
  creator: 'Vinay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL}/og.jpg`),
    title: 'Flukx',
    description:
      'A revolutionary link shortener! 🔗✂️ What makes it truly unique? Unlike others, this tool provides weird and creative words as memorable substitutes instead of random codes. Say goodbye to complicated Codes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flukx | A revolutionary link Shortner 🔗✂️',
    description:
      'A revolutionary link shortener! 🔗✂️ What makes it truly unique? Unlike others, this tool provides weird and creative words as memorable substitutes instead of random codes. Say goodbye to complicated Codes ',
    images: [`${process.env.NEXT_PUBLIC_VERCEL_URL}/og.jpg`],
    creator: '@kuylycljhyvvy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
