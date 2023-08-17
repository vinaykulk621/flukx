import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flukx',
  description: 'A link Shortner',
  metadataBase: new URL('https://flukx.live'),
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
    url: new URL('https://flukx.live'),
    title: 'Link Shortner',
    description: 'A Link Shortner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'flukx',
    description: 'A link shortner',
    images: ['https://flukx.live/og.png'],
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
        <Toaster />
      </body>
    </html>
  )
}
