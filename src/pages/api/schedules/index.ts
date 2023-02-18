import type { NextApiRequest, NextApiResponse } from 'next'
import { createSchedule, getAllSchedules } from "@/lib/controllers/schedules";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "GET") {
        try {
            const { schedules, error } = await getAllSchedules()
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ schedules })
        } catch (err) {
            console.log(err)
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            const { schedule, error } = await createSchedule(data)
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
