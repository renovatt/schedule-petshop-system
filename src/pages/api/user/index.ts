import { createUser, getAllUsers } from '@/lib/controllers/users'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "GET") {
        try {
            const { users, error } = await getAllUsers()
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ users })
        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar usuários." })
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { user, error } = await createUser(data)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(201).json({ user })
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar usuário." })
        }
    }
    res.status(405).json({ error: `Method ${req.method} is not allowed.` })
}

export default handler