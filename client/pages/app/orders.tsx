"use client";

import {Card, CardBody} from "@nextui-org/card";

export default function Orders() {
    return (
        <Card className="p-4">
            <CardBody>
                <h1 className="font-semibold text-2xl mb-4">Wyszukiwarka zleceń</h1>
                <p>
                    Wyszukaj zamówienie po numerze, nazwie klienta lub innym parametrze.
                </p>
            </CardBody>
        </Card>
    );
}