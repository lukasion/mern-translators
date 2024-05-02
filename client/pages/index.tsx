"use client";

import Image from "next/image";
import {useState} from "react";
import '@/styles/globals.css'

export default function Home() {
    const [response, setResponse] = useState('test');

    const checker = async () => {
        fetch("http://localhost:5000/create-user")
            .then((response) => response.json())
            .then((json) => setResponse(json.msg));
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
            <button
                className="mt-8 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg pointer"
                onClick={checker}
            >
                Check axios
            </button>
            {response}

        </main>
    );
}
