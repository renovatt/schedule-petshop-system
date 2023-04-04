import { createClient, getAllClients } from '@/lib/controllers/clients'
import { getUserIdFromToken } from '@/services'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization header is missing.' })
    }

    const token = authorization.replace('Bearer ', '')
    const userId = getUserIdFromToken(token);

    if (req.method === "GET") {
        try {
            const { clients, error } = await getAllClients(userId)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ clients })
        } catch (error) {
            return res.status(400).json({ error: "Erro ao buscar dados." })
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { client, error } = await createClient(data, userId)
            if (error) throw new Error((error as any).message)
            return res.status(200).json({ client })
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    res.status(501).end(`Method ${req.method} is not allowed.`)
}

export default handler
