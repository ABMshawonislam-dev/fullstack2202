"use client"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
      src={`http://localhost:8000/uploads/avatar-1711707964976-571108412-Screenshot_1.jpg`}
      width={1920}
      height={500}
      alt="Picture of the author"
    />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={`http://localhost:8000/uploads/avatar-1711707964976-571108412-Screenshot_1.jpg`}
      width={1920}
      height={500}
      alt="Picture of the author"
    />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
      src={`http://localhost:8000/uploads/avatar-1711707964976-571108412-Screenshot_1.jpg`}
      width={1920}
      height={500}
      alt="Picture of the author"
    />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner