import React from 'react';
import { Button } from 'antd';
import { SvgIcon, Row, Col, Container } from '../index';
import './index.scss';

import downloadImg from '../../../assets/images/download.png';

const DownloadSection = () => {
  return (
    <section className='download-section'>
      <Container>
        <Row>
          <Col md='7' className='download-left'>
            <h1 data-aos='fade-up' data-aos-duration="800">
              Your ticket to experiences across the globe
            </h1>
            <div className='download-btns' data-aos='fade-up' data-aos-duration="1200">
              <Button onClick={() => window.open("https://apps.apple.com/ae/app/travellerpass-lifestyle-app/id955440154", "_blank")}><SvgIcon name='apple' viewbox='0 0 22.982 28.234' /> App Store</Button>
              <Button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.traveller&hl=en_IN&gl=US", "_blank")}><SvgIcon name='googleplay' viewbox='0 0 22.416 24.786' /> Google Play</Button>
              <Button onClick={() => window.open("https://appgallery.huawei.com/#/app/C100681983", "_blank")}><SvgIcon name='app-gallery' viewbox='0 0 22.132 21.799' /> App Gallery</Button>
            </div>
          </Col>
          <Col md='5' className='download-right'>
            <img src={downloadImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default DownloadSection