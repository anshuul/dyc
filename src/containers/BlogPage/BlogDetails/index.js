import React from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../../components/common';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

import BlogAvatar from '../../../assets/images/bog-avatar.png';
import BlogDetailsImg1 from '../../../assets/images/blog-details-1.jpg';
import BlogDetailsImg2 from '../../../assets/images/blog-details-2.jpg';
import BlogDetailsImg3 from '../../../assets/images/blog-details-3.jpg';
import BlogDetailsImg4 from '../../../assets/images/blog-details-4.jpg';

const BlogDetails = () => {
    const BlogsData = [
        {
            id: 1,
            title: 'Circuit X',
            mainimage: BlogDetailsImg2,
            offer: '30',
            details: 'Abu Dhabi’s many tourists and residents may not be aware that the city has so much more to offer than just these few ultra-popular hotspots. That’s why we at TravellerPass are here.',
            location: 'Al Hudayriat Island'
        },
        {
            id: 2,
            title: '321 Sports',
            mainimage: BlogDetailsImg3,
            offer: '30',
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            location: 'Al Hudayriat Island'
        },
        {
            id: 3,
            title: '321 Sports',
            mainimage: BlogDetailsImg4,
            offer: '30',
            details: 'Abu Dhabi’s many tourists and residents may not be aware that the city has so much more to offer than just these few ultra-popular hotspots. That’s why we at TravellerPass are here.',
            location: 'Al Hudayriat Island'
        },
    ]

    return (
        <div className='twl-blog-wrapper'>
            <section className='blog-banner-list'></section>
            <section className='blog-upper-list'>
                <Container>
                    <Row className='backbtn-row'>
                        <Col>
                            <Link to='/blog-list'>
                                <SvgIcon name='chevron-left' viewbox='0 0 4.029 6.932' /> Back
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='6'>
                            <h1 data-aos='fade-up' data-aos-duration="700">Exploring the unknown Dubai edition</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='blog-upper'>
                <Container>
                    <Row>
                        <Col>
                            <div className='datetime-row' data-aos='fade-up' data-aos-duration="800">NOV 29 - 3 MIN READ - LIFESTYLE</div>
                            <div className='user-row' data-aos='fade-up' data-aos-duration="800">
                                <div className='user-left'>
                                    <div className='user-img'>
                                        <img src={BlogAvatar} alt={BlogAvatar} />
                                    </div>
                                    <div>
                                        <h4>Aryaa Patel</h4>
                                        <p>TravellerPass</p>
                                    </div>
                                </div>
                                <div className='user-right btn-action'>
                                    <Button type='primary' ghost>Wellness</Button>
                                    <Button type='primary' ghost>Dining</Button>
                                </div>
                            </div>
                            <div className='blog-img-dtl' data-aos='fade-in' data-aos-duration="1000">
                                <img src={BlogDetailsImg1} alt={BlogDetailsImg1} />
                            </div>
                            <div className='blog-detail-text mt-5'>
                                <p>
                                    Welcome back to the wizard of offers. This week, we’re taking a trip to Abu Dhabi, a city filled with exciting new experiences and incredible attractions for everyone to enjoy, see and create unforgettable moments. However, with this many iconic places, Abu Dhabi’s many tourists and residents may not be aware that the city has so much more to offer than just these few ultra-popular hotspots. That’s why we at TravellerPass are here. To shine some light on three of the many new experiences that are not only as exciting but are ones you should visit for the memory book.
                                </p>
                                <p>
                                    Abu Dhabi’s many tourists and residents may not be aware that the city has so much more to offer than just these few ultra-popular hotspots. That’s why we at TravellerPass are here.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='blogdtl-bottom-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='blogdtl-header'>
                                <h3>Explore this week's</h3>
                                <h2> Top Offers</h2>
                            </div>
                        </Col>
                    </Row>
                    {BlogsData.map(item =>
                        <Row key={item.key} data-aos='fade-up' data-aos-duration="700">
                            <Col>
                                <div className='blog-details-row'>
                                    <div className='blog-details-header'>
                                        <div className='header-left'>
                                            <h1 className='heading1'>{item.title}</h1>
                                            <h1 className='heading2'>{item.offer}% OFF</h1>
                                        </div>
                                        <div className='header-right'>
                                            <div>
                                                <SvgIcon name='map' viewbox='0 0 8.358 12.537' />
                                                <p>LOCATION</p>
                                                <h4>Al Hudayriat Island</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='blog-details-image'>
                                        <img src={item.mainimage} alt={item.title} />
                                    </div>
                                    <div className='blog-details-bottom'>
                                        <p>
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default BlogDetails;