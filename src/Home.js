import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                <img 
                    className ="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB665379733_.jpg" 
                    alt=""
                />

                <div className="home__row">
                {/* 2 products */}
                    <Product title='Think and grow rich' 
                    price={19.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg"
                    rating={5} 
                    />

                <Product title='APPLE iPhone 12 - 128 GB Zwart 5G' 
                    price={849} 
                    image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_78269812/fee_786_587_png/APPLE-iPhone-12---128-GB-Zwart-5G"
                    rating={5} 
                    />
                </div>
                
                <div className="home__row">
                {/* 3 products */} 

                <Product title='SIEMENS Warmtepompdroger WT8HXM75NL' 
                    price={839.99} 
                    image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_75663994/fee_786_587_png/SIEMENS-WT8HXM75NL"
                    rating={5} 
                    />

                <Product title='Nesspreso Machine MAGIMIX M196 CitiZ Zwart' 
                    price={129.99} 
                    image="https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-77640220/fee_786_587_png/MAGIMIX-M196-CitiZ-Zwart"
                    rating={3} 
                    />

                <Product title='PHILIPS Scheerapparaat S5588/30 Shaver Series 5000 Zwart' 
                    price={89.99} 
                    image="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79347302/fee_786_587_png/PHILIPS-S5588-30-Shaver-Series-5000-Zwart"
                    rating={2} 
                    />

                </div>

                <div className="home__row">
                <Product title='Samsung UE65TU8505 - 65 inch - 4K LED - 2020 - Europees model' 
                    price={1499} 
                    image="https://media.s-bol.com/mO3E99J0jL4r/1200x784.jpg"
                    rating={4} 
                    />
                </div>
               

                
            </div>
        </div>  
    )
}

export default Home
