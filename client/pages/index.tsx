"use client";

import {useState} from "react";
import '@/styles/globals.css'
import {Checkbox, NextUIProvider} from "@nextui-org/react";
import Sidenav from "@/components/Sidenav";

export default function Home() {
    const [response, setResponse] = useState('');

    const checker = async () => {
        fetch("http://localhost:5000/create-user")
            .then((response) => response.json())
            .then((json) => setResponse(json.msg));
    }

    return (
        <NextUIProvider>
            <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
                test
                <Sidenav/>
            </main>
        </NextUIProvider>
    );
}
