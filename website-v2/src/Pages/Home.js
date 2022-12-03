import React from 'react';
import '../App.css';
import Resume from "../Files/Resume.pdf";

function Home() {
    return (
        <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
           <h1> About me </h1>
        </div>
        <div class="container text-right">
          <div class="row">
            <div class="col">
              
            </div>
            <div class="col">
            <p class="text-wrap">
            I have just completed my final year of my Computer Science degree at 
            UNSW.  I have a passion for all things coding, with my current interest
            being the .NET framework. I have extensive experience working with others,
            having completed over 5 group projects and in 2019 teaching in a foreign
            environment.  For a less concise history of my CS career please visit 
            my <a href="https://www.linkedin.com/in/aidanmarley/" class="link-primary">LinkedIn profile</a>
            . Otherwise, you can download my&nbsp; 
              <a href={Resume} target="_blank" 
                        rel="noreferrer">
                        Resume
              </a>
            .
            </p>
  
              <h3>Education</h3>
              <li>UNSW (Computer Science)</li>
              <li>Riverview</li>
              <h3>Work Experience</h3>
              <li>XLC Chiang Rai</li>
              <li>Clublinks Pty Ltd</li>
              <h3>Interests</h3>
              <li>.NET framework</li>
              <li>Blockchain and cryptography</li>
            </div>
            <div class="col">
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;