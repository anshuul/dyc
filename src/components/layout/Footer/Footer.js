import React from "react";
import { Container, SvgIcon, Row, Col } from "../../common";
import { Link } from "react-router-dom";
import { Button } from "antd";
import './Footer.scss';

import logoImage from '../../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="upper-footer">
          <Col lg='5' className='footer-col1'>
            <img className="logo" src={logoImage} alt='logo' />
            <ul className="social-btn">
              <li>
                <Button type='link' onClick={() => window.open("https://www.facebook.com/travellerpassglobal/", "_blank")}><SvgIcon name="instagram" viewbox="0 0 17.137 17.137" /></Button>
              </li>
              <li>
                <Button type='link' onClick={() => window.open("https://www.facebook.com/travellerpassglobal/", "_blank")}><SvgIcon name="facebook" viewbox="0 0 8.106 17.344" /></Button>
              </li>
              <li>
                <Button type='link' onClick={() => window.open("https://www.facebook.com/travellerpassglobal/", "_blank")}><SvgIcon name='youtube' viewbox="0 0 11 9" /></Button>
              </li>
              <li>
                <Button type='link' onClick={() => window.open("https://www.facebook.com/travellerpassglobal/", "_blank")}><SvgIcon name='tiktok' viewbox="0 0 11 13" /></Button>
              </li>
            </ul>
            <p>Download the app</p>
            <div className='download-btns'>
              <Link to='/'><SvgIcon name='apple' viewbox='0 0 22.982 28.234' /> </Link>
              <Link to='/'><SvgIcon name='googleplay' viewbox='0 0 22.416 24.786' /></Link>
              <Link to='/'><SvgIcon name='app-gallery' viewbox='0 0 22.132 21.799' /></Link>
            </div>
          </Col>
          <Col lg='7'>
            <Row>
              <Col sm='4' xs='6'>
                <h4>ABOUT</h4>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </Col>
              <Col sm='4' xs='6'>
                <h4>COMPANY</h4>
                <ul>
                  <li>
                    <Link to="/terms-conditions">Terms {"&"} Condition</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </Col>
              <Col sm='4'>
                <h4>SUPPORT</h4>
                <ul>
                  <li>
                    <Link to="/">Chat With Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bottom-footer">
        <p>© 2024 Discover Your City. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;