import connectToDatabase from '../../config/mongodb'

export default async (req, res) => {
    const sale = req.body.sale || undefined
    const query = (sale != undefined) ? { sale } : {}
    const preview = req.body.preview || false

    try {
        const { properties } = await connectToDatabase()

        let response
        if (preview) {
            response = await properties
                .find(query)
                .limit(4)
                .toArray()
        } else {
            response = await properties
                .find(query)
                .toArray()
        }

        res.json(response)
    } catch(err) {
        res.status(400).json({
            err
        })
        console.log(err)
    }
}