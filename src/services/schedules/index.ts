import { ScheduleFormProps } from "@/components/Forms/ScheduleForm/types"

export const renderScheduleList = async (token: string) => {
    try {
        const response = await fetch('/api/schedules', {
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

export const sendingScheduleFormToDatabase = async (data: ScheduleFormProps, token: string) => {
    try {
        const response = await fetch('/api/schedules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const json = await response.json();
        if (response.ok) {
            return { response: json }
        } else {
            throw new Error(json.error)
        }
    } catch (error: any) {
        return { error: error.message }
    }
}

export const updatingScheduleFormToDatabase = async (id: string, data: ScheduleFormProps, token: string) => {
    try {
        const response = await fetch(`/api/schedules/${id}`, {
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

export const deletingScheduleFormToDatabase = async (id: string, token: string) => {
    try {
        const response = await fetch(`/api/schedules/${id}`, {
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