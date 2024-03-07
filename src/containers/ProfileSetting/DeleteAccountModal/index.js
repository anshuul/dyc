import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SvgIcon, Row, Col } from '../../../components/common';
import Lottie from 'react-lottie';
import OtpInput from 'react-otp-input';
import './index.scss';

import AnimationOne from '../../../assets/json/info.json';
import AnimationTwo from '../../../assets/json/thankyou.json';

const DeleteAccountModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSureSection, setIsSureSection] = useState(true);
  const [isdeleteHandle, setIsDeleteHandle] = useState(false);
  const [isSuccessSection, setIsSuccessSection] = useState(false);
  const [otp, setOtp] = useState('');
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteHandle = () => {
    setIsDeleteHandle(true);
    setIsSureSection(false)
  }

  const successHandle = () => {
    setIsSureSection(false);
    setIsDeleteHandle(false);
    setIsSuccessSection(true);
  }

  const animationLottie = {
    loop: true,
    autoplay: true,
    animationData: AnimationOne,
    renderer: 'svg'
  }
  const animationLottie2 = {
    loop: true,
    autoplay: true,
    animationData: AnimationTwo,
    renderer: 'svg'
  }
  return (
    <>
      <div onClick={showModal}>
        Delete Account
      </div>
      <Modal className='deletaccount-modal' centered maskClosable={false} footer={null} title={null} width={550} open={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        closeIcon={<SvgIcon name='close' viewbox='0 0 7.481 7.521' />}
      >
        {isSureSection &&
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
                  Are You Sure?
                </h1>
                <p data-aos='fade-up' data-aos-duration="900">
                  Do you want to delete this account permanently?
                </p>
                <div className='pt-3' data-aos='fade-up' data-aos-duration="1000">
                  <Button htmlType="submit" className='delete-btn px-5' onClick={deleteHandle}>
                    Yes, delete it
                  </Button>
                  <div>
                    <Button onClick={handleCancel} className='cancel-btn' type='text'>No, Cancel</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        }
        {isdeleteHandle &&
          <div className='pt-5'>
            <h1>Enter OTP</h1>
            <p>OTP has been sent to your email</p>
            <div>
              <OtpInput
                className='otp-input'
                containerStyle='otp-input-container'
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <div className='resend-otp'>Didn’t get it? <Button type='text'>Resend</Button></div>
            </div>
            <div className='py-5' data-aos='fade-up' data-aos-duration="1000">
              <Button htmlType="submit" type='secondary' className='px-5' onClick={successHandle}>
                Done
              </Button>
            </div>
          </div>
        }
        {isSuccessSection &&
          <div>
            <Row>
              <Col md='12'>
                <Lottie
                  options={animationLottie2}
                  height={280}
                  width={280}
                />
              </Col>
              <Col md='12'>
                <h1 data-aos='fade-up' data-aos-duration="800">
                  Deleted successfully
                </h1>
                <p data-aos='fade-up' data-aos-duration="900">
                  Your account has been permanently deleted.
                </p>
                <div className='pt-3 pb-4' data-aos='fade-up' data-aos-duration="1000">
                  <Button htmlType="submit" type='secondary' className='px-5' onClick={handleCancel}>
                    Ok
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        }
      </Modal>
    </>
  )
};

export default DeleteAccountModal;