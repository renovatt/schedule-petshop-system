import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserIdFromToken } from '@/services';
import { deleteAllCanceledSchedules, getAllCanceledSchedules } from '@/lib/controllers/schedules';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization header is missing.' })
    }

    const token = authorization.replace('Bearer ', '')
    const userId = getUserIdFromToken(token);

    if (req.method === "GET") {
        try {
            const { schedules, error } = await getAllCanceledSchedules(userId)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ schedules })
        } catch (err) {
            return res.status(400).json({ error: "Erro ao buscar dados." })
        }
    }

    if (req.method === 'DELETE') {
        try {
            const { schedules, error } = await deleteAllCanceledSchedules(userId)
            if (error) throw new Error(`Error: ${error}`)
            return res.status(200).json({ schedules })
        } catch (error) {
            return res.status(400).json({ error: "Erro ao deletar agendamentos." })
        }
    }
    res.status(501).end(`Method ${req.method} is not allowed.`)
}
export default handler
