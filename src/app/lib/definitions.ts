export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Reservation = {
    id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    message: string;
};

export type MenuItem = {
    id: string;
    name: string;
    description: string;
    ingredients: string;
    price: number;
    image: string;
    category: string;
    availability: boolean;
};

export type RestaurantInfo = {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    openingHours: object;
}

export type OpeningHour = {
    day: string;
    open: string;
    close: string;
}