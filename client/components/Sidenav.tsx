'use client'

import {Listbox, ListboxItem, ListboxSection} from '@nextui-org/react'
import React from 'react'
import {usePathname} from 'next/navigation'
import DashboardIcon from "@/components/Icons/Dashboard";
import UserIcon from "@/components/Icons/User";
import OrdersIcon from "@/components/Icons/Orders";
import SettingsIcon from "@/components/Icons/Settings";
import LogoutIcon from "@/components/Icons/Logout";

const Sidenav = () => {
    const pathname = usePathname()

    const navMenuItems = [
        {label: 'Panel', href: '/', icon: <DashboardIcon/>},
        {label: 'Zlecenia', href: '/orders', icon: <OrdersIcon/>},
        {label: 'Użytkownicy', href: '/users', icon: <UserIcon/>},
        {label: 'Ustawienia', href: '/settings', icon: <SettingsIcon/>},
        {label: 'Kalendarz', href: '/calendar', icon: <DashboardIcon/>},
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

    // @ts-ignore
    return (
        <aside className="hidden lg:block w-64 h-screen fixed">
            <Listbox
                aria-label="User Menu"
                // onAction={(key) => alert(key)}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 max-w-[300px] overflow-visible"
                itemClasses={{
                    base: 'px-6 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80 data-[hover=true]:text-primary/80',
                }}
            >
                <ListboxSection showDivider>
                    {navMenuItems.map((item) => (
                        <ListboxItem
                            key={item.label}
                            href={item.href}
                            className={`${isActive(item.href) ? 'text-primary/90' : ''}`}
                        >
                            <div className={'flex items-center gap-3'}>
                                {item.icon}
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
                        <div className={'flex items-center gap-3'}>
                            <LogoutIcon/>
                            Wyloguj się
                        </div>
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
        </aside>
    )
}

export default Sidenav