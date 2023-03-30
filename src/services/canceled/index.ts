export const getAllCanceledSchedules = async (token: string) => {
    try {
        const response = await fetch('/api/canceled', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            return { response: json }
        } else {
            throw new Error(json.error)
        }
    } catch (error: any) {
        return { error: error.error }
    }
}

export const deleteAllCanceledSchedules = async (token: string) => {
    try {
        const response = await fetch(`/api/canceled`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            return { response: json }
        } else {
            throw new Error(json.error)
        }
    } catch (error: any) {
        return { error: error.message }
    }
}