import connectToDatabase from '../../config/mongodb'

export default async (req, res) => {
    const mobile = req.body.isMobile || false
    try {
        const { carousel } = await connectToDatabase()
        const query = await carousel.find({ mobile }).toArray()
        res.status(200).json(query)
    } catch(err) {
        res.status(400).json({
            err
        })
        console.log(err)
    }
}