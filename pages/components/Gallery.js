import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

export default function Gallery({ items }) {
    return (
      <Container>
        <Carousel fade>
          {items?.map((value, index) => (
            <Carousel.Item style={{ width: '100%', height: '80vh', zIndex: 0 }} key={index}>
              <Image
                src={value.url}
                layout="fill"
              />
              <Carousel.Caption>
                <h3>{ value.title }</h3>
                <p>{ value.sub }</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}  
        </Carousel>

        <span id="properties"/>
      </Container>
    )
}

const Container = styled.div`
  margin-top: 5.5rem;
`