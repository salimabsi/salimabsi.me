'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
    { href: '/', label: 'Home' },
    // { href: '/articles', label: 'Articles' },
    { href: '/uses', label: 'Uses' },
]

export function NavLinks() {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'font-medium transition',
                            isActive
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                        )}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </>
    )
}
