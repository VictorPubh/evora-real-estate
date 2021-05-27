import styled from 'styled-components'
import SquadBackground from '../../public/images/quadrado.png'

export default function Metodology() {
    return (
        <Container>
        <Anchor id="metodology" />
        <Board>
          Metodologia da Assesoria Imobiliária Évora
        </Board>
        <Row>
          <Col>
            <div>
              <h2>1.</h2>
              <Text> Preencha sua ficha 
              e faremos uma busca 
              para encontrar o 
              seu imóvel ideal. </Text>
            </div>
          </Col>
          <Col>
            <div>
              <h2>2.</h2>
              <Text>Encontramos seu 
              imóvel e mediamos 
              a compra grantindo 
              sucesso em sua nova 
              aquisição. </Text>
            </div>
          </Col>
          <Col>
            <div>
              <h2>3.</h2>
              <Text>Fializamos toda a
              negociação com total
              garantia, sigilo e
              muita qualidade até
              a entrega das chaves
              e documentação.</Text>
            </div>
          </Col>
        </Row>
        </Container>
    )
}

const Container = styled.div`

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
    padding: 0 2.2rem;
    font-size: 1rem;
`;

const Board = styled.div`
    background-color: rgb(168, 156, 132);
    padding: .75rem;
    color: white;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 1.1rem;
`;