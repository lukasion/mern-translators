'use client'

import {Listbox, ListboxItem, ListboxSection} from '@nextui-org/react'
import React from 'react'
import {usePathname} from 'next/navigation'
import DashboardIcon from "@/components/Icons/Dashboard";

const Sidenav = () => {
    const pathname = usePathname()

    const navMenuItems = [
        {label: 'Panel', href: '/'},
        {label: 'Zlecenia', href: '/orders'},
        {label: 'Użytkownicy', href: '/users'},
        {label: 'Ustawienia', href: '/settings'},
        {label: 'Kalendarz', href: '/calendar'},
    ]

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/'
        }

        if (pathname === null) {
            return false
        }

        return pathname.includes(href)
    }

    return (
        <aside className="hidden lg:block w-64 h-screen fixed">
            <Listbox
                aria-label="User Menu"
                // onAction={(key) => alert(key)}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                itemClasses={{
                    base: 'px-6 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80 data-[hover=true]:text-primary/80',
                }}
            >
                <ListboxSection showDivider>
                    {navMenuItems.slice(0, 4).map((item) => (
                        <ListboxItem
                            key={item.href}
                            href={item.href}
                            className={`${isActive(item.href) ? 'text-primary/90' : ''}`}
                        >
                            <div className={'flex items-center gap-3'}>
                                <DashboardIcon/>

                                {item.label}
                            </div>
                        </ListboxItem>
                    ))}
                </ListboxSection>
                <ListboxSection>
                    <ListboxItem
                        key='logout'
                        href='/logout'
                    >
                        Wyloguj się
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
        </aside>
    )
}

export default Sidenav