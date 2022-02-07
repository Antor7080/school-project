import React from 'react';

const Slider = () => {
    return (
        <div className='container slider'>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="http://themesbazar.net/educational/wp-content/uploads/2018/04/04.gif" class="d-block w-100" alt="..." />
                                <h4 class="centered"><a href="http://themesbazar.net/educational/home-photo/%e0%a6%b9%e0%a7%8b%e0%a6%ae%e0%a6%aa%e0%a7%87%e0%a6%9c-%e0%a6%ab%e0%a6%9f%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a6%be%e0%a6%b0%e0%a7%80-%e0%a6%a6%e0%a7%81%e0%a6%87/">হোমপেজ ফটোগ্যালারী এক</a></h4>
                            </div>
                            <div class="carousel-item">
                                <img src="http://themesbazar.net/educational/wp-content/uploads/2018/04/03.gif" class="d-block w-100" alt="..." />
                                <h4 class="centered"><a href="http://themesbazar.net/educational/home-photo/%e0%a6%b9%e0%a7%8b%e0%a6%ae%e0%a6%aa%e0%a7%87%e0%a6%9c-%e0%a6%ab%e0%a6%9f%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a6%be%e0%a6%b0%e0%a7%80-%e0%a6%a6%e0%a7%81%e0%a6%87/">হোমপেজ ফটোগ্যালারী দুই</a></h4>
                            </div>
                            <div class="carousel-item">
                                <img src="http://themesbazar.net/educational/wp-content/uploads/2018/04/02.gif" class="d-block w-100" alt="..." />
                                <h4 class="centered"><a href="http://themesbazar.net/educational/home-photo/%e0%a6%b9%e0%a7%8b%e0%a6%ae%e0%a6%aa%e0%a7%87%e0%a6%9c-%e0%a6%ab%e0%a6%9f%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a6%be%e0%a6%b0%e0%a7%80-%e0%a6%a6%e0%a7%81%e0%a6%87/">হোমপেজ ফটোগ্যালারী তিন</a></h4>
                            </div>
                            <div class="carousel-item">
                                <img src="http://themesbazar.net/educational/wp-content/uploads/2018/04/01.gif" class="d-block w-100" alt="..." />
                                <h4 class="centered"><a href="http://themesbazar.net/educational/home-photo/%e0%a6%b9%e0%a7%8b%e0%a6%ae%e0%a6%aa%e0%a7%87%e0%a6%9c-%e0%a6%ab%e0%a6%9f%e0%a7%8b%e0%a6%97%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a6%be%e0%a6%b0%e0%a7%80-%e0%a6%a6%e0%a7%81%e0%a6%87/">হোমপেজ ফটোগ্যালারী চার</a></h4>
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Slider;