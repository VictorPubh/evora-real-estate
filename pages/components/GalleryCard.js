import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'

export default function GalleryCard({ items }) {
    return (
      <Carousel fade>
        {items?.map((value, index) => (
          <Carousel.Item style={{ width: '100%', height: '24vh', zIndex: 0 }} key={index}>
            <Image
              src={value}
              layout="fill"
            />
          </Carousel.Item>
        ))}  
      </Carousel>
    )
}