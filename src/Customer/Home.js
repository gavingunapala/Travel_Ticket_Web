import React, {useEffect, useState} from 'react';
import logo2 from '../Images/logo2.gif'
import logo1 from '../Images/logo1.gif'
import logo3 from '../Images/logo3.gif'

const Home = () => {

    return (
        <div>
            <br />
            {/*<Greeting isLoggedIn={isLoggedIn} />*/}
            <br /><br /><br />
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4">
                        <a href="/VisualFeedback" style={{color: 'inherit', textDecoration: 'none'}}>
                            <div className='card'>
                                <div className='homeCard '>
                                    <img src={logo2} alt="loading..." loading="auto" alt="center" height="500"
                                         width="380" border='20'/>
                                    {/*<img src={bed} loading="auto" alt="center" height="500"*/}
                                    {/*     width="380" border='20'/>*/}
                                    <br /><br />
                                    <div className='text-center'>
                                        <h3 className='btn qtyAdd'>Start Journey</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/Login" style={{color: 'inherit', textDecoration: 'none'}}>
                            <div className='card'>
                                <div className='homeCard '>
                                    <img src={logo1} loading="auto" alt="center" height="500"
                                         width="380" border='20'/>
                                    <br /><br />
                                    <div className='text-center'>
                                        <h3 className='btn qtyAdd'>Apply for Token</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="/LoginUser" style={{color: 'inherit', textDecoration: 'none'}}>
                            <div className='card'>
                                <div className='homeCard'>
                                    <img src={logo3} loading="auto" alt="center" height="500"
                                         width="380" border='20'/>
                                    <br /><br />
                                    <div className='text-center'>
                                        <h3 className='btn qtyAdd'>Recharge Account</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;