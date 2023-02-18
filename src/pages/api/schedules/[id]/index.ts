import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteSchedule, findSchedule, updateSchedule } from "@/lib/controllers/schedules"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'PUT') {
        try {
            const { id } = req.query
            const data = req.body

            if (typeof id === 'string') {
                const { schedule, error } = await updateSchedule(id, data)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ schedule })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    if (req.method === 'GET') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { schedule, error } = await findSchedule(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ schedule })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.query

            if (typeof id === 'string') {
                const { schedule, error } = await deleteSchedule(id)
                if (error) throw new Error(`Error: ${error}`)
                return res.status(200).json({ schedule })
            }
        } catch (error) {
            return res.status(500).json({ "error": error })
        }
    }
}

export default handler