import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "./Services.scss";

function Services() {
  return (
    <React.Fragment>
      <div className="Header">
        <Typography className="Header__Title">Services</Typography>
      </div>
      <div className="Services" id="services">
        <div className="Frontend">
          <div className="Frontend__Content">
            <Typography className="Frontend__Content__Title">
              User Interfaces
            </Typography>
            <div className="Frontend__Content__Line"></div>
            <Card className="Frontend__Content__Card">
              <div className="Frontend__Content__Card__Content">
                <Typography className="Frontend__Content__Card__Content__Text">
                  Researching the software's targeted audience, our specialists
                  identify priorities and principles that will establish the
                  future design. Our designers create the best possible sketches
                  on the basis of UI / UX principles and present them to you.
                  <br />
                  <br />
                  Ocron is helping businesses go mobile in multiple industries,
                  including eLearning, eCommerce, travel & hospitality, real
                  estate, and more.
                  <br />
                  <br />
                  Our web development services are backed by a team of
                  battle-tested engineers experienced in multiple types of web
                  software and industries. We deliver web systems of any size
                  and complexity — from budding startup products to high-end
                  enterprise solutions.
                </Typography>
              </div>
            </Card>
          </div>
        </div>
        <div className="Backend">
          <div className="Backend__Content">
            <Typography className="Backend__Content__Title">
              Backend Applications
            </Typography>
            <div className="Backend__Content__Line"></div>
            <Card className="Backend__Content__Card">
              <div className="Backend__Content__Card__Content">
                <Typography className="Backend__Content__Card__Content__Text">
                  Our developers have vast experience in backend application
                  development. This enables us to provide the best fitting
                  platform and infrastructure software stack based on project
                  requirements.
                  <br />
                  <br />
                  We provide a combination of programming including database
                  programming, API programming, server scripting, integrating
                  with a database to deploy the data as well as an opportunity
                  for easy and almost unlimited scalability.
                  <br />
                  <br />
                  We are offering maintenance & support services, making the
                  businesses of our customers flexible, scalable, and
                  cost-efficient. Whether you need help with a fast-growing
                  startup or a large-scale software solution - we are here to
                  help.
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
