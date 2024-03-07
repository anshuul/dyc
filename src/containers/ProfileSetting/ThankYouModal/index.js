import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SvgIcon, Row, Col } from '../../../components/common';
import Lottie from 'react-lottie';
import './index.scss';

import AnimationOne from '../../../assets/json/thankyou.json';

const ThankYouModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const animationLottie = {
    loop: true,
    autoplay: true,
    animationData: AnimationOne,
    renderer: 'svg'
  }
  return (
    <>
      <Button type="secondary" htmlType="submit" onClick={showModal}>
        Done
      </Button>
      <Modal className='thankyou-modal' centered maskClosable={false} footer={null} title={null} width={550} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        closeIcon={<SvgIcon name='close' viewbox='0 0 7.481 7.521' />}
      >
        <div>
          <Row>
            <Col md='12'>
              <Lottie
                options={animationLottie}
                height={280}
                width={280}
              />
            </Col>
            <Col md='12'>
              <h1 data-aos='fade-up' data-aos-duration="800">
                Thank You!
              </h1>
              <p data-aos='fade-up' data-aos-duration="900">
                Your suggestion has been sent to us.
              </p>
              <div className='pt-3 pb-5' data-aos='fade-up' data-aos-duration="1000">
                <Button type="secondary" htmlType="submit" className='px-5' onClick={handleCancel}>
                  Ok
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  )
};

export default ThankYouModal