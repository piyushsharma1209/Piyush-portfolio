import React from "react";
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import myCV from '../../assets/piyush-cv.pdf';

const Intro = () => {
    const handleCVButtonClick = () => {
        const anchor = document.createElement('a');
        anchor.href = myCV;
        anchor.download = 'Piyush_CV.pdf'; // You can specify the desired filename here
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Piyush</span> <br />Front-end devloper</span>
                <p className="introPara">I am a newly graduated front-end devloper with great <br /> skills in coding and designing.</p>
                {/* Add an onClick event handler to the button */}
                <button className="btn" onClick={handleCVButtonClick}>
                    <img src={btnImg} alt="Hire Me" className="btnImg" />My CV
                </button>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;