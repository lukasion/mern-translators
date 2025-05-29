"use client";

import {useState} from "react";
import '@/styles/globals.css'
import {Button, Input, NavbarContent, NavbarItem, NextUIProvider} from "@nextui-org/react";
import Sidenav from "@/components/Sidenav";
import {Navbar} from "@nextui-org/navbar";
import Link from "next/link";

export default function MyApp({Component, pageProps}) {
    return (
        <NextUIProvider>
            <Navbar className={'bg-transparent'}>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Profil</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <Component {...pageProps} />
        </NextUIProvider>
    );
}
