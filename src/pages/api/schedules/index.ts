import { createSchedule, getAllSchedules } from "@/lib/controllers/schedules";
import { NextRequest, NextResponse } from "next/server";


const handler = async (req: NextRequest, res: NextResponse) => {
    if (req.method === "GET") {
        try {
            const { schedules } = await getAllSchedules()
            return res.status(200).json({ schedules })
        } catch (err) {
            console.log(err)
        }
    }

    if (req.method === 'POST') {
        try {
            const data = req.body
            console.log(data)
            const { schedule, error } = await createSchedule(data)
            if (error) throw new Error(error)
            return res.status(200).json({ schedule })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    // res.setHeader('Allow', ['GET', 'POST'])
    // res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
