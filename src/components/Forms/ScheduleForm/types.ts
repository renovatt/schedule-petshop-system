export type DataListSchedulesProps = {
    schedules?: ScheduleFormProps[]
}

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
    time: string,
    created_at: Date
    client: boolean,
};

export type dogFetchProps = {
    id: string
    name: string
    image: {
        url: string
    }
    reference_image_id: string
}