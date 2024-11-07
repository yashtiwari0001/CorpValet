import React from 'react';
import './Company.css';
import Logo1 from '/clone.png';
import Logo2 from '/logo2.png';
import Logo3 from '/logo3.png';
import Logo4 from '/logo4.png';
import Logo5 from '/logo5.png';
import Logo6 from '/logo6.png';
import Logo7 from '/logo7.png';
import Logo8 from '/logo8.png';
import Logo9 from '/logo9.png';
import Logo10 from '/logo10.png';

const Company = () => {
    return (
        <>
            <h2 className='h2'>2000+ businesses from all over the world trust <span className="corpvalet">CorpValet</span> to setup and manage their business in the United States</h2>
            <div className="marquee">
                <div className="marquee-inner">
                   <img src={Logo1} alt="Image 1" className="image" />
                    <img src={Logo2} alt="Image 2" className="image" />
                    <img src={Logo3} alt="Image 3" className="image" />
                    <img src={Logo4} alt="Image 4" className="image" />
                    <img src={Logo5} alt="Image 5" className="image" />
                    <img src={Logo6} alt="Image 6" className="image" />
                    <img src={Logo7} alt="Image 7" className="image" />
                    <img src={Logo8} alt="Image 8" className="image" />
                    <img src={Logo9} alt="Image 9" className="image" />
                    <img src={Logo10} alt="Image 10" className="image" />
                </div>
           </div>
        </>
    );
};

export default Company;
