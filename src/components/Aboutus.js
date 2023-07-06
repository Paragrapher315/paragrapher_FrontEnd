import React from "react";
import { motion } from "framer-motion";
import k from "../assets/k.png";
import s from "../assets/s.png";
import c from "../assets/c.png";
import h from "../assets/h.png";
import sh from "../assets/sh.jpg";
import a from "../assets/a.png";
import './Aboutus.css'

const Services = () => {
    const teamMembers = [
        {
            name: "اردا صمدی",
            role: "FrontEnd developer",
            image: s,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
        {
            name: "نیما کمبرانی",
            role: "BackEnd developer",
            image: k,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
        {
            name: "امیررضا کربنی",
            role: "Marketing Manager",
            image: c,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
        {
            name: "کیاکسار شیروانی مقدم",
            role: "BackEnd developer",
            image: sh,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
        {
            name: "هدیه اسحقی",
            role: "FrontEnd developer",
            image: h,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
        {
            name: "یاسین عسکریان",
            role: "BackEnd developer",
            image: a,
            description:
                "آدم وقتی جوان است، به پیری جور دیگری فکر می کند...",
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 style={{ fontFamily: 'BYekan' }} className="section-title">تیم طراحی و توسعه ی پاراگرافر</h2>
                        <p style={{ fontFamily: 'BYekan' }} className="section-subtitle">مکانی برای به اشتراک گذاشتن متن ها</p>
                    </div>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-sm-6 col-md-4">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                className="team-item"
                            >
                                <img
                                    className="team-img"
                                    src={member.image}
                                    alt="pic"
                                />
                                <div className="team-content">
                                    <h3 style={{ fontFamily: 'BYekan' }}>{member.name}</h3>
                                    <p style={{ fontFamily: 'BYekan' }} className="role">{member.role}</p>
                                    <p style={{ fontFamily: 'BYekan' }} className="description">{member.description}</p>
                                </div>
                                <ul className="team-icon">
                                    <li>
                                        <a href="#" className="twitter">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="pinterest">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="facebook">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dribble">
                                            <i className="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
