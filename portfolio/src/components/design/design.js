import React from 'react'
import './design.css'
import UIDesign from '../../assets/ui-design.png';

const Design = () => {
    const handleSkillBarClick = (link) => {
        window.location.href = link; // Redirect to the specified link
    };
    return (
        <section id="skills">
            <span className="skillTitle">My Designs</span>
            <div className="skillBarss">
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/77b4c6df-d242-4e4d-9341-1afc143a6e0a-22e7/?fullscreen')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>GameHub Style tile</h2>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/a0fc1e1d-765b-46e2-96b8-ccae9d411b90-f5af/screen/04b24ab6-2eb1-491c-8f60-55d8da1563e4')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>GameHub</h2>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/0336dfab-7007-4397-bee6-6462389e8cb2-5665/screen/93b24bcb-0996-40a8-b4a9-01632be12053')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>GameHub Mobile</h2>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/c6c4ae7d-81b1-48df-b92a-00330e9e7270-9397/')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Community Science Museum Style tile</h2>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/d8b47c4e-0f3d-4562-92a6-4838b0cff08a-8de7/')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Community Science Museum</h2>
                        </div>
                    </div>
                </div>
                <div className="skillBars">
                    <div className="skillBar" onClick={() => handleSkillBarClick('https://xd.adobe.com/view/1382a131-d199-487f-b600-106b9276bc77-46d1/')}>
                        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Community Science Museum Mobile</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design;