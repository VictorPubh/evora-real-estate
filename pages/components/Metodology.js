import { faAngleDoubleRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import SquadBackground from '../../public/images/quadrado.png'

export default function Metodology() {
    return (
        <Container>
        <Anchor id="metodology" />
        <Board>
          Metodologia da Assessoria Imobiliária Évora
        </Board>
        <Row>
          <Col>
            <div>
              <Title>1. Compra e Venda!</Title>
              <Text>
                Idealize e nós buscamos o imóvel ideal pra você. <br />
                Conte com a nossa Assessoria e garantia, o melhor negócio na venda do seu imóvel! </Text>
            </div>
          </Col>
            {(!isMobile) ? <FontAwesomeIcon icon={faAngleDoubleRight} color="rgb(168, 156, 132)" size="2x" /> : null}
          <Col>
            <div>
              <Title>2. Nossa assesoria é completa.</Title>
              <Text>Locação residencial e comercial, reformas em geral e construção! <br />
              Junto com Você, nós idealizamos desde o projeto até a entrega das chaves.</Text>
            </div>
          </Col>
            {(!isMobile) ? <FontAwesomeIcon icon={faAngleDoubleRight} color="rgb(168, 156, 132)" size="2x" /> : null}
          <Col>
            <div>
              <Title>3. Garantia!</Title>
              <Text>Finalizamos toda a sua negociação com total sigilo, ética e garantia de qualidade em todos os serviços prestados. <br /><br /> Seja cliente Évora e viva a melhor experiência em negócios imobiliários!</Text>
            </div>
          </Col>
        </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0.5rem 1.5rem;
`;

const Anchor = styled.span``;
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
const Col = styled.div`
    background-image: url('${SquadBackground}');
    background-size: 100% 100%;
    max-width: 20rem;
    height: 20rem;

    display: flex;
    align-items: center;
    text-align: center;
`;

const Text = styled.h5`
    padding: 0 3rem;
    font-size: 1rem;
`;

const Board = styled.div`
    background-color: rgb(168, 156, 132);
    padding: 1.5rem;
    color: white;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 1.1rem;
`;