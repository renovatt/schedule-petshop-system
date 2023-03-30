import type { NextApiRequest, NextApiResponse } from 'next'
import { createSchedule, getAllSchedules } from "@/lib/controllers/schedules";
import { getUserIdFromToken } from '@/services';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization header is missing.' })
    }

    const token = authorization.replace('Bearer ', '')
    const userId = getUserIdFromToken(token);

    if (req.method === "GET") {
        try {
            const { schedules, error } = await getAllSchedules(userId)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ schedules })
        } catch (err) {
            return res.status(400).json({ error: "Erro ao buscar dados." })
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { schedule, error } = await createSchedule(data, userId)
            if (error) throw new Error((error as any).message)
            return res.status(200).json({ schedule })
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    res.status(501).end(`Method ${req.method} is not allowed.`)
}

export default handler
