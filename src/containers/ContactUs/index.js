import React, { useState } from 'react';
import { SvgIcon, Row, Col } from '../../components/common';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Form, Input, Select } from 'antd';
import './index.scss'

import logoImage from '../../assets/images/logo-light.svg';
import logoImage1 from '../../assets/images/logo.svg';
import Avatarimg1 from '../../assets/images/inquiries-person1.png';
import Avatarimg2 from '../../assets/images/inquiries-person2.png';
import Avatarimg3 from '../../assets/images/inquiries-person3.png';
import SuccessBg from '../../assets/images/success-bg.svg';
import VideoOne from '../../assets/video/bg_auth.mp4';

const { TextArea } = Input;

const ContactUs = () => {
    const [isShowSuccess, setIsShowSuccess] = useState(false);
    const handelShow = () => {
        setIsShowSuccess(true);
    }
    return (
        <div className='contactus-wrapper'>
            <div className='auth-left'>
                <div className='authleft-inner'>
                    <div className='left-upper'>
                        <div className='dextop-logo' data-aos='fade-right' data-aos-duration="700">
                            <Link to='/'><img src={logoImage} alt={logoImage} /></Link>
                        </div>
                        <h1 data-aos='fade-right' data-aos-duration="900">
                            Our team <br /> is here to help
                        </h1>
                    </div>
                    <div className='left-middle' data-aos='fade-right' data-aos-duration="900">
                        <p>For technical issues and general inquiries, please visit our <Link to='/contact'>Chat Center.</Link></p>
                        <ul>
                            <li><img src={Avatarimg1} alt={Avatarimg1} /></li>
                            <li><img src={Avatarimg2} alt={Avatarimg2} /></li>
                            <li><img src={Avatarimg3} alt={Avatarimg3} /></li>
                        </ul>
                    </div>
                    <div>
                        <div className='contact-row'>
                            <Row>
                                <Col md="4" className='colums' data-aos='fade-right' data-aos-duration="900">
                                    <div className='icon-box'>
                                        <SvgIcon name='map' viewbox='0 0 8.358 12.537' />
                                    </div>
                                    <h4>Address</h4>
                                    <p>406, Building 10Bay Square, Business Bay,Dubai, UAE, 87712</p>
                                </Col>
                                <Col md="4" className='colums' data-aos='fade-up' data-aos-duration="900">
                                    <div className='icon-box'>
                                        <SvgIcon name='email' viewbox='0 0 17.503 11.396' />
                                    </div>
                                    <h4>Email</h4>
                                    <p>concierge@travellerpass.com</p>
                                </Col>
                                <Col md="4" className='colums' data-aos='fade-left' data-aos-duration="900">
                                    <div className='icon-box'>
                                        <SvgIcon name='call-icon' viewbox='0 0 14.993 14.993' />
                                    </div>
                                    <h4>Phone</h4>
                                    <p>+971 4 559 7000</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='bottom-row'>
                            <Button><SvgIcon name='instagram' viewbox='0 0 17.137 17.137' /></Button>
                            <Button><SvgIcon name='facebook' viewbox='0 0 8.106 17.344' /></Button>
                        </div>
                    </div>
                </div>
                <video playsInline autoPlay muted loop className="banner-video">
                    <source src={VideoOne} />
                </video>
            </div>
            <div className='auth-right' data-aos='fade-in' data-aos-duration="900">
                {isShowSuccess ?
                    <div className='success-wrapper' style={{ backgroundImage: `url(${SuccessBg})` }}>
                        <div className='success-wrapper-inner'>
                            <div className='check-circle'>
                                <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                            </div>
                            <h2>Thank You!</h2>
                            <p>Thank you for your inquiry, <br />
                            our executive will contact you shortly!</p>
                            <Link to='/'>
                                <Button type="secondary" htmlType="submit">
                                    Ok
                                </Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='authright-inner'>
                    <div className='right-upper'>
                        <div className='mobile-logo'>
                            <Link to='/'><img src={logoImage1} alt={logoImage1} /></Link>
                        </div>
                        <div className='upper-inner'>
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className='right-form'>
                        <Form
                            name="basic"
                            autoComplete="off"
                            layout="vertical"
                        >
                            <Form.Item label="Inquiry Type">
                                <div className='select-tnquiry'>
                                    <SvgIcon className='inquirytyle-icon' name='inquiry-icon' viewbox='0 0 19.999 19.999' />
                                    <Select
                                        defaultValue="v1"
                                        placeholder='General Inquiry'
                                        popupClassName='inquery-type-drop'
                                        suffixIcon={<SvgIcon name='down-arrow' viewbox='0 0 18 9' />}
                                        options={[
                                            {
                                              label: 'Inquiry Type',
                                              options: [
                                                {
                                                    value: 'v1',
                                                    label: 'Partnership',
                                                },
                                                {
                                                    value: 'v2',
                                                    label: 'Sales Related',
                                                },
                                                {
                                                    value: 'v3',
                                                    label: 'Support Related',
                                                },
                                                {
                                                    value: 'v4',
                                                    label: 'Other',
                                                }
                                            ],
                                            },
                                        ]}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item label="First Name">
                                <Input prefix={<SvgIcon name='user' viewbox='0 0 15.381 15.381' />} placeholder='Enter' />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input prefix={<SvgIcon name='email-icon' viewbox='0 0 30 30' />} placeholder='Enter' />
                            </Form.Item>
                            <Form.Item label="Mobile">
                                <Input prefix={<><SvgIcon name='dubai-flag' viewbox='0 0 42 42' /> <span className='ccode'>+971</span></>}  />
                            </Form.Item>
                            <Form.Item label="Reason for inquiry">
                                <TextArea rows={5} placeholder='Enter' />
                            </Form.Item>
                            <Form.Item className='m-0 py-3'>
                                <Button type="secondary" htmlType="submit" block onClick={handelShow}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <p className='bottom-info'>
                        For technical issues and general inquiries, please visit our <Link to='/contact'>Help Center</Link>
                    </p>
                </div>
                }
            </div>
        </div>
    )
}

export default ContactUs