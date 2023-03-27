import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserFormProps } from "@/components/Forms/LoginForm/type"
import { ClientFormProps } from "@/components/Forms/ClientForm/types"
import { SignInData, SignInResponse } from "@/components/contexts/authContext/types";
import { dogFetchProps, ScheduleFormProps } from "@/components/Forms/ScheduleForm/types"

interface DecodedToken extends JwtPayload {
    userId: string;
}

const base_url = `https://api.thedogapi.com/v1/breeds`

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
        const decodedToken = jwt.decode(token) as DecodedToken;
        return decodedToken.userId;
    } catch (error) {
        return undefined;
    }
};