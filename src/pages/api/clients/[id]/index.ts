import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteClient, findClient, updateClient } from '@/lib/controllers/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'PUT') {
        try {
            const { id } = req.query
            const data = req.body

            if (typeof id === 'string') {
                const { client, error } = await updateClient(id, data)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ client })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    if (req.method === 'GET') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { client, error } = await findClient(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ client })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { client, error } = await deleteClient(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ client })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }
}

export default handler