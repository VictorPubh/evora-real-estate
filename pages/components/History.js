import { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'
import people from '../../public/images/vanderleia.jpeg'

export default function History() {
    return (
        <Container>
            <Accordion>
                <h3>História</h3>
                <p>
                    Em meados de 2019, A <b>Évora Assessoria Imobiliária</b> foi idealizada pela sua fundadora <b>Vanderleia Neckel</b>. A idéia era unir a paixão por arquitetura e sua experiência em financiamentos imobiliários, para que as pessoas pudessem ter seus sonhos realizados por completo, desde a compra até a decoração final.
                    Após atendimentos e pesquisas, perceberam-se anseios e a real necessidade do público em obter uma assessoria para que os negócios fossem fechados de forma eficiente e que as construções e reformas, fossem perfeitas assim como seu primeiro imóvel construído e decorado do zero, não era qualquer imóvel, e sim um belíssimo sobrado de 270m²! A notícia se espalhou e a procura começou. A empresa estava tomando forma... E pensando em locais com bela decoração, a idealizadora escolheu Évora, uma linda cidade em Portugal como a sua homenageada para levar seus conhecimentos e talentos... Assim nasceu a <b>Évora Assessoria Imobiliária</b>.
                    Agora com sede física em Foz do Iguaçu/PR. <br />
                    <br />
                    Trazendo conhecimento, autoridade, qualidade, honestidade e perfeição em cada detalhe, para todos os que desejam realizar o sonho de comprar, vender, construir e reformar. Com a Assessoria, o cliente percebe que cada detalhe faz a diferença, seja em prazos, ou tranqüilidade. Com a Évora, seja qual for seu sonho imobiliário, nós podemos. Juntos, sonhamos e realizamos com você!
                </p>
                <AboutMore eventKey="0">
                    Ver Mais...
                </AboutMore>
                <Accordion.Collapse eventKey="0">
                   <div>
                    <h5>Quem é a nossa Fundadora?</h5>
                        <Image src={people} />
                        <h5>Vanderleia Neckel</h5>
                        <p>
                            Paranaense, 32 anos, mãe de 3 filhos lindos, casada, corretora e empresária.<br />
                            Experiência em Setor Imobiliário e há anos como Correspondente Bancário em Financiamentos, incluindo Imobiliários. <br />
                            Cursou vários cursos para aprimoramento e melhor experiência do cliente Évora: <br />
                            - TTI – Técnico em Transações Imobiliárias <br />
                            - Design de Interiores <br />
                            - Avaliação de Imóveis <br />
                            Desenvolveu vasta carteira de empresas parceiras para que a Assessoria seja completa. <br />
                            Possui parcerias que vão levar e elevar suas expectativas transformando o ato de sonhar, em realizar. <br />
                            A cada dia, uma nova conquista. A cada contrato, um novo formato, de se superar a cada dia, isso é fato. <br />
                            A cada reforma, um resultado, sempre melhor que o esperado. <br />
                            A cada entrega, um novo sorriso. <br />
                            E esse sorriso, pode ser o seu. <br />
                            Seja um cliente Évora Assessoria Imobiliária, onde nós sonhamos e realizamos com você. <br />
                            <span id="services" />
                        </p>
                   </div>
                </Accordion.Collapse>
            </Accordion>
        </Container>
    )
}

const Container = styled(Jumbotron)`
    margin: 1.5rem;
`;

const AboutMore = styled(Accordion.Toggle)`
    border: 0;
    background-color: transparent;
    margin: 1rem 0;
    color: rgb(168, 156, 132);
`;

const Image = styled.img`
    margin: 1rem 0 1rem 0;
    width: 14rem;
    height: 14rem;
    object-fit: cover;
    border-radius: 50%;
`;