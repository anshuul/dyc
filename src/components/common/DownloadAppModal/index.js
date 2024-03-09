import React from 'react';
import { Button } from 'antd';
import { SvgIcon, Row, Col } from '../index';
import './index.scss';

import DownloadImg from '../../../assets/images/download-small.png';

const DownloadAppModal = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col md='7' className='download-left'>
          <h1 data-aos='fade-up' data-aos-duration="800">
            Get the app today and let the adventure unfold!
          </h1>
          <div className='download-btns' data-aos='fade-up' data-aos-duration="1200">
            <Button onClick={() => window.open("https://apps.apple.com/ae/app/travellerpass-lifestyle-app/id955440154", "_blank")}><SvgIcon name='apple' viewbox='0 0 22.982 28.234' /> App Store</Button>
            <Button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.traveller&hl=en_IN&gl=US", "_blank")}><SvgIcon name='googleplay' viewbox='0 0 22.416 24.786' /> Google Play</Button>
            <Button onClick={() => window.open("https://appgallery.huawei.com/#/app/C100681983", "_blank")}><SvgIcon name='app-gallery' viewbox='0 0 22.132 21.799' /> App Gallery</Button>
          </div>
        </Col>
        <Col md='5' className='download-right'>
          <div className='right-inner'>
            <img data-aos='fade-in' data-aos-duration="1800" className='download-img' src={DownloadImg} alt={"Download"} />
          </div>
        </Col>
      </Row>
    </>
  )
};

export default DownloadAppModal