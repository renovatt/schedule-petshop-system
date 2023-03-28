import { ClientFormProps } from "@/components/Forms/ClientForm/types"

export const renderClientList = async (token: string) => {
    try {
        const response = await fetch('/api/clients', {
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

export const sendingClientFormToDatabase = async (data: ClientFormProps, token: string) => {
    try {
        const response = await fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
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

export const updatingClientFormToDatabase = async (id: string, data: ClientFormProps, token: string) => {
    try {
        const response = await fetch(`/api/clients/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: JSON.stringify(data)
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

export const deletingClientFormToDatabase = async (id: string, token: string) => {
    try {
        const response = await fetch(`/api/clients/${id}`, {
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