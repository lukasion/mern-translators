"use client";

import {Card, CardBody} from "@nextui-org/card";

export default function Orders() {
    return (
        <Card className="p-4">
            <CardBody>
                <h1 className="font-semibold text-2xl mb-4">Wyszukiwarka użytkowników</h1>
                <p>
                    Wyszukaj użytkownika po adresie email, imieniu lub nazwisku.
                </p>
            </CardBody>
        </Card>
    );
}