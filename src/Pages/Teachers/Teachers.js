import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./teacherData.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <section class="section_1">

            <div className='container  card main_website'>
                <Header></Header>
                <div>
                    <div class="container employee_box">
                        <div class="row">
                            {
                                teachers.map(data => <div class="col-lg-3 col-md-3 col-sm-3">
                                    <div class="image_title">
                                        <div class="service-img">
                                            <a href="http://themesbazar.net/educational/2018/04/23/%e0%a6%b0%e0%a6%be%e0%a6%ae%e0%a6%9a%e0%a6%b0%e0%a6%a8-%e0%a6%a6%e0%a6%be%e0%a6%b8/">
                                                <img src={data.img} class="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <h4 class="employee_imformation">
                                            <Link to={`/teacher/${data.id}`}>{data.name} </Link>
                                        </h4>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default Teachers;