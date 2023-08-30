import { PetFetchProps } from "@/components/Forms/ScheduleForm/types";

const dog_base_url = `https://api.thedogapi.com/v1/breeds`
const cat_base_url = `https://api.thecatapi.com/v1/breeds`

export const dogsBreedsReferences = async () => {
    try {
        const response = await fetch(dog_base_url)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json()

        const petReferences = data.map((item: PetFetchProps) => ({
            id: item.id,
            name: item.name,
            reference_image_id: item.reference_image_id
        }))

        return { response: petReferences }
    } catch (error) {
        return { error }
    }
}

export const catsBreedsReferences = async () => {
    try {
        const response = await fetch(cat_base_url)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json()
        const petReferences = data.map((item: PetFetchProps) => ({
            id: item.id,
            name: item.name,
            reference_image_id: item.reference_image_id
        }))
        return { response: petReferences }
    } catch (error) {
        return { error }
    }
}