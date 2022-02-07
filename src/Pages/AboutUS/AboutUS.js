import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const AboutUS = () => {
    return (
        <div>
            <section class="section_1">
                <div class="container  card main_website">
                    <Header></Header>
                    <div>
                        <div class="contuct_box">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <h3 class="contact_us_hadding">আমাদের সাথে অনলাইনে যোগাযোগ করুন</h3>
                                    <form method="post">

                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="text" name="first_name" class="form-control" id="email" placeholder="Fast Name*" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="text" name="last_name" class="form-control" id="pwd" placeholder="Last Name*" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="email" name="email" class="form-control" id="email" placeholder="Your Email*" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <div class="form-group">
                                                        <input type="number" name="number" class="form-control" id="pwd" placeholder="Your Phone Number*" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="sub-group">
                                                        <input type="text" name="subject" class="form-control" id="pwd" placeholder="Subject*" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="Chat-group">
                                                        <textarea class="form-control" name="massage" rows="5" id="comment" placeholder="Massage*"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Send Me Massage</button>
                                        </div>

                                    </form>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <h3 class="contact_us_hadding">আমাদের অফিস</h3>
                                    <div class="contact_us_text">
                                        <p>
                                            <p style={{ textAlign: 'left' }}>ডেমো সরকারী স্কুল এন্ড কলেজ<br />
                                                চুনারুঘাট সদর, চুনারুঘাট, হবিগঞ্জ।<br />
                                                মোবাইল : 01711112233<br />
                                                ই-মেইল : email@yourdomain.com<br />
                                                ওয়েবসাইট : www.yourdomain.com</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contuct_box">



                            <h3 class="contact_us_hadding">গুগুল ম্যাপে আমরা</h3>

                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <iframe title='locations' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116817.76011079275!2d90.28346402873137!3d23.798855593967662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e62ce5a2c5%3A0x8efe33d498b5366!2sThemes+Bazar!5e0!3m2!1sen!2sbd!4v1523176421094" width="100%" height="380" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                                </div>
                            </div>



                        </div>
                    </div>




                    <Footer></Footer>
                </div >
            </section >
        </div >
    );
};

export default AboutUS;