import { loginUser } from '@/lib/controllers/users'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const data = req.body
            const { user, token, error } = await loginUser(data)
            if (error) throw new Error((error as any).message)
            return res.status(202).json({ user, token })
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    res.status(501).json({ error: `Method ${req.method} is not allowed.` })
}

export default handler