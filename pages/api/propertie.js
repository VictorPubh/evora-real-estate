import connectToDatabase from '../../config/mongodb'
import { ObjectId } from 'mongodb'

export default async (req, res) => {
    const { propertie } = connectToDatabase()
    const { id } = req.body || null

    if (id) {
        const resMongo = propertie.findOne(ObjectId(id))
        res.status(200).json(resMongo)
    }
}