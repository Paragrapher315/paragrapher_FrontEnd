import React from "react";
// import h from "../assets/h.png";
import k from "../assets/k.png";
import s from "../assets/s.png";
// import sh from "../assets/sh.jpg";
import c from "../assets/c.png";
import { fontFamily } from "@mui/system";
// import hm from "../assets/hm.png";




function Services() {
    let message = ``;
    return (
        <section class="section-white">

            <div class="container">

                <div class="row">

                    <div class="col-md-12 text-center">

                        <h2 style={{ fontFamily: 'BYekan', marginTop: '40px' }} class="section-title">تیم طراحی و توسعه ی پاراگرافر</h2>

                        <p class="section-subtitle">{message}</p>

                    </div>

                    <div class="col-sm-6 col-md-4">

                        <div class="team-item">

                            <img style={{ borderRadius: '10px' }} src={s} class="team-img" alt="pic" />
                            <h3 style={{ fontFamily: 'BYekan' }}>اردا صمدی</h3>
                            <div class="team-info"><p>FrontEnd developer</p></div>
                            <p style={{ fontFamily: 'BYekan' }}>آدم وقتی جوان است، به پیری جور دیگری فکر می کند. فکر میکند پیری یک حالت عجیب و غریبی است که به اندازه ی صدها کیلومتر و صدها سال از آدم دور است. اما وقتی به آن می رسد، می بیند هنوز همان دخترک پانزده ساله است که موهایش سفید شده، دور چشم هایش چین افتاده، پاهایش ضعف می رود و دیگر نمی تواند پله ها را سه تا یکی کند.</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a></li>

                                <li><a href="#" class="pinterest">
                                    <i class="fa fa-pinterest"></i>
                                </a></li>

                                <li><a href="#" class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a></li>

                                <li><a href="#" class="dribble">
                                    <i class="fa fa-dribbble"></i>
                                </a></li>

                            </ul>


                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">

                        <div class="team-item">

                            <img style={{ borderRadius: '10px' }} src={k} class="team-img" alt="pic" />

                            <h3 style={{ fontFamily: 'BYekan' }}>نیما کمبرانی</h3>

                            <div class="team-info"><p>BackEnd developer</p></div>

                            <p style={{ fontFamily: 'BYekan' }}>آدم وقتی جوان است، به پیری جور دیگری فکر می کند. فکر میکند پیری یک حالت عجیب و غریبی است که به اندازه ی صدها کیلومتر و صدها سال از آدم دور است. اما وقتی به آن می رسد، می بیند هنوز همان دخترک پانزده ساله است که موهایش سفید شده، دور چشم هایش چین افتاده، پاهایش ضعف می رود و دیگر نمی تواند پله ها را سه تا یکی کند.</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>

                                <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>

                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>

                                <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>

                            </ul>

                        </div>

                    </div>
                    <div class="col-sm-6 col-md-4">

                        <div class="team-item">

                            <img style={{ borderRadius: '10px' }} src={c} class="team-img" alt="pic" />

                            <h3 style={{ fontFamily: 'BYekan' }}>امیررضا کربنی</h3>

                            <div class="team-info"><p>Marketing Manager</p></div>

                            <p style={{ fontFamily: 'BYekan' }}>آدم وقتی جوان است، به پیری جور دیگری فکر می کند. فکر میکند پیری یک حالت عجیب و غریبی است که به اندازه ی صدها کیلومتر و صدها سال از آدم دور است. اما وقتی به آن می رسد، می بیند هنوز همان دخترک پانزده ساله است که موهایش سفید شده، دور چشم هایش چین افتاده، پاهایش ضعف می رود و دیگر نمی تواند پله ها را سه تا یکی کند.</p>

                            <ul class="team-icon">
                                
                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>

                                    <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>

                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>

                                    <li><a href="#" class="dribble">
                                        <i class="fa fa-dribbble"></i>
                                    </a></li>
                                

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Services;