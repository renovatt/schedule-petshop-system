import { loginUser } from '@/lib/controllers/users'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const data = req.body
            const { user, token, error } = await loginUser(data)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(201).json({ user, token })
        } catch (error) {
            return res.status(500).json({ error: "Email ou senha incorretos." })
        }
    }
    res.status(405).json({ error: `Method ${req.method} is not allowed.` })
}

export default handler