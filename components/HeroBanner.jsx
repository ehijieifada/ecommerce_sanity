import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner, buttonText }) => {
  return (
    <div className="hero-banner-container">
      <div class="hero-banner-image"><img src={urlFor(heroBanner.image)} alt="headphones"
         className="hero-banner-image" /></div>
      <div>
      
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        

        <div>
        <Link href={'/product/headphones'}>
            <button type="button">Shop Now
            </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p><strong>{heroBanner.desc}</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner