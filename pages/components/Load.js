import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

function Load() {
    return (
        <Container>
            <Spinner icon={faSpinner} spin size="2x" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Spinner = styled(FontAwesomeIcon)`
    color: brown;
    opacity: 0.65;
`;

export default Load