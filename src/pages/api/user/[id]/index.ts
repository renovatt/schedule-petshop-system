import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteUser, findUser, updateUser } from '@/lib/controllers/users'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization header is missing.' })
    }
    
    if (req.method === 'PUT') {
        try {
            const { id } = req.query
            const data = req.body

            if (typeof id === 'string') {
                const { user, error } = await updateUser(id, data)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ user })
            }
        } catch (error) {
            return res.status(400).json({ error: "Erro ao atualizar os dados do usuário." })
        }
    }

    if (req.method === 'GET') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { user, error } = await findUser(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ user })
            }
        } catch (error) {
            return res.status(400).json({ error: "Erro ao buscar usuário." })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { user, error } = await deleteUser(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ user })
            }
        } catch (error) {
            return res.status(400).json({ error: "Erro ao deletar usuário." })
        }
    }
}

export default handler