import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ayse </span>
            from <span className="purple"> Turkey.</span>
            
              I always loved and had a great passion for tecnology. I attended 
          <span className="purple"> Software Testing in Automation</span> course in <span className="purple">CYDEO </span>and worked on manual and automation testing projects. Since testing 
          got me interested in programming I attended the <span className="purple">kodehode </span>course organized by <span className="purple"> JoobLoop </span>which included 6 months 
          of th theory and 6 months of internship. In this course, I learned the main languages and tools that we use to build websites such <span className="purple">HTML CSS
          JavaScript, </span> and <span className="purple">React.js.</span>
            
          
          
          </p>
          Apart from my job 
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> I spend time with my family 👪🐈
            </li>
            <li className="about-activity">
              <ImPointRight /> I love gardening  👩‍🌾🌼
            </li>
            <li className="about-activity">
              <ImPointRight /> I like training and taking long walks alone 🚶‍♀️
            </li>
          </ul>

       
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;