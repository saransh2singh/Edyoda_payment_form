import React, { useState } from "react";
import '../index.css';

export default function Main(){

    const [price,setPrice] = useState(0);
    const [subsFee,setSubsFee] = useState(0);
    const[discPrice,setDiscPrice] = useState(0);
    const [style,setStyle] = useState("prev");
    const [style1,setStyle1] = useState("prev");
    const [style2,setStyle2] = useState("prev");
    

    function updatePrice1(){
        setPrice(179);
        setStyle("after");
        setStyle1("prev");
        setStyle2("prev");
        setSubsFee(18500);
        setDiscPrice(subsFee-price);
    }
    function updatePrice2(){
        setPrice(149);
        setStyle1("after");
        setStyle("prev");
        setStyle2("prev");
        setSubsFee(18500);
        setDiscPrice(subsFee-price);
    }
    function updatePrice3(){
        setPrice(99);
        setStyle2("after");
        setStyle("prev");
        setStyle1("prev");
        setSubsFee(18500);
        setDiscPrice(subsFee-price);
    }

    return(
        <div className="main">
            <div className="main--left">
                <div className="main--description">
                Access curated courses worth
                <br></br>
                &#8377; <span className="cut">18,500</span> at just <span className="blue size"> &#8377; 99</span> per year!
                </div>
                <div className="features">
                    <div className="flex">
                        <img className="width" src="../Icon (1).png"></img>
                        <p><span className="blue">100+</span> Job relevant courses</p>
                    </div>
                    <div className="flex">
                        <img className="width" src="../clock.png"></img>
                        <p><span className="blue">20,000+</span> Hours of content</p>
                    </div>
                    <div className="flex">
                        <img className="width" src="../live.png"></img>
                        <p><span className="blue">Exclusive</span> webinar access</p>
                    </div>
                    <div className="flex">
                        <img className="width" src="../Icon (2).png"></img>
                        <p>Scholarship worth <span className="blue">&#8377; 94,500 </span></p>
                    </div>
                    <div className="flex">
                        <img className="width" src="../Icon (4).png"></img>
                        <p><span className="blue">Ad Free</span> learning experience</p>
                    </div>
                </div>
            </div>
            <div className="main--right">
                <div className="top">
                <div className="flex--col">
                <div className="blue--bg form-top pointer">1</div>
                <div className="navb">Sign Up</div>
                </div>
                <div className="flex--col">
                <div className="blue--bg pointer"><p className="form-top">2</p></div>
                <div className="navb">Subscribe</div>
                </div>  
                </div>
                <h3 className="select--plan">Select your subscription plan</h3>
                <div className="bottom">
                    <label className="firstt" for="first">
                    <div className={"options--flex old-value"}>
                        <div className="separate--price">
                            <div className="top1">Offer Expired</div>
                        <input type="radio" id="first" name="plans" checked></input>
                        <label className="bold">12 Months Subscription</label>
                        </div>
                        <div className="price--font">
                            <div>Total &#8377;<span className="bold--price">99</span></div>
                            <div ><span className="bold">&#8377;8</span>   /mo</div>
                        </div>
                    </div></label>
                    <label for="second" onClick={updatePrice1}>
                    <div className={style}>
                    <div className="separate--price">
                        <div className="top2">Recommended</div>
                        <input type="radio" className="check" id="second" name="plan"></input>
                        <label for="second" className="bold">12 Months Subscription</label>
                    </div>
                    <div className="price--font">
                            <div>Total &#8377;<span className="bold--price">179</span></div>
                            <div><span className="bold">&#8377;15</span>   /<span className="gray">mo</span></div>
                    </div>
                    </div>
                    </label>
                    <label className="third" onClick={updatePrice2}>
                    <div className={style1}>
                    <div className="separate--price">
                        <input type="radio" className="check" id="third" name="plan"></input>
                        <label for="third" className="bold">6 Months Subscription</label>
                    </div>
                    <div className="price--font">
                            <div>Total &#8377;<span className="bold--price">149</span></div>
                            <div><span className="bold">&#8377;25</span>   /<span className="gray">mo</span></div>
                    </div>
                    </div>
                    </label>
                    <label className="fourth" onClick={updatePrice3}>
                    <div className={style2}>
                    {/* <div className="price--font">  */}
                    <div className="separate--price">  
                        <input type="radio" className="check" id="fourth" name="plan"></input>
                        <label for="fourth" className="bold">3 Months Subscription</label>
                    </div>
                    <div className="price--font">
                            <div>Total &#8377;<span  className="bold--price">99</span></div>
                            <div><span className="bold">&#8377;33</span>   /<span className="gray">mo</span></div>
                    </div>
                    </div>
                    </label>
                    <hr></hr>
                    <div className="bottom-items">
                    <div className="flex--bottom marg">
                        <div>
                    <p>Subscription Fee</p>
                    </div>
                    <div className="bold--price">
                        &#8377; {subsFee}
                    </div>
                    </div>
                    <div className="limited--offer">
                    <div className="flex--bottom">
                        <div className="color--offer"><b>Limited time offer</b></div>
                        <div className="bold--price">-&#8377; {discPrice}</div>
                    </div>
                    <div className="fl">
                    <img className="clock1" src="../clock1.png"></img>
                    <p className="color--offer">Offer valid till 25th March 2023</p>
                    </div>
                    </div>
                    <div className="flex--last">
                        <div><span className="wt">Total</span><span> (Incl. of 18% GST)</span></div>
                        <div className="bold--price">&#8377;{price}</div>
                    </div>
                    <div className="items-flex">
                        <button className="btns btn1">CANCEL</button>
                        <button className="btns btn2">PROCEED TO PAY</button>
                    </div>
                    <img className="payment" src="Razorpay Icon.png"></img>
                </div>
                </div>
            </div>
        </div>
    )
}
