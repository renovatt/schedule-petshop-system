import { createClient, getAllClients } from '@/lib/controllers/clients'
import type { NextApiRequest, NextApiResponse } from 'next'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "GET") {
        try {
            const { clients, error } = await getAllClients()
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ clients })
        } catch (err) {
            console.log(err)
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { client, error } = await createClient(data)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ client })
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
