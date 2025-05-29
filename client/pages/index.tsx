export default function Index() {
    return (
        <div>
            <header
                className="before:content-[''] before:inset-0 before:absolute before:bg-black relative before:opacity-70"
                style={{backgroundImage: `url(/images/background.jpg)`}}>
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col justify-center py-12 text-white">
                        <h1 className="text-3xl font-bold mb-6">Znajdź tłumacza przysięgłego w pobliżu</h1>
                        <h2>Portal tłumaczy</h2>
                    </div>
                </div>
            </header>

            <main className="container mx-auto">
                <div className="flex flex-col w-full gap-5 mr-12 py-12">
                    <h1 className="text-2xl mb-6">Wyszukaj tłumacza w pobliżu</h1>
                    <p>
                        Witaj w panelu administracyjnym eTłumacze. Znajdziesz tutaj wszystkie informacje dotyczące
                        Twojego
                        konta.
                    </p>
                </div>
            </main>
        </div>
    );
}