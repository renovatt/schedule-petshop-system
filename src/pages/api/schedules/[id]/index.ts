import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteSchedule, findSchedule, updateSchedule } from "@/lib/controllers/schedules"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization header is missing.' })
    }

    if (req.method === 'PUT') {
        try {
            const { id } = req.query
            const data = req.body

            if (typeof id === 'string') {
                const { schedule, error } = await updateSchedule(id, data)
                if (error) throw new Error((error as any).message)
                return res.status(200).json({ schedule })
            }
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
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
            return res.status(400).json({ error: "Erro ao buscar dados do agendamento." })
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
            return res.status(400).json({ error: "Erro ao deletar agendamento." })
        }
    }
}

export default handler