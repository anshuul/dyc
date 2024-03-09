import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

import PayImage from '../../../assets/images/ticket-img.jpg';
import MaterCard from '../../../assets/images/mater-card.png';
import qrCode from '../../../assets/images/qrcode.png'

const MyBookingDetails = () => {
    return (
        <div className='mybookingdetails-wrapper'>
            <div className='mybookingdetails-inner'>
                <Container>
                    <Row>
                        <Col>
                            <Form
                                name="basic"
                                autoComplete="off"
                                layout="vertical"
                            >
                                <div className='mybookingdetails-row'>
                                    <div className='mybookingdetails-left'>
                                        <div className='twl-header' data-aos='fade-in' data-aos-duration="800">
                                            <Link to='/profile-setting'><SvgIcon name='arrow-left' viewbox='0 0 12.251 8.653' /></Link>
                                            <h2>Your Ticket</h2>
                                        </div>
                                        <div className='twl-content'>
                                            <div className='twlcontent-inner'>
                                                <div className='confirm-details pt-3'>
                                                    <div className='dtl-row'>
                                                        <div className='dtl-left'>
                                                            <p>Booking Date and time</p>
                                                        </div>
                                                        <div className='dtl-right'>
                                                            25<sup>th</sup> Jun 2022
                                                        </div>
                                                    </div>
                                                    <div className='dtl-row'>
                                                        <div className='dtl-left'>
                                                            <p>Payment method</p>
                                                        </div>
                                                        <div className='dtl-right'>
                                                            <div className='d-flex align-items-center'>
                                                                ****8637 <div className='card-icon'> <img src={MaterCard} alt='' /> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='dtl-row'>
                                                        <div className='dtl-left'>
                                                            <p>Email</p>
                                                        </div>
                                                        <div className='dtl-right'>
                                                            akp.arvindpatel@gmail.com
                                                        </div>
                                                    </div>
                                                    <div className='dtl-row'>
                                                        <div className='dtl-left'>
                                                            <p>Mobile</p>
                                                        </div>
                                                        <div className='dtl-right'>
                                                            +97153647876
                                                        </div>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <Col className='cancelpolicy-info'>
                                                        <h3>Terms and Condition</h3>
                                                        <ul>
                                                            <li>Capacity Ticket</li>
                                                            <li>Non cancellable and non refundable</li>
                                                            <li>All baggage and personal items MUST go through the Security Scanning Machine</li>
                                                            <li>Eating, drinking, chewing gum and smoking are not allowed during the visit</li>
                                                        </ul>
                                                        <div>
                                                            <h3>How to Use</h3>
                                                            <p>
                                                                Get Ready to enjoy At The Top Level 124th Floor & Sky View Observatory tickets at the sky view Address Towers
                                                            </p>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <h3>Cancellation Policy</h3>
                                                            <p>5% cancellation fees will be charged for all applicable bookings.</p>
                                                        </div>
                                                        <div>
                                                            <Button className='needhelp-btn' type='primary' ghost><SvgIcon name="mice" viewbox="0 0 13.753 13.407" /> Need Help?</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mybookingdetails-right'>
                                        <div className='twl-content'>
                                            <div className='twlcontent-inner'>
                                                <ul className='summary-list' data-aos='fade-left' data-aos-duration="800">
                                                    <div className="right-tag"><p>05</p><small>DAYS</small></div>
                                                    <li className='pt-0'>
                                                        <div className='image-col'>
                                                            <img src={PayImage} alt='Dolphinarium Regular' />
                                                        </div>
                                                        <div className='list-left'>
                                                            <h3>Dolphinarium Regular</h3>
                                                            <p><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> Royal residence in London, United Kingdom</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className='payment-details' data-aos='fade-left' data-aos-duration="1200">
                                                    <Row className='discount-row'>
                                                        <Col>
                                                            <b>Mr John Doe</b>
                                                            <label>Lead Participant</label>
                                                        </Col>
                                                        <Col className='text-right'>
                                                            <b>AED 340</b>
                                                            <label>Paid</label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='discount-row'>
                                                        <Col>
                                                            <b>25<sup>th</sup> Jun 22</b>
                                                            <label>Date</label>
                                                        </Col>
                                                        <Col className='text-right'>
                                                            <b>01:20 PM</b>
                                                            <label>startTime</label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='discount-row'>
                                                        <Col>
                                                            <b>(10) Adult, (1) Child</b>
                                                            <label>Quantity</label>
                                                        </Col>
                                                        <Col className='text-right'>
                                                            <b>67463846</b>
                                                            <label>Confirmation Code</label>
                                                        </Col>
                                                    </Row>
                                                    <Row className='discount-row'>
                                                        <Col>
                                                            <b>Magic Imagica</b>
                                                            <label>Option</label>
                                                        </Col>
                                                    </Row>
                                                    <div className='bottom-details'>
                                                        <div className='barcode-row'>
                                                            <img src={qrCode} alt='qrCode' />
                                                            <h3>Scan the code</h3>
                                                            <p>Scan the QR code at the venue</p>
                                                        </div>
                                                        <div className='text-center mt-3'>
                                                            <Button className='applewallet-btn' type='primary' ghost>Add to Apple Wallet</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='download-row' data-aos='fade-left' data-aos-duration="1250" >
                                                    <Button className='cancel-btn' type='primary' ghost>Cancel Ticket</Button>
                                                    <Button className='pay-btn' type='primary' block>Download Ticket
                                                        <SvgIcon name="download" viewbox="0 0 15.624 15.996" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MyBookingDetails;