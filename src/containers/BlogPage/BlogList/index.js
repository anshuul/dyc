import React from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../../components/common';
import { Button, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

import BlogImg1 from '../../../assets/images/blog-5.jpg';
import BlogImg2 from '../../../assets/images/blog-6.jpg';
import BlogImg3 from '../../../assets/images/blog-7.jpg';
import BlogImg4 from '../../../assets/images/blog-8.jpg';
import BlogImg5 from '../../../assets/images/blog-9.jpg';
import BlogAvatar from '../../../assets/images/bog-avatar.png';
import BlogAvatar2 from '../../../assets/images/avatar.jpg';
import BlogAvatar3 from '../../../assets/images/ctgimg-1.png';

const BlogList = () => {
    const blogItemData = [
        {
            id: 1,
            title: 'Your perfect plan for an unforgettable holidays',
            mainimage: BlogImg1,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
        {
            id: 2,
            title: 'Time to try something new',
            mainimage: BlogImg2,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar2,
            username: 'Amelia Kimani',
            usercompany: 'TravellerPass'
        },
        {
            id: 3,
            title: 'Exploring the unknown Abu Dhabi edition',
            mainimage: BlogImg3,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar3,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
        {
            id: 4,
            title: 'Your perfect plan for an unforgettable holidays',
            mainimage: BlogImg4,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
        {
            id: 5,
            title: 'Time to try something new',
            mainimage: BlogImg5,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar2,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
    ]

    return (
        <div className='twl-blog-wrapper'>
            <section className='blog-banner-list'></section>
            <section className='blog-upper-list'>
                <Container>
                    <Row className='backbtn-row'>
                        <Col>
                            <Link to='/blog'>
                                <SvgIcon name='chevron-left' viewbox='0 0 4.029 6.932' /> Back
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 data-aos='fade-up' data-aos-duration="700">Explore our <br /> Leisure Blogs</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='blog-section pt-3'>
                <Container>
                    <Row className='blogcategorylist-row'>
                        <Col className='right-col text-left'>
                            <Button className='filter-btn mt-0' type='primary' ghost>Dubai <SvgIcon name='filter' viewbox='0 0 15.839 11.88' /></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {blogItemData.map(item =>
                                <div className='blog-item' key={item.id}>
                                    <Row>
                                        <Col lg='6' data-aos='fade-right' data-aos-duration="800">
                                            <Link to='/blog-details'>
                                                <img className='blog-img' src={item.mainimage} alt={BlogImg5} />
                                            </Link>
                                        </Col>
                                        <Col lg='6' data-aos='fade-left' data-aos-duration="800">
                                            <Link to='/blog-details'>
                                                <h3>{item.title}</h3>
                                            </Link>
                                            <p>{item.details}
                                            </p>
                                            <div className='bottom-text'>{item.date} - 3 MIN READ - SKYDIVING</div>
                                            <div className='blog-user'>
                                                <div className='bloguser-image'>
                                                    <img src={item.userimage} alt={item.userimage} />
                                                </div>
                                                <div className='bloguser-dlt'>
                                                    <h4>{item.username}</h4>
                                                    <p>{item.usercompany}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <Pagination defaultCurrent={1} total={50} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default BlogList;