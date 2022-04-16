import React from 'react';
import hero_ob from '../assets/images/man.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <div className="textSlider">
                            <h1>Need for End to End Financial Management</h1>
                            <h1>Lorem ipsum dolor sit amet lrom jfkds </h1>
                            <h1>Lorem amet elit lrom jfkds ipsum dolor sit </h1>
                        </div>
                        {/* <div id="slider">
                            <ul>
                                <li>
                                    <div className="slider-container">
                                        <p>Need for End to End Financial Management</p>
                                    </div>
                                </li>


                                <li>
                                    <div className="slider-container">
                                        <p>LOREM IPSUM DOLOR SIT AMET LROM JFKDS</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slider-container">
                                        <p>Lorem amet elit lrom jfkds ipsum dolor sit </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slider-container">
                                        <p>“Food was amazing and service could not have been better...we went for a quick lunch as our office is opposite the restaurant...very quick service...I am highly recommending this restaurant to all my family and friends...” <br />Nic Gent – Facebook Page</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slider-container">
                                        <p>“Went for the first time last night for my Husbands Birthday, friendly staff, very tasty food, would highly recommend, we will be back.” <br />Joanne Simms – Facebook Page</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slider-container">
                                        <p>“A lovely, well decorated restaurant, where great food is served by very friendly staff for a bargain price. The food is authentic and delicious. We'll definitely be returning.”<br />Joe H – Trip Advisor</p>
                                    </div>
                                </li>
                            </ul>
                        </div> */}

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aliquid velit debitis inventore!</p>
                        <div>
                            <a href="/contact" className="btn_style">Request a quote</a>
                            <a href="/contact" className="btn_stylish" style={{ marginLeft: "20px" }}>Know More</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="hero_obj">
                            <img src={hero_ob} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;