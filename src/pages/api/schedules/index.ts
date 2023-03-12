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
            console.log(err)
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { schedule, error } = await createSchedule(data, userId)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ schedule })
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
