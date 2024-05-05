"use client";

import {useState} from "react";
import '@/styles/globals.css'
import {Input, NavbarContent, NavbarItem, NextUIProvider} from "@nextui-org/react";
import Sidenav from "@/components/Sidenav";
import AppContainer from "@/components/AppContainer";
import {Navbar} from "@nextui-org/navbar";
import Link from "next/link";

export default function Home() {
    const [response, setResponse] = useState('');

    const checker = async () => {
        fetch("http://localhost:5000/create-user")
            .then((response) => response.json())
            .then((json) => setResponse(json.msg));
    }

    return (
        <NextUIProvider>
            <Navbar className={'bg-transparent'}>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Input labelPlacement={'outside-left'} type="text" variant="bordered" label="Wyszukaj element..."/>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Profil</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <main className="flex min-h-screen w-full gap-5 pt-6">
                <Sidenav/>

                <AppContainer/>
            </main>
        </NextUIProvider>
    );
}
