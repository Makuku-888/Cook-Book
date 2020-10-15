import React from "react";
import star from "../images/blackStar.png";
import knife from "../images/knife2.png";
import "./About.css";

const About = () => {
  const team = ["Cristiani", "Kene", "Marcus", "Ellesia"];

  return (
    <div className="about-container">
      {/* <div className="head"> */}
      <h1>About Us</h1>
      <div className="WhoWeAre-row">
        <img className="knife-left" src={knife} alt="knife" />
        <div className="WhoWeAre-Article">
          <h2>Who We Are</h2>
          <p className="article">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
        <img className="knife-right" src={knife} alt="knife" />
      </div>
      {/* </div> */}
      <div className="row-ourCrew">
        <h2>Our Crew</h2>
        <ul className="ul-crew">
          {team.map((member) => {
            return (
              <>
                <li className="li-crew">
                  <img className="member" src={star} alt="star" width="20rem" />
                  <p className="member">{member}</p>
                  <img className="member" src={star} alt="star" width="20rem" />
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="Mission-row">
        <div className="Mission-Article">
          <h2>Our Mission</h2>
          <p className="article">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br/>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

//  {/* , come from Brazil, Nigeria, Germany and the United States. We have put our brilliant minds together to provide for you the best cooking blog in the world. Enjoy!</p> */}
//  {/* </div> */}

//   <main>
//     <section>{/* Member 1 & 2 */}</section>
//     <section>
//       <img
//         src="https://media3.giphy.com/media/3orif1H0eAHuI7E2WY/giphy.gif"
//         alt="Homer is cooks"
//         width="900"
//         ></img>
//     </section>
//     <section>{/* Member 3 & 4 */}</section>
//   </main>
