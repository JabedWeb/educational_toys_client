import React from 'react'
import { Container } from 'react-bootstrap'
import GallerySection from '../../components/GallerySection/GallerySection'
import ShopByCategory from '../../components/SjopByCategory/ShopByCategory'
import Banner from '../../components/Banner/Banner'
import Testimonial from '../../components/Testimonial/Testimonial'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Container>
      <ShopByCategory></ShopByCategory>
      <GallerySection></GallerySection>
      <Testimonial></Testimonial>
    </Container>
    </div>
  )
}

export default Home