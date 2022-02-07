import React from 'react';

const Marquee = () => {
    return (
        <div>
            <div class="row scrool">

                <div class="col-lg-2 col-md-2 col-sm-2 scrool_1">
                    ঘোষনা
                </div>
                <div class="col-lg-10 col-md-10 col-sm-10 scrool_2">
                    <marquee direction="left" scrollamount="4px" onmouseover="this.stop()" onmouseout="this.start()">
                        <i class="fa fa-stop-circle"></i> <a href="http://themesbazar.net/educational/announcement/%e0%a6%8f%e0%a6%87-%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2%e0%a7%87%e0%a6%b0-%e0%a6%a1%e0%a6%bf%e0%a6%9c%e0%a6%be%e0%a6%87%e0%a6%a8%e0%a6%9f%e0%a6%bf-%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a7%9্যা/">এই স্কুলের ডিজাইনটি ক্রয় করতে যোগাযোগ করুন : ০১৭৩২৬৬৭৩৬৪</a>
                        <i class="fa fa-stop-circle"></i> <a href="http://themesbazar.net/educational/announcement/%e0%a6%86%e0%a6%ae%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a4%e0%a6%bf%e0%a6%b7%e0%a7%8d%e0%a6%a0%e0%a6%be%e0%a6%a8/">আমাদের শিক্ষা প্রতিষ্ঠানে আপনাদের স্বাগতম।</a>
                    </marquee>
                </div>

            </div>
        </div>
    );
};

export default Marquee;