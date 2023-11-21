import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">Jeg heter Piyush Sharma, og jeg er nylig utdannet front-end utvikler. Jeg er svært motivert for å begynne karrieren min og ønsker å bidra til å utvikle innovative løsninger hos dere. <br /><br />

                Jeg har allerede tilegnet meg betydelig kunnskap innen webutvikling og har fått erfaring med flere verktøy og teknologier, som HTML, CSS, JavaScript, React, APIer og Git. Gjennom skoleprosjekter og egne prosjekter har jeg jobbet med å utvikle nettsider og applikasjoner, og jeg har alltid vært nysgjerrig på nye trender og teknologier innen dette feltet. <br /><br />

                I tillegg til min bakgrunn innen utvikling, har jeg også erfaring med design ved hjelp av verktøy som Adobe XD og Figma. Dette har gitt meg en bredere forståelse av webdesign og brukeropplevelser. Jeg er i stand til å betrakte kodingen min fra et designperspektiv, slik at produktene jeg utvikler ikke bare fungerer optimalt, men også har et tiltalende visuelt uttrykk.

                Når det gjelder interaksjonsdesign, har jeg gjennom mine studier og prosjekter fått innsikt i hvordan man skaper brukervennlige og engasjerende grensesnitt. Jeg har kunnskap om å utforme interaksjoner som bidrar til å forbedre brukeropplevelsen og øke bruksvennligheten til nettstedene og applikasjonene mine. <br /><br />

                I tillegg har jeg god kunnskap til Photoshop og andre Adobe programer som jeg har drevet med i fritiden for gøy.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Bootstrap & SCSS</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML & CSS</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;