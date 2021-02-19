import React from 'react';

export default function Contact() {
    return (

        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                </div>

                <div className="row mt-1">

                <div className="col-lg-4">
                    <div className="info">
                    <div className="address">
                        <i className="icofont-google-map"></i>
                        <h4>Location:</h4>
                        <p>Azerbaijan, Baku</p>
                    </div>

                    <div className="email">
                        <i className="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <p>ceferovagulbahar4@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="icofont-phone"></i>
                        <h4>Call:</h4>
                        <p>+(994)51-546-44-40</p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">
                    <input type="email" className="form-control mail-message" id="mail" name="newsletter" placeholder="Email.."/>
                    <br/>
                    <textarea className="form-control mail-message" id="message" placeholder="Message.." ></textarea>
                    <button type="submit" value="send" id="submit" className="btn btnGeneral" >
                        SEND
                    </button>

                    <span id="error_message" className="text-danger"></span>  
                    <span id="success_message" className="text-success"></span>  
                </div>

            </div>
        </div>
        </section>
   
    );
  }
  