import React from 'react'
import one from '/contentone.png';
import two from '/contenttwo.png';
import three from '/contentthree.png';
import four from '/contentfour.png';
import "./Satisfaction.css"
const Satisfaction = () => {
    return (
        <>
            <div className="satisfaction">
                <h1>Make the Most of Our Experience</h1>
                <div className="contentboxes">
                    <div className="firstcontent">
                        <img src={one} alt="businessformed" />
                        <p id='opo'>2000+ Business registered </p>


                    </div>
                    <div className="firstcontent">
                        <img src={two} alt="service" />
                        <p>Services Backed by a 100% Satisfaction Guarantee</p>

                    </div>
                    <div className="firstcontent">
                        <img src={three} alt="realpeople" />
                        <p>Real People Working for Your Business</p>

                    </div>
                    <div className="firstcontent">
                        <img src={four} alt="servingBusiness" />
                        <p>Servicing Businesses Across All 50 States</p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Satisfaction