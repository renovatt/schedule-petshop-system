export type DataListSchedulesProps = ScheduleFormProps[]

export type ScheduleFormProps = {
    id: string,
    tutor: string,
    pet: string,
    breed: string,
    reference_image_id: string,
    age: string,
    weight: string
    sex: string,
    date: Date,
    created_at: Date
    canceled_date: Date,
    specie: boolean,
    status: boolean,
    client: boolean,
};

export type PetFetchProps = {
    id: string
    name: string
    image: {
        url: string
    }
    reference_image_id: string
}