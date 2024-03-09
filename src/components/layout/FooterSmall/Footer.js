import React from "react";
import { Container, Row, Col } from "../../common";
import './Footer.scss';


const FooterSmall = () => {
  return (
    <footer className="footer small-footer">
      <Container>
        <Row>
          <Col sm='12'>
            <div className="bottom-footer">
              <p>© 2022 TravellerPass LLC. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSmall;