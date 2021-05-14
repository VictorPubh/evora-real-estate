import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { isMobile } from 'react-device-detect'

export default function HomeCarousel() {
    const [items, setItems] = useState([])
    useEffect(async () => {
      let response
      if (isMobile) {
        response = await axios.get('api/mobileCarousel')
      } else {
        response = await axios.get('api/webCarousel')
      }
      setItems(response.data)
    })

    const itemsJsx = []
    for(const [index, value] of items.entries()) {
      itemsJsx.push(
      <Carousel.Item style={{ width: '100%', height: '75vh', zIndex: 0 }} key={index}>
        <Image
          src={value.url}
          layout="fill"
        />
        <Carousel.Caption>
          <h3>{ value.title }</h3>
          <p>{ value.sub }</p>
        </Carousel.Caption>
      </Carousel.Item>)
    }

    return (
      <Carousel fade style={{ marginTop: '5.5rem' }}>
        { itemsJsx }   
      </Carousel>
    )
}