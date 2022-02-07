import React from 'react';
import Histroy from '../../../Components/Histroy';
import Marquee from '../../../Components/Marquee';
import Slider from '../../../Components/Slider';
import Footer from '../../../Shared/Footer';
import Header from '../../../Shared/Header';

const Home = () => {
    return (
        <div>
            <section class="section_1">
                <div class="container  card main_website">
                    <Header></Header>
                    <Slider></Slider>

                    <Marquee></Marquee>
                    <Histroy></Histroy>
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default Home;