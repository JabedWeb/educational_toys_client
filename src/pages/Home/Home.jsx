import React from 'react'
import { Container } from 'react-bootstrap'
import GallerySection from '../../components/GallerySection/GallerySection'
import ShopByCategory from '../../components/SjopByCategory/ShopByCategory'

function Home() {
  return (
    <Container>
      <ShopByCategory></ShopByCategory>
      <GallerySection></GallerySection>
    </Container>
  )
}

export default Home