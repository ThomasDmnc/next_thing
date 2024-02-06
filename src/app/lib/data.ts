export type Reservation = {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guest: number;
    message: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}