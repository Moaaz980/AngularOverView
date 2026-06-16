
// interfacce che descrive i dati che mi arrivano dal Back end 
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geography;
}

interface Geography {
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
