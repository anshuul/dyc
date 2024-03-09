import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button, Tabs, Input } from 'antd';
import PayWithCard from './PayWithCard';
import { Link } from 'react-router-dom';
import ApplePay from './ApplePay';
import GooglePay from './GooglePay';
import PayVanue from './PayVanue';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import PayImage from '../../assets/images/pay-img.png';

const PaywithCardTitle = <div className='options-card' data-aos='zoom-in' data-aos-duration="800">
    <div className='optionscard-inner'>
        <SvgIcon name='card' viewbox='0 0 28 19.087' />
    </div>
    <p>Pay with Card</p>
</div>;

const ApplePayTitle = <div className='options-card' data-aos='zoom-in' data-aos-duration="1000">
    <div className='optionscard-inner'>
        <SvgIcon name='apple-pay' viewbox='0 0 38.937 16.118' />
    </div>
    <p>Apple Pay</p>
</div>;

const GooglePayTitle = <div className='options-card' data-aos='zoom-in' data-aos-duration="1200">
    <div className='optionscard-inner'>
        <SvgIcon name='gpay' viewbox='0 0 71.72 28.49' />
    </div>
    <p>Google Pay</p>
</div>;

const PayVanueTitle = <div className='options-card' data-aos='zoom-in' data-aos-duration="1200">
    <div className='optionscard-inner'>
        <SvgIcon name='pay-vanue' viewbox='0 0 14.083 24.047' />
    </div>
    <p>Pay at the venue</p>
</div>;

const CheckoutOffers = () => {
    return (
        <div className='checkout-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <div className='twl-row'>
                            <div className='twl-card checkout-left'>
                                <div className='twl-header' data-aos='fade-in' data-aos-duration="800">
                                    Checkout
                                </div>
                                <div className='twl-content'>
                                    <div className='twlcontent-inner'>
                                        <div className='checkout-upper-detl'>
                                            <h3>Enter the Total Bill Amount</h3>
                                            <p>Please ask the staff for the total bill amount</p>
                                            <div className='bill-amount'>
                                                <div className='currency-icon'>AED</div>
                                                <Input placeholder='0.00' />
                                            </div>
                                        </div>
                                        <div className='checkout-upper-detl pt-2'>
                                            <h3>Enter the Discount Amount</h3>
                                            <p>Request the staff for the discount amount</p>
                                            <div className='bill-amount'>
                                                <div className='currency-icon'>AED</div>
                                                <Input placeholder='0.00' />
                                            </div>
                                        </div>
                                        <h3 className='inner-title'>Payment options</h3>
                                        <Tabs defaultActiveKey="1" className='payment-tabs'>
                                            <Tabs.TabPane tab={PaywithCardTitle} key="1">
                                                <PayWithCard />
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={ApplePayTitle} key="2">
                                                <ApplePay />
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={GooglePayTitle} key="3">
                                                <GooglePay />
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={PayVanueTitle} key="4">
                                                <PayVanue />
                                            </Tabs.TabPane>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <div className='twl-card checkout-right'>
                                <div className='twl-header' data-aos='fade-in' data-aos-duration="800">
                                    Summary
                                </div>
                                <div className='twl-content'>
                                    <div className='twlcontent-inner'>
                                        <ul className='summary-list' data-aos='fade-left' data-aos-duration="800">
                                            <li>
                                                <div className='image-col'>
                                                    <img src={PayImage} alt='Yacht Junction' />
                                                </div>
                                                <div className='list-left'>
                                                    <h3>Yacht Junction</h3>
                                                    <p>12km / Al Karama Center</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className='payment-details' data-aos='fade-left' data-aos-duration="1200">
                                            <Row className='discount-row'>
                                                <Col>
                                                    Service Charge
                                                </Col>
                                                <Col className='text-right'>
                                                    AED 23
                                                </Col>
                                            </Row>
                                            <Row className='discount-row'>
                                                <Col>
                                                    Promo Discount
                                                </Col>
                                                <Col className='text-right'>
                                                    30.50!
                                                </Col>
                                            </Row>
                                            <Row className='willpay-row'>
                                                <Col>
                                                    You Will Pay
                                                </Col>
                                                <Col className='text-right'>
                                                    AED 467.34
                                                </Col>
                                            </Row>
                                        </div>
                                        <Link to='/payment-success'><Button className='pay-btn' data-aos='fade-left' data-aos-duration="1250" type='primary' block icon={<SvgIcon name='arrow-right-circle' viewbox='0 0 30 30' />}>Pay</Button></Link>
                                        <Button className='mt-3' data-aos-duration="1250" data-aos='fade-left' type='primary' ghost block>Get The Directions</Button>
                                        <Button className='learn-btn' data-aos='fade-left' data-aos-duration="1300" type='link' icon={<SvgIcon name='play' viewbox='0 0 41.93 41.965' />} block>Learn how to redeem an offer</Button>
                                        <div className='getit-touch' data-aos='fade-in' data-aos-duration="1400">
                                            <div className='upper-row'>
                                                <h3>Get in touch</h3>
                                            </div>
                                            <p>
                                                If you have any doubts, please reach out to us at <Link to="/">concierge@travellerpass.com</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CheckoutOffers