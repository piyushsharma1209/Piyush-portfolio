import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio1.png';
import Portfolio2 from '../../assets/portfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/portfolio4.png';
import Portfolio5 from '../../assets/portfolio5.png';
import Portfolio6 from '../../assets/portfolio6.png';



export const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">Here are some of my work that i have done using HTML, CSS, BOOTSTRAP, SCSS, JS & React</span>
            <div className="worksImgs">
                <a href="https://epic-golick-9d5846.netlify.app/" className="worksImgLink">
                    <img src={Portfolio1} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Open</span>
                    </div>
                </a>
                <a href="https://peaceful-euclid-381eff.netlify.app/" className="worksImgLink">
                    <img src={Portfolio2} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Open</span>
                    </div>
                </a>
                <a href="https://prismatic-bubblegum-a80871.netlify.app/" className="worksImgLink">
                    <img src={Portfolio3} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Open</span>
                    </div>
                </a>
                <a href="https://teal-platypus-d9b7d1.netlify.app/" className="worksImgLink">
                    <img src={Portfolio4} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Open</span>
                    </div>
                </a>
                <a href="https://github.com/piyushsharma1209/Piyo-shop-ca" className="worksImgLink">
                    <img src={Portfolio5} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Javascript Framework</span>
                    </div>
                </a>
                <a href="https://github.com/Noroff-FEU-Resits/semester-project-2-resit-piyushsharma1209" className="worksImgLink">
                    <img src={Portfolio6} alt="" className="worksImg" />
                    <div className="overlay">
                        <span className="openText">Semester Project 2</span>
                    </div>
                </a>
            </div>
        </section>
    )
};

export default Works;