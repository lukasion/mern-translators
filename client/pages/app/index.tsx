"use client";

import Sidenav from "@/components/Sidenav";

export default function Index() {
    return (
        <div>
            <Sidenav/>

            <h1 className="text-2xl mb-6">Dashboard eTłumacze</h1>
            <p>
                Witaj w panelu administracyjnym eTłumacze. Znajdziesz tutaj wszystkie informacje dotyczące Twojego
                konta.
            </p>
        </div>
    );
}