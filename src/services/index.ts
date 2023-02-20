import { ClientFormProps } from "@/components/Forms/ClientForm/types"
import { dogFetchProps, ScheduleFormProps } from "@/components/Forms/ScheduleForm/types"

const base_url = `https://api.thedogapi.com/v1/breeds`

export const renderScheduleList = async () => {
    try {
        const response = await fetch('/api/schedules')
        const json = await response.json()
        return json
    } catch (error) {
        return error
    }
}

export const renderClientList = async () => {
    try {
        const response = await fetch('/api/clients')
        const json = await response.json()
        return json
    } catch (error) {
        return error
    }
}

export const sendingClientFormToDatabase = async (data: ClientFormProps) => {
    try {
        const response = await fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return { response: json }
    } catch (error) {
        return { error }
    }
}

export const sendingScheduleFormToDatabase = async (data: ScheduleFormProps) => {
    try {
        const response = await fetch('/api/schedules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        return { response: json }
    } catch (error) {
        return { error }
    }
}

export const dogsBreedsReferences = async () => {
    try {
        const response = await fetch(base_url)
        const data = await response.json()
        const petReferences = data.map((item: dogFetchProps) => ({
            id: item.id,
            name: item.name,
            image: item.image.url,
            reference_image_id: item.reference_image_id
        }))
        return { response: petReferences }
    } catch (error) {
        return { error }
    }
}