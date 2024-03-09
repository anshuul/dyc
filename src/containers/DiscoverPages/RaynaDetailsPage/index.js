import React, { useState } from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../../components/common';
import { Button, Checkbox, Form, Input, Select, Progress, Dropdown, DatePicker, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Gallery } from "react-grid-gallery";
import Slider from "react-slick";
import "../../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import DetailsImg1 from '../../../assets/images/details-img-1.jpg';
import DetailsImg2 from '../../../assets/images/details-img-2.jpg';
import DetailsImg3 from '../../../assets/images/details-img-3.jpg';
import DetailsImg4 from '../../../assets/images/details-img-4.jpg';
import DetailsImg5 from '../../../assets/images/details-img-5.jpg';
import MapAddress from '../../../assets/images/map-address.png';
import ReviewImg1 from '../../../assets/images/top-creator2.png';
import ReviewImg2 from '../../../assets/images/top-creator3.png';
import ReviewImg3 from '../../../assets/images/top-creator4.png';
import ReviewImg4 from '../../../assets/images/top-creator5.png';
import ReviewImg5 from '../../../assets/images/top-creator6.png';
import ReviewImg6 from '../../../assets/images/top-creator7.png';
import DetailsImg6 from '../../../assets/images/privelanding-banner.jpg';

const imagesArray = [
    {
        src: DetailsImg6,
        alt: "Travellerpass",
    },
    {
        src: DetailsImg2,
        alt: "Travellerpass",
    },
    {
        src: DetailsImg3,
    },
    {
        src: DetailsImg4,
    },
    {
        src: DetailsImg6,
    },
    {
        src: DetailsImg1,
    },
    {
        src: DetailsImg2,
    },
    {
        src: DetailsImg6,
        alt: "Travellerpass",
    },
    {
        src: DetailsImg2,
        alt: "Travellerpass",
    },
    {
        src: DetailsImg3,
    },
    {
        src: DetailsImg4,
    },
    {
        src: DetailsImg6,
    },
    {
        src: DetailsImg1,
    },
    {
        src: DetailsImg2,
    },
]


const items = [
    {
        key: '1',
        label: (
            <div className='participants-select'>
                <h3>Participants</h3>
                <div className='participants-row'>
                    <div className='left-col'>
                        <h4>Adults</h4>
                        <label>Age 13+</label>
                    </div>
                    <div className='plusminus'>
                        <Button><SvgIcon name="minus" viewbox="0 0 16.638 2.405" /></Button>
                        <div className='counts'>1</div>
                        <Button><SvgIcon name="plus" viewbox="0 0 16.638 17.53" /></Button>
                    </div>
                </div>
                <div className='participants-row'>
                    <div className='left-col'>
                        <h4>Children</h4>
                        <label>Ages 2-12</label>
                    </div>
                    <div className='plusminus'>
                        <Button><SvgIcon name="minus" viewbox="0 0 16.638 2.405" /></Button>
                        <div className='counts'>1</div>
                        <Button><SvgIcon name="plus" viewbox="0 0 16.638 17.53" /></Button>
                    </div>
                </div>
                <div className='participants-row'>
                    <div className='left-col'>
                        <h4>Infants</h4>
                        <label>Under 2</label>
                    </div>
                    <div className='plusminus'>
                        <Button><SvgIcon name="minus" viewbox="0 0 16.638 2.405" /></Button>
                        <div className='counts'>1</div>
                        <Button><SvgIcon name="plus" viewbox="0 0 16.638 17.53" /></Button>
                    </div>
                </div>
            </div>
        ),
    }
];

const reviewerData = [
    {
        key: 1,
        image: ReviewImg1,
        title: 'Awesome Place!!!!👌',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    },
    {
        key: 2,
        image: ReviewImg2,
        title: 'Such a heaven Place 🔥',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    },
    {
        key: 3,
        image: ReviewImg3,
        title: 'Such a heaven Place 🔥',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    },
    {
        key: 4,
        image: ReviewImg4,
        title: 'Such a heaven Place 🔥',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    },
    {
        key: 5,
        image: ReviewImg5,
        title: 'Ambience is so beautifulllll',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    },
    {
        key: 6,
        image: ReviewImg6,
        title: 'Ambience is so beautifulllll',
        description: 'Customers will experience a complete photography trip in London.',
        name: 'Jerry123',
        date: '20th Mar 2022'
    }
]

