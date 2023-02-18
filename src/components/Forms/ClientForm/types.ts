export type DataListClientsProps = {
    clients?: ClientFormProps[]
}

export type ClientFormProps = {
    id: string
    name: string,
    age: string,
    sex: string,
    street: string,
    house_number: string,
    neighborhood: string
    city: string
    contact: string,
};

export type Adress = {
    street: string,
    house_number: string,
    neighborhood: string
    city: string
}