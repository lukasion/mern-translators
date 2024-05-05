"use client";

import {useState} from "react";
import '@/styles/globals.css'
import {Checkbox, NextUIProvider} from "@nextui-org/react";
import Sidenav from "@/components/Sidenav";
import AppContainer from "@/components/AppContainer";

export default function Home() {
    const [response, setResponse] = useState('');

    const checker = async () => {
        fetch("http://localhost:5000/create-user")
            .then((response) => response.json())
            .then((json) => setResponse(json.msg));
    }

    return (
        <NextUIProvider>
            <main className="flex min-h-screen w-full gap-5">
                <Sidenav/>
                
                <AppContainer/>
            </main>
        </NextUIProvider>
    );
}
