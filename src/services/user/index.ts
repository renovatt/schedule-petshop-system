import { UserFormProps } from "@/components/Forms/LoginForm/type"
import { SignInData, SignInResponse } from "@/contexts/authContext/types"

export const sendingLoginFormToDatabase = async (data: SignInData) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        if (response.ok) {
            return { response: json as SignInResponse }
        } else {
            throw new Error(json.error)
        }
    } catch (error: any) {
        return { error: error.message }
    }
}

export const sendingUserFormToDatabase = async (data: UserFormProps) => {
    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

export const updatingUserFormToDatabase = async (id: string, data: UserFormProps, token: string) => {
    try {
        const response = await fetch(`/api/user/${id}`, {
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

export const gettingUserById = async (id: string, token: string) => {
    try {
        const response = await fetch(`/api/user/${id}`, {
            method: 'GET',
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

export const deletingUserFormToDatabase = async (id: string, token: string) => {
    try {
        const response = await fetch(`/api/user/${id}`, {
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