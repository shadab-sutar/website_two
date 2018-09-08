import React, { Component } from "react";
import "./App.css";

import { Grid, Cell } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid className="banner-grid">
          <Cell id="bg-1">
            <img
              src={require("./Banner.JPG")}
              alt="banner"
              className="banner-image"
            />
            <p className="img-subtitle">
              Frontend Programmer, Blogger, Trainer and Creative.
            </p>
          </Cell>
          <Cell id="bg-2">
            <p className="title">
              SHADAB <span id="title-2">SUTAR</span>
            </p>
            <p className="subtitle">
              I BUILD AWESOME PRODUCTS FOR WEB AND MOBILE
            </p>
            <p className="social-media">
              <a href="https://github.com/shadab-sutar">
                <i className="fab fa-github-square" />
              </a>
              <a href="https://www.linkedin.com/in/shadab-jabbar-81a39b95/">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://stackoverflow.com/users/3209874/shadab?tab=profile">
                <i className="fab fa-stack-overflow" />
              </a>
            </p>
            <p className="action-btn">
              <a href="/" className="btn">
                Visit Blog
              </a>
              <a href="#contact-form" className="btn">
                Contact Me
              </a>
            </p>
          </Cell>
        </Grid>
        <Grid className="content-1-grid">
          <Cell id="c1g-1">
            <p className="subtitle-2">ABOUT ME</p>
            <p className="text-data">
              Lorem ipsum dolor sit amet, aperiam adolescens vituperata ad pri,
              est eu nostrud reprimique. Ius ne rebum voluptatum. Meis aliquip
              ponderum no mea, vim ut nostrud expetenda honestatis, illud
              posidonium ei usu. Nam in augue phaedrum. No dico fierent eum. Vis
              ceteros qualisque id. Duo nonumy insolens quaestio an, eu per vide
              munere omittantur, quo commodo antiopam salutatus eu. Omnes
              sensibus persecuti ea mei, eos ignota cetero imperdiet ad. Ludus
              sadipscing ius ei, vero ludus saepe mel te. His cu omnes labore
              iisque, ius an habeo gloriatur. Solet nostro sententiae sit cu,
              nemore vidisse ea mel, oportere forensibus omittantur ut est.
            </p>
          </Cell>
          <Cell id="c1g-2">
            <p className="subtitle-2">MY SKILLS</p>
            <p className="text-data">
              <p className="skill-name">SAPUI5 and SAP Fiori | 90%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "90%",
                    backgroundColor: "#56A902"
                  }}
                />
              </p>
              <p className="skill-name">HTML, JavaScript and CSS | 80%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "80%",
                    backgroundColor: "#2E294E"
                  }}
                />
              </p>
              <p className="skill-name">Angular and ReactJS | 65%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "65%",
                    backgroundColor: "#E53A40"
                  }}
                />
              </p>
              <p className="skill-name">UI and UX | 95%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "95%",
                    backgroundColor: "#9B8281"
                  }}
                />
              </p>
              <p className="skill-name">NodeJS, PHP and Java | 70%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "70%",
                    backgroundColor: "#47b8e0"
                  }}
                />
              </p>
              <p className="skill-name">MongoDB and MySQL | 82%</p>
              <p className="skill-bar-bg">
                <p
                  style={{
                    margin: "0px",
                    height: "4px",
                    width: "82%",
                    backgroundColor: "#a6172d"
                  }}
                />
              </p>
            </p>
          </Cell>
        </Grid>
        <Grid className="project-content">
          <p className="subtitle-2">SEE MY WORK</p>
          <Cell id="prj-1">
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
            <div className="prj-box">
              <p className="prj-title">Master Detail in SAPUI5</p>
              <p className="prj-text">yes</p>
              <a href="/" className="prj-btn">
                View Demo
              </a>
            </div>
          </Cell>
        </Grid>
        <Grid className="testimonials">
          <Cell id="test-1">
            <p className="subtitle-2" style={{ color: "white" }}>
              WHAT OTHERS SAY ABOUT ME!
            </p>
            <p className="comment left-comment">
              <p>
                "Shadab is a good worker, completed tasks on quickly and
                efficiently."
                <p className="comment-from">
                  - Courtney Dave, Founder PsychicThings
                </p>
              </p>
            </p>
            <p className="comment right-comment">
              <p>
                "Thank you for your hard and honest work. Looking forward to
                achieve more challenges"
                <p className="comment-from">- Erik F., Director FRT Inc.</p>
              </p>
            </p>
            <p className="comment left-comment">
              <p>
                "Shadab is an excellent worker"
                <p className="comment-from">
                  - Mirza Khan, Founder worldreviews.361db.com
                </p>
              </p>
            </p>
            <p className="comment right-comment">
              <p>
                "Thank you for your time."
                <p className="comment-from">
                  - Ingrid Gauthier., Founder Ingrid Inc.
                </p>
              </p>
            </p>
          </Cell>
        </Grid>
        <Grid className="contact-form" id="contact-form">
          <Cell id="cnt-1">
            <p className="subtitle-2">GET IN TOUCH.</p>
            <p className="label">Enter Your Name :</p>
            <input type="text" name="username" className="input" />
            <p className="label">Enter Your Email :</p>
            <input type="text" name="email" className="input" />
            <p className="label">Enter Your Message :</p>
            <textarea rows="5" cols="5" className="textarea" name="message" />
            <input type="button" value="Send Message" className="btn msg-btn" />
          </Cell>
        </Grid>
        <Grid className="footer">
          <Cell id="foot-1">
            <p className="text-data-foot">&copy; www.shadabsutar.com, 2018.</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
