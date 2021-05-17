import connectToDatabase from '../../config/mongodb'

export default async (req, res) => {
    const { propertie } = connectToDatabase()
    const { id } = req.body || "new"

    
}