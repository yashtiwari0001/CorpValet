import React from 'react'
import Map from '/price.jpeg';
import Audit from '/auditprotection.webp';
import './Overviewing.css'

const Overviewing = () => {
    return (
        <>
            <div className="mainpricing">
                <h1>Overview Of CropValet</h1>
                <div className="mainone">
                    <div className="maino">
                        <div className="mleft">
                            <h4>
                                One Price only, No Hidden Charges
                            </h4>
                            <p>
                                CorpValet provides everything for a single price—no upselling, no hidden fees, no extra payment processing costs, and no taxes added later. You pay exactly what you see here, without any surprises.
                            </p>
                        </div>
                        <div className="mright">
                            <img id='map' src={Map} alt="Map" />
                        </div>
                    </div>
                    <div className="maino">
                        <div className="mleft">
                            <img id='mleftimg' src={Audit} alt="Audit" />
                        </div>
                        <div className="mright">
                            <h4>
                                Finally get some sleep - never worry about another audit
                            </h4>
                            <p id='p'>
                              Never lose sleep over a sales tax audit ever again. We proactively minimize audit risk and manage any you might face, so you can focus on growing your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overviewing;
