import { Form, Button } from "react-bootstrap"
import { useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
import 'basscss'

function insertProperties() {
    const [formTitle, setFormTitle] = useState()
    const [formDetails, setFormDetails] = useState()
    const [formSale, setFormSale] = useState(false)
    const [listImages, setListImages] = useState([])

    const mainImageInput = [<Form.Control className="mb1" onChange={(e) => setValueInputList(e.target.value, -1)} key="main" />]
    const newImageInput = (i) => <Form.Control className="mb1" key={i} onChange={(e) => setValueInputList(e.target.value, i)} />

    const [imgInputs, setImgInputs] = useState(mainImageInput)
    
    function setValueInputList(value, index) {
        let tempList = listImages
        tempList[index + 1] = value
        setListImages(tempList)
    }

    function addFormInput() {
        let arr = [mainImageInput]
        for (let i = 0; i < imgInputs.length; i++) {
            arr.push(newImageInput(i))
        }
        setImgInputs(arr)
    }

    function subtractFormInput() {
        function procedure(arr) {
            return arr
                .reverse()
                .slice(1, arr.length)
        }
        if (imgInputs.length > 1) {
            setImgInputs(procedure(imgInputs))
            setListImages(procedure(listImages))
        }
    }

    async function submitForm(event) {
        event.preventDefault()
        const req = await axios.post('api/insertProperties', {
            title: formTitle,
            details: formDetails,
            images: listImages,
            sale: formSale
        })
        console.log(req)
    }

    return (
        <Form style={styles.container} onSubmit={submitForm} className="p2">
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control placeholder="e.g, Casa de 5 quartos" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Detalhes do Imóvel</Form.Label>
                <Form.Control as="textarea" rows={3} value={formDetails} onChange={(e) => setFormDetails(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Check type="checkbox" label="A venda" value={formSale} onClick={() => setFormSale(!formSale)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Imagens do Carousel</Form.Label>
                { imgInputs }
                <Button variant="success" className="mr1" onClick={addFormInput}>
                    <FontAwesomeIcon icon={faPlus} /> Imagem
                </Button>
                <Button variant="danger" className="mr1" onClick={subtractFormInput}>
                    <FontAwesomeIcon icon={faMinus} /> Imagem
                </Button>
                <Button type="submit" className="right">
                    <FontAwesomeIcon icon={faSave} /> Salvar Imóvel
                </Button> 
            </Form.Group>
        </Form>
    )
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '0 auto'
    }
}

export default insertProperties