export type DataListClientsProps = ClientFormProps[]

export type ClientFormProps = {
    id: string
    name: string,
    age: string,
    sex: string,
    userId: string,
    street: string,
    house_number: string,
    neighborhood: string
    city: string
    contact: string,
    created_at: Date
};

export type Adress = {
    street: string,
    house_number: string,
    neighborhood: string
    city: string
}