const RaynaDetailsPage = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const detailSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='twl-details-wrapper'>
            <MediaQuery maxWidth={767}>
                <div className='details-mobile-header'>
                    <Link to='/listing-page' className='back-arrow'>
                        <SvgIcon name='chevron-left' viewbox='0 0 4.029 6.932' />
                    </Link>
                    <div className='right-action'>
                        <Button type='link'>
                            <SvgIcon name='heart-outline' viewbox='0 0 13.269 12.168' />
                        </Button>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <div className='mobile-redeem-action'>
                    <div className='left-actions'>
                        <Button type='link'>
                            <SvgIcon name='share-icon' viewbox='0 0 10.314 11.942' />
                        </Button>
                        <Button type='link'>
                            <SvgIcon name='call-icon' viewbox='0 0 14.993 14.993' />
                        </Button>
                    </div>
                    <Button type='primary' onClick={() => { window.location.href = '/discover/checkout' }}>Book Now</Button>
                </div>
            </MediaQuery>
            <section>
                <Drawer className='moreimages-drawer' height={'100vh'} placement="bottom"
                    title={<div className='right-action'>
                        <Button type='link'>Favorite <SvgIcon name='heart-outline' viewbox='0 0 13.269 12.168' /></Button>
                        <Button type='link'>Share <SvgIcon name='share-icon' viewbox='0 0 10.314 11.942' /></Button>
                    </div>} closeIcon={<SvgIcon name="chevron-left" viewbox="0 0 4.029 6.932" />} onClose={onClose} open={open}>
                    <Gallery images={imagesArray} enableImageSelection={false} />
                </Drawer>
                <Container className='container-upper'>
                    <MediaQuery minWidth={768}>
                        <div className='details-images'>
                            <div className='showphotos-btn' onClick={showDrawer}><span>10</span> SHOW PHOTOS</div>
                            <div className='left-image'>
                                <img src={DetailsImg1} alt="Experience London skyline" />
                            </div>
                            <div className='right-image'>
                                <img src={DetailsImg2} alt="Experience London skyline" />
                                <img src={DetailsImg3} alt="Experience London skyline" />
                                <img src={DetailsImg4} alt="Experience London skyline" />
                                <img src={DetailsImg5} alt="Experience London skyline" />
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                        <div className='mobile-details-slider'>
                            <Slider {...detailSlider}>
                                <div>
                                    <img src={DetailsImg1} alt="Experience London skyline" />
                                </div>
                                <div>
                                    <img src={DetailsImg2} alt="Experience London skyline" />
                                </div>
                                <div>
                                    <img src={DetailsImg3} alt="Experience London skyline" />
                                </div>
                                <div>
                                    <img src={DetailsImg4} alt="Experience London skyline" />
                                </div>
                                <div>
                                    <img src={DetailsImg5} alt="Experience London skyline" />
                                </div>
                            </Slider>
                        </div>
                    </MediaQuery>
                    <div className='details-row'>
                        <div className='details-left'>
                            <div className='dtl-upper'>
                                <div className='dtl-upperleft'>
                                    <div className='rating'>
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-outline' viewbox='0 0 15.999 16' />
                                    </div>
                                    <h1>Dubai Burj Khalifa Tour</h1>
                                    <div className='location'>
                                        <SvgIcon name='map' viewbox='0 0 8.358 12.537' />
                                        London, United Kingdom
                                    </div>
                                </div>
                                <MediaQuery minWidth={768}>
                                    <div className='dtl-upperright'>
                                        <Button type='link'>Favorite <SvgIcon name='heart-outline' viewbox='0 0 13.269 12.168' /></Button>
                                        <Button type='link'>Share <SvgIcon name='share-icon' viewbox='0 0 10.314 11.942' /></Button>
                                    </div>
                                </MediaQuery>
                            </div>
                            <div className='overview-row'>
                                <h2>Overview</h2>
                                <p>War, fire, regeneration and technology in construction change the skyline of the world’s capitals. Tall buildings are an inevitable result of those changes Our accommodations are unusual ecological construction <Link to='/'>read more</Link></p>
                            </div>
                            <div className='highlights-row highlights-row-rayna'>
                                <h2>Highlights</h2>
                                <ul>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='duration' viewbox="0 0 28.536 28.536" />
                                        </div>
                                        <div>
                                            <label>Duration</label>
                                            1 Hr (Approx)
                                        </div>
                                    </li>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='opening-hours' viewbox="0 0 25.955 25.783" />
                                        </div>
                                        <div>
                                            <label>Opening Hours</label>
                                            10:00 AM To Midnight
                                        </div>
                                    </li>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='languages' viewbox="0 0 24.599 24.599" />
                                        </div>
                                        <div>
                                            <label>Languages</label>
                                            English, Arabic
                                        </div>
                                    </li>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='reporting-location' viewbox="0 0 37.244 16.326" />
                                        </div>
                                        <div>
                                            <label>Reporting Location</label>
                                            Hotel Lobby
                                        </div>
                                    </li>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='calendar' viewbox="0 0 22.239 23.41" />
                                        </div>
                                        <div>
                                            <label>Booking Status</label>
                                            Instant
                                        </div>
                                    </li>
                                    <li>
                                        <div className='left-icon'>
                                            <SvgIcon name='voucher' viewbox="0 0 32.708 27.896" />
                                        </div>
                                        <div>
                                            <label>Type of Voucher</label>
                                            Mobile
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='details-right'>
                            <div className='details-right-inner'>
                                <Form
                                    name="basic"
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <div className='prive-details-form'>
                                        <div className='heading'>
                                            <h3><span>$50 </span>/ Person</h3>
                                        </div>
                                        <div className='options-colum'>
                                            <h4>Options</h4>
                                            <ul>
                                                <li>
                                                    <Checkbox>Explore Magic Imagica</Checkbox>
                                                    <div className='right-col'>
                                                        <span className='off-price'>AED 523</span>
                                                        $50 <span>/ Person</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Checkbox>Tower Bridge</Checkbox>
                                                    <div className='right-col'>
                                                        <span className='off-price'>AED 523</span>
                                                        $50 <span>/ Person</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Checkbox>London Eye</Checkbox>
                                                    <div className='right-col'>
                                                        <span className='off-price'>AED 523</span>
                                                        $50 <span>/ Person</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='availability-colum'>
                                            <h4>Availability</h4>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="transferOptions" label='TRANSFER OPTIONS'>
                                                        <Select
                                                            defaultValue="option1"
                                                            popupClassName='transferoptions-select'
                                                            suffixIcon={<SvgIcon name='down-arrow' viewbox='0 0 18 9' />}
                                                            dropdownRender={(menu) => (
                                                                <>
                                                                    <h3 className='title'>Transfer Options</h3>
                                                                    {menu}
                                                                    <Form name="search"
                                                                        autoComplete="off"
                                                                        layout="vertical">
                                                                        <Form.Item name="pul" label='PICK UP LOCATION'>
                                                                            <Input value='' placeholder='Business bay' />
                                                                        </Form.Item>
                                                                    </Form>
                                                                    <div className='transfers-list'>
                                                                        <ul>
                                                                            <li>
                                                                                <div className='icons'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /></div>Business Bay
                                                                            </li>
                                                                            <li>
                                                                                <div className='icons'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /></div>Al Karama
                                                                            </li>
                                                                            <li>
                                                                                <div className='icons'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /></div>Marina
                                                                            </li>
                                                                            <li>
                                                                                <div className='icons'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /></div>Financial Center
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </>
                                                            )}
                                                            options={[
                                                                { value: 'option1', label: <Checkbox>Without Transfer</Checkbox> },
                                                                { value: 'option2', label: <Checkbox>Shared Transfer</Checkbox> },
                                                                { value: 'option3', label: <Checkbox>Private Transfer</Checkbox> },
                                                            ]}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="date" label='DATE'>
                                                        <DatePicker popupClassName='pickdate-drop' icon={false} suffixIcon={false} placeholder='DD / MM / YYYY'
                                                        // renderExtraFooter={() => <div>
                                                        //     <h3>Pick the Date</h3>
                                                        //     <ul>
                                                        //         <li></li>
                                                        //     </ul>
                                                        // </div>}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="time" label='TIME'>
                                                        <Select
                                                            placement="bottomRight"
                                                            defaultValue="option1"
                                                            popupMatchSelectWidth={false}
                                                            popupClassName='timeselect'
                                                            suffixIcon={<SvgIcon name='down-arrow' viewbox='0 0 18 9' />}
                                                            dropdownRender={(menu) => (
                                                                <>
                                                                    <h3 className='title'>Pick the Time</h3>
                                                                    {menu}
                                                                </>
                                                            )}
                                                            options={[
                                                                { value: 'option1', label: <div className='time-row'><div className='time-left'>12 <span>pm</span></div><div className='right-price'>$50</div></div> },
                                                                { value: 'option2', label: <div className='time-row'><div className='time-left'>12 <span>pm</span></div><div className='right-price'>$50</div></div> },
                                                                { value: 'option3', label: <div className='time-row'><div className='time-left'>12 <span>pm</span></div><div className='right-price'>$50</div></div> },
                                                            ]}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form.Item name="person" label='PERSON'>
                                                        <Dropdown menu={{ items }} overlayClassName='participants-drop' trigger={['click']}>
                                                            <Input suffix={<SvgIcon name='down-arrow' viewbox='0 0 18 9' />} />
                                                        </Dropdown>
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item name="pcode" label='PROMO CODE'>
                                                        <Input value='' placeholder='Enter' />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='price-info'>
                                            <Row>
                                                <Col className='price-left'>Service Charge</Col>
                                                <Col className='price-right'>AED 23</Col>
                                            </Row>
                                            <Row>
                                                <Col className='price-left'>Tax</Col>
                                                <Col className='price-right'>AED 78</Col>
                                            </Row>
                                            <Row className='total-row'>
                                                <Col className='price-left'>Grand Total</Col>
                                                <Col className='price-right'>AED <b>101</b></Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className='bottom-action mt-3'>
                                        <MediaQuery minWidth={767}>
                                            <Button type='primary' onClick={() => { window.location.href = '/discover/checkout' }} block>Book Now</Button>
                                        </MediaQuery>
                                        <Button type='link' icon={<SvgIcon name='play' viewbox='0 0 41.93 41.965' />} block>Learn How to book</Button>
                                    </div>
                                    <div className='getit-touch' data-aos='fade-in' data-aos-duration="1400">
                                        <div className='upper-row'>
                                            <h3>Get in touch</h3>
                                        </div>
                                        <p>
                                            If you have any doubt please reach Out us @  <Link to="/">info@imcholding.com</Link>
                                        </p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className='whatexpect-row-rayna'>
                        <h2>What to Expect</h2>
                        <ul>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                What’s Included
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                What’s Included
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                Departure & Return
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                Departure & Return
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                What To Expect
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                What To Expect
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                Additional Info
                            </li>
                            <li>
                                <div className='check-circle'>
                                    <SvgIcon name='check' viewbox='0 0 10.289 9.742' />
                                </div>
                                Additional Info
                            </li>
                        </ul>
                    </div>
                    <div className='details-experiences'>
                        <div className='gallery-row'>
                            <h2>Gallery</h2>
                            <div className='details-images'>
                                <div className='showphotos-btn' onClick={showDrawer}><span>10</span> SHOW PHOTOS</div>
                                <div className='left-image'>
                                    <button className='play-btn' onClick={showDrawer}>
                                        <SvgIcon name='play-icon' viewbox="0 0 48 61"/>
                                    </button>
                                    <img src={DetailsImg1} alt="Experience London skyline" />
                                </div>
                                <div className='right-image'>
                                    <img src={DetailsImg2} alt="Experience London skyline" />
                                    <img src={DetailsImg3} alt="Experience London skyline" />
                                    <img src={DetailsImg4} alt="Experience London skyline" />
                                    <img src={DetailsImg5} alt="Experience London skyline" />
                                </div>
                            </div>
                            {/* <MediaQuery maxWidth={767}>
                                <div className='mobile-details-slider'>
                                    <Slider {...detailSlider}>
                                        <div>
                                            <img src={DetailsImg1} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg2} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg3} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg4} alt="Experience London skyline" />
                                        </div>
                                        <div>
                                            <img src={DetailsImg5} alt="Experience London skyline" />
                                        </div>
                                    </Slider>
                                </div>
                            </MediaQuery> */}
                        </div>
                        <div className='moreDetails-row'>
                            <h2>More Details</h2>
                            <ul>
                                <li>
                                    <Checkbox checked />
                                    <div>
                                        <h3>What’s Included</h3>
                                        <p>In this tour</p>
                                    </div>
                                    <Link to='/know-more'><Button type='secondary' size='medium'>Know More</Button></Link>
                                </li>
                                <li>
                                    <Checkbox checked />
                                    <div>
                                        <h3>What’s Included</h3>
                                        <p>In this tour</p>
                                    </div>
                                    <Button type='secondary'>Know More</Button>
                                </li>
                                <li>
                                    <Checkbox checked />
                                    <div>
                                        <h3>What’s Included</h3>
                                        <p>In this tour</p>
                                    </div>
                                    <Button type='secondary'>Know More</Button>
                                </li>
                                <li>
                                    <Checkbox checked />
                                    <div>
                                        <h3>What’s Included</h3>
                                        <p>In this tour</p>
                                    </div>
                                    <Button type='secondary'>Know More</Button>
                                </li>
                            </ul>
                        </div>
                        <div className='visitorreview-row'>
                            <h2>Visitor Reviews</h2>
                            <Row className='rating-section'>
                                <Col sm='6' className='rating-left'>
                                    <div className='rating-row'>
                                        <label className='left-label'>5 Stars</label><Progress strokeColor='#18D39E' trailColor='#F5FCFC' size='small' percent={84} />
                                    </div>
                                    <div className='rating-row'>
                                        <label className='left-label'>4 Stars</label><Progress strokeColor='#18D39E' trailColor='#F5FCFC' size='small' percent={65} />
                                    </div>
                                    <div className='rating-row'>
                                        <label className='left-label'>3 Stars</label><Progress strokeColor='#18D39E' trailColor='#F5FCFC' size='small' percent={40} />
                                    </div>
                                    <div className='rating-row'>
                                        <label className='left-label'>2 Stars</label><Progress strokeColor='#18D39E' trailColor='#F5FCFC' size='small' percent={32} />
                                    </div>
                                    <div className='rating-row'>
                                        <label className='left-label'>1 Stars</label><Progress strokeColor='#18D39E' trailColor='#F5FCFC' size='small' percent={11} />
                                    </div>
                                </Col>
                                <Col sm='6' className='rating-right'>
                                    <h3>4.5 Out of 5</h3>
                                    <div className='rating'>
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-filled' viewbox='0 0 15 15' />
                                        <SvgIcon name='star-outline' viewbox='0 0 15.999 16' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ul className='reviewer-list'>
                                        {reviewerData.map(item =>
                                            <li key={item.key}>
                                                <div className='reviewer-img'><img src={item.image} alt={item.name} /></div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <label>BY {item.name} / {item.date}</label>
                                            </li>
                                        )}
                                    </ul>
                                    <div className='allreviewbtn-row'><Button type='primary' ghost>View all Reviews</Button></div>
                                </Col>
                            </Row>
                        </div>
                        <div className='address-row'>
                            <h2 className='mb-2'>Address</h2>
                            <p className='mb-4 pb-2'>1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai</p>
                            <img className='w-100' src={MapAddress} alt="map" />
                        </div>
                    </div>
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default RaynaDetailsPage;