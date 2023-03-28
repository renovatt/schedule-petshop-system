import { dogFetchProps } from "@/components/Forms/ScheduleForm/types";

const base_url = `https://api.thedogapi.com/v1/breeds`

export const dogsBreedsReferences = async () => {
    try {
        const response = await fetch(base_url)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
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