import axios from 'axios'
import Properties from '../components/dashboard/Properties'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router'

const Id = () => {
    const router = useRouter()
    const { id } = router.query || null
    if(id) {
        axios.get('api/propertie', {
            body: {
                id
            }
        })
        // useContext
    }
    return <Properties />
}

export default Id