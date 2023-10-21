import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <div class="footer-banner-image"><img 
          src={urlFor(image)}
          className="footer-banner-image"
        /></div>


          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
        <Link href={'/product/headphones'}>
            <button type="button" class="shop-now">Shop Now</button>
          </Link>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          
        </div>
        

      </div>
    </div>
  )
}

export default FooterBanner