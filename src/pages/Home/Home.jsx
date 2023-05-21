import React from 'react'
import { Container } from 'react-bootstrap'
import GallerySection from '../../components/GallerySection/GallerySection'
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory'
import Banner from '../../components/Banner/Banner'
import Testimonial from '../../components/Testimonial/Testimonial'
import RegisterSection from '../../components/BenifitSection/RegisterSection'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Container>
      <GallerySection></GallerySection>
      <ShopByCategory></ShopByCategory>
    </Container>
    <RegisterSection></RegisterSection>
    <Testimonial></Testimonial>
    </div>
  )
}

export default Home