export interface IEstablishments {
    _id: "6406e2afd93a08984a6133ee",
    name: "Кофетун",
    image: "https://unicodebootcamp.s3.amazonaws.com/coffeetun.jpeg",
    phone: "89393939939",
    city: "Грозный",
    address: "пр. Путина 11",
    mail: "tun@bk.ru",
    password: "$2b$05$zQ4DWzCIedntQCcTKf//q.1O6IOv/.nSjmjwrONE6CSOE5P0ZMxTa",
    role: "cafe",
    menu: [],
    __v: 0
}

export type establishmentsState = {
    establishments:IEstablishments[];
    isLoading:boolean;
}