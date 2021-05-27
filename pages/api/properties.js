import connectToDatabase from '../../config/mongodb'

export default async (req, res) => {
    const sale = req.body.sale || undefined
    const query = (sale != undefined) ? { sale } : {}
    const { client, properties } = await connectToDatabase()

    try {
        if (properties) {
            const resQuery = await properties
                .find(query)
                .toArray()
        
            res.status(200).json(resQuery)
        }

        return false

    } catch(err) {
        res.status(400).json({
            err
        })

        console.log(err)
    }
}