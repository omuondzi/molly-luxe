import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Impact = () => {
  const impacts = [
    {
      name: "Empowering Gig workers",
      path: "#",
    },

    {
      name: "Enhancing Health and Well-Being",
      path: "#",
    },
    {
      name: "Legal Protection and Advocacy",
      path: "#",
    },
    {
      name: "Social safety Nets",
      path: "#",
    },
    {
      name: "Promoting Sustainability",
      path: "#",
    },
    {
      name: "Gender Equality and Inclusion",
      path: "#",
    },
  ];

  return (
    <section className="main-impact-container">
      <section className="container">
        <section className="impact">
          <div className="intro">
            <div>
              <img src="./images/credlogo.png" alt="" />
            </div>

            <div className="impact-text">
              <h1>
                The <i>Impact</i>
              </h1>
              At Cred, our mission is to drive transformative change in Africa's
              informal sector.Here's how we create value for individials and
              society as a whole.
            </div>
          </div>

          <div className="impact-list">
            {impacts.map((impact) => (
              <Link to="#"><div className="impact-item" key={impact.name}>
                <div>{impact.name}</div>
                <div>
                  <Icon icon="ep:arrow-right-bold" />
                </div>
              </div></Link>
            ))}
          </div>
          <Link to="#"><p className="impact-link">Learn More On How We Measure Our Impact </p></Link>


        </section>
      </section>
    </section>
  );
};

export default Impact;
