import type { Metadata } from 'next'
import { Red_Hat_Display, Red_Hat_Text, Fira_Code } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Salim Absi',
  description: "Salim Absi's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.variable} ${redHatDisplay.variable} ${firaCode.variable} bg-white text-neutral-900 antialiased font-sans transition-colors duration-300`}
      >
        <div className="flex min-h-screen justify-center px-6 py-20">
          <div className="w-full max-w-3xl space-y-12">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <div className="h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src="/me.png"
                      alt="Salim Absi"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <nav className="flex items-center gap-8">
                <Link
                  href="/"
                  className="text-base font-medium text-neutral-600 transition hover:text-neutral-900"
                >
                  Home
                </Link>
                <Link
                  href="/articles"
                  className="text-base font-medium text-neutral-600 transition hover:text-neutral-900"
                >
                  Articles
                </Link>
                <Link
                  href="/uses"
                  className="text-base font-medium text-neutral-600 transition hover:text-neutral-900"
                >
                  Uses
                </Link>
              </nav>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
