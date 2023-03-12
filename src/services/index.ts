import { ClientFormProps } from "@/components/Forms/ClientForm/types"
import { UserFormProps } from "@/components/Forms/LoginForm/type"
import { dogFetchProps, ScheduleFormProps } from "@/components/Forms/ScheduleForm/types"
import { parseCookies } from "nookies";
import jwt from 'jsonwebtoken';
import { SignInData, SignInResponse } from "@/components/contexts/authContext/types";

const base_url = `https://api.thedogapi.com/v1/breeds`
const { ['@nextauth-token']: token } = parseCookies();

export const renderScheduleList = async () => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const renderClientList = async () => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error: error as Error }
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const sendingClientFormToDatabase = async (data: ClientFormProps) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const updatingClientFormToDatabase = async (id: string, data: ClientFormProps) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const deletingClientFormToDatabase = async (id: string) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const sendingScheduleFormToDatabase = async (data: ScheduleFormProps) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const updatingScheduleFormToDatabase = async (id: string, data: ScheduleFormProps) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

export const deletingScheduleFormToDatabase = async (id: string) => {
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
            throw new Error(json.message)
        }
    } catch (error) {
        return { error }
    }
}

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

export const getUserIdFromToken = (token: string): string | undefined => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET ?? "");
        if (typeof decodedToken === 'string') return undefined;
        return decodedToken.userId;
    } catch (error) {
        return undefined;
    }
};