import React from "react"
import { Parallax, Background } from 'react-parallax';
import Link from "gatsby-link"
import ImageMountainGoat from "./mountain-goat.svg"
import ImageCloud from "./cloud-parallax.svg"
const ParallaxLanding = () => (
  <div style={{float: 'right'}}>
    <Parallax
      bgImage={ImageCloud}
      bgImageAlt="the cat"
      strength={100}
    >
      <img src={ImageMountainGoat} style={{marginTop: 100}}/>
    </Parallax>
  </div>
)

export default () =>
  <div style={{ margin: '3rem auto', maxWidth: 1500 , height: 2000}}>
    <ParallaxLanding />
  </div>