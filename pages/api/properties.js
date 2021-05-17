import connectToDatabase from '../../config/mongodb'

export default async (req, res) => {
    const sale = req.body.sale || undefined
    const query = (sale != undefined) ? { sale } : {}

    try {
        const { client, properties } = await connectToDatabase()

        const resQuery = await properties
            .find(query)
            .toArray()

        client.close()
        res.status(200).json(resQuery)
    } catch(err) {
        res.status(400).json({
            err
        })
        console.log(err)
    }
}