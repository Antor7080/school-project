import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const SingleTeacher = () => {
    const { id } = useParams();
    const data = [
        {
            "id": "0000",
            "name": "রামচরন দাস",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/12.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0001",
            "name": "কাইয়ুম আহমেদ",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/11.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        },
        {
            "id": "0002",
            "name": "মো: আব্দুল হামিদ",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/10.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0003",
            "name": "রফিকুল আমিন",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/09.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0004",
            "name": "জান্নাতুন নাঈম",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/08.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0005",
            "name": "রহিমা আফরোজ",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/07.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0006",
            "name": "রবিন আহমেদ",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/06.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0007",
            "name": "মো: সানাউল্লাহ",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/05.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0008",
            "name": "রাজিয়া খাতুন",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/04-1.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "0009",
            "name": "আফরোজা বেগম",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/03-1.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "00010",
            "name": "মো: আব্দুর রহিম",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/02-1.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
        ,
        {
            "id": "00012",
            "name": "তাসনুবা শামীম",
            "img": "http://themesbazar.net/educational/wp-content/uploads/2018/04/01-2.gif",
            "designation": "সহকারী শিক্ষক",
            "address": "কেউন্দা",
            "post": "নরপতি",
            "Upozila": "চুনারুঘাট",
            "Zilla": "হবিগঞ্জ",
            "study": "এমএ",
            "number": "০১৭১১০০২২৩৩",
            "nid": "১২৫৪৫৬৫৪৫৫৫৪৫৫"
        }
    ]

    const information = data?.find(e => e.id === id)



    return (
        <div>
            <section class="section_1">
                <div class="container  card main_website">
                    <Header></Header>
                    <div>
                        <div class="row">
                            <div class="col-lg-10 col-md-10 col-sm-10 mx-auto">

                                <div class="page_dtails">
                                    <h4 class="page_hadding text-center">{information.name}</h4>
                                    <p>
                                        <p className='text-center'>
                                            <img class="text-center size-full wp-image-160" src={information.img} alt="" width="400" height="500" />
                                        </p>
                                        <p style={{ textAlign: 'center' }}>সহকারী শিক্ষক<br />
                                            গ্রাম : কেউন্দা<br />
                                            পো: নরপতি<br />
                                            উপজেলা : চুনারুঘাট<br />
                                            জেলা : হবিগঞ্জ।<br />
                                            শিক্ষাগত যোগ্যতা : এমএ<br />
                                            ভোটার আইডি : ১২৫৪৫৬৫৪৫৫৫৪৫৫<br />
                                            মোবাইল : ০১৭১১০০২২৩৩</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer></Footer>

            </section >
        </div >
    );
};

export default SingleTeacher;