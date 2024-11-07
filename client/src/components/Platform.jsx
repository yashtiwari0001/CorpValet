import React from 'react'
import calc from '/calc.png';
import './Platform.css'
import info from '/info.svg';
import bank from '/bank.svg';
import filling from '/filling.svg';
import license from '/license.svg'
import tax from '/tax.svg';
import itin from '/itin.svg';
import assist from '/assist.svg';
import sale from '/sale.svg';
const Platform = () => {
    return (
        <>
            <div className="platform">
                <h1>One platform to serve all your business needs!</h1>
                <div className="gridbox">
                    <div className="grid-sub">
                        <img src={info} alt="calc" />
                        <h3>Business formation</h3>
                        <p>Incorporate your business in all 50 states of the USA with ease!
                        </p>
                    </div>
                    <div className="grid-sub">
                        <img src={bank} alt="calc" />
                        <h3>Business Bank account</h3>
                        <p>Open your business bank account in USA seamlessly with our expert guidance!
                        </p>
                    </div>
                    <div className="grid-sub">
                        <img src={filling} alt="calc" />
                        <h3>Business Filings and Amendment</h3>
                        <p>Streamline your business fillings and amendments with our personal support!</p>
                    </div>
                    <div className="grid-sub">
                        <img src={license} alt="calc" />
                        <h3>Trademarks, Licenses and Permits</h3>
                        <p>Secure your licenses and permits effortlessly with our expert assistance!
                        </p>
                    </div>
                    <div className="grid-sub">
                       <img src={calc} alt="calc" />
                        <h3>Bookkeeping</h3>
                        <p>Hire experts to close your books each month—quickly and accurately!

                        </p>
                    </div>
                   <div className="grid-sub">
                        <img src={tax} alt="calc" />
                        <h3>Tax Filing</h3>
                        <p>File your federal taxes effortlessly with our professional support on time</p>
                    </div>
                    <div className="grid-sub">
                        <img src={itin} alt="calc" />
                        <h3>ITIN</h3>
                        <p> Get your ITIN application as a non-US resident with CorpValet. </p>
                    </div>
                   <div className="grid-sub">
                        <img src={assist} alt="calc" />
                        <h3>IRS Assistance</h3>
                        <p> Get your ITIN application as a non-US resident with CorpValet. </p>
                    </div>
                    <div className="grid-sub">
                        <img src={sale} alt="calc" />
                        <h3>Sales taxes</h3>
                        <p> Get your ITIN application as a non-US resident with CorpValet. </p>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Platform