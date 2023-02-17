import { dogFetchProps } from "@/components/Forms/ScheduleForm/types"

export const base_url = `https://api.thedogapi.com/v1/breeds`

export const dogFetchApi = async (setPet) => {
    const response = await fetch(base_url)
    const data = await response.json()
    const petResponse = data.map((item: dogFetchProps) => ({
        id: item.id,
        name: item.name,
        image: item.image.url,
        reference_image_id: item.reference_image_id
    }))
    setPet(petResponse)
    console.log(petResponse)
}