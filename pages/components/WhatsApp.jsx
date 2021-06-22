import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const openWhatsApp = () => {
    const URI = 'https://wa.me/message/NRPFLWHZI7BKN1'
    window.open(URI)
}

export default function whatsAppButton() {
    return (
        <Container>
            <Button onClick={openWhatsApp}>
                <FontAwesomeIcon icon={faWhatsapp} />
            </Button>
        </Container>
    )
}

const Container = styled.div`
    background-color: #128C7E;
    position: fixed;
    right: 2.5rem;
    bottom: 2.5rem;
    border-radius: 1.25rem;
    z-index: 9999;

    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-cotent: center;
`;

const Button = styled.button`
    border: 0;
    background-color: transparent;
    color: white;
    font-size: 2rem;
    text-algin: center;
    width: 100%;
`;