"use client";

import {useState} from "react";
import '@/styles/globals.css'
import {Button, Input, NavbarContent, NavbarItem, NextUIProvider} from "@nextui-org/react";
import Sidenav from "@/components/Sidenav";
import {Navbar} from "@nextui-org/navbar";
import Link from "next/link";

export default function MyApp({Component, pageProps}) {
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
                    <Button auto onClick={checker} color="primary">Szukaj</Button>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Profil</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <main className="flex min-h-screen w-full gap-8 pt-6 px-4">
                <Sidenav/>

                <div className="flex flex-col w-full gap-5 ml-52 mr-12">
                    <Component {...pageProps} />

                    {response}
                </div>
            </main>
        </NextUIProvider>
    );
}
