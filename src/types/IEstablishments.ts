export interface IEstablishments {
    _id: string,
    name: string,
    image: string,
    phone: string,
    city: string,
    address: string,
    mail: string,
    password: string,
    role: string,
    menu: [],
    __v: number
}

export type establishmentsState = {
    establishments:IEstablishments[];
    isLoading:boolean;
}