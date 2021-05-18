import { createContext, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { isMobile } from 'react-device-detect'
import { useGlobal } from '../context/global'

export default function Gallery() {
    const { items, setItems } = useGlobal()
    useEffect(async () => {
      const { data } = await axios.post('api/carousel', { isMobile })
      setItems(data)
    }, [])

    return (
      <Carousel fade style={{ marginTop: '5.5rem' }}>
        {items.map((value, index) => (
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
    )
}