import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Red_Hat_Text, Red_Hat_Display, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { NavLinks } from '@/components/nav-links'
import { cn } from '@/lib/utils'
import './globals.css'

const redHatText = Red_Hat_Text({
  variable: '--font-red-hat-text',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const redHatDisplay = Red_Hat_Display({
  variable: '--font-red-hat-display',
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salim Absi',
  description: "Salim Absi's personal website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(redHatText.variable, redHatDisplay.variable, robotoMono.variable, 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 antialiased font-sans')}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen justify-center px-6 py-16">
            <div className="w-full max-w-2xl space-y-16">
              <header className="flex items-center justify-between gap-8">
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
                <nav className="flex items-center gap-6">
                  <NavLinks />
                  <ThemeToggle />
                </nav>
              </header>
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="8cf01282-6068-43be-a665-6215996a7bcf"
      />
    </html>
  )
}
