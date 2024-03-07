import React from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../components/common';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

import BlogImg2 from '../../assets/images/blog-2.jpg';
import BlogImg3 from '../../assets/images/blog-3.jpg';
import BlogImg4 from '../../assets/images/blog-4.jpg';
import BlogImg5 from '../../assets/images/blog-5.jpg';
import BlogImg6 from '../../assets/images/blog-6.jpg';
import BlogImg7 from '../../assets/images/blog-7.jpg';
import BlogImg8 from '../../assets/images/blog-sm-1.jpg';
import BlogImg9 from '../../assets/images/blog-sm-2.jpg';
import BlogImg10 from '../../assets/images/blog-sm-3.jpg';
import BlogAvatar from '../../assets/images/bog-avatar.png';
import BlogAvatar2 from '../../assets/images/avatar.jpg';
import BlogAvatar3 from '../../assets/images/ctgimg-1.png';
import BlogDetailsImg from '../../assets/images/blog-details1.jpg';

const BlogPage = () => {
    const Blogdata = [
        {
            title: 'Dining',
            avatar: BlogImg2,
            date: 'NOV 29 - 3 MIN READ - LIFESTYLE'
        },
        {
            title: 'Time to head to The Dubai Mall',
            avatar: BlogImg3,
            date: 'NOV 29 - 3 MIN READ - EXPERIENCE'
        },
        {
            title: 'Time for something new',
            avatar: BlogImg4,
            date: 'NOV 29 - 3 MIN READ - SKYDIVING'
        },
    ];

    const Blogdata2 = [
        {
            title: 'Experiences',
            avatar: BlogImg8,
            date: 'NOV 29 - 3 MIN READ - DINING'
        },
        {
            title: 'Time to head to The Dubai Mall',
            avatar: BlogImg9,
            date: 'NOV 29 - 3 MIN READ - LIFESTYLE'
        },
        {
            title: 'Time for something new',
            avatar: BlogImg10,
            date: 'NOV 29 - 3 MIN READ - LIFESTYLE'
        },
    ];

    const blogItemData = [
        {
            id: 1,
            title: 'Your perfect plan for an unforgettable holidays',
            mainimage: BlogImg5,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
        {
            id: 2,
            title: 'Time to try something new',
            mainimage: BlogImg6,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar2,
            username: 'Amelia Kimani',
            usercompany: 'TravellerPass'
        },
        {
            id: 3,
            title: 'Exploring the unknown Abu Dhabi edition',
            mainimage: BlogImg7,
            details: 'People of the UAE, Eid Holidays are approaching. So, planning the ultimate Eid weekend is what is on most of our minds as we all want to make the most out of this Eid weekend.',
            date: 'NOV 29',
            userimage: BlogAvatar3,
            username: 'Aryaa Patel',
            usercompany: 'TravellerPass'
        },
    ]

    return (
        <div className='twl-blog-wrapper'>
            <section className='blog-banner'></section>
            <section className='blog-upper'>
                <Container>
                    <Row>
                        <Col>
                            <h1 data-aos='fade-up' data-aos-duration="700">Your perfect plan for an unforgettable holidays</h1>
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
                                <div className='user-right'>
                                    <SvgIcon className='arrow-left' name='readmore-icon' viewbox='0 0 55.469 17.557' />
                                    <Link to='/blog'>
                                        Read Full
                                        <SvgIcon className='arrow-right' name='chevron-right' viewbox='0 0 4.029 6.932' />
                                    </Link>
                                </div>
                            </div>
                            <div className='blog-img-dtl' data-aos='fade-in' data-aos-duration="1000">
                                <img src={BlogDetailsImg} alt={BlogDetailsImg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='blog-section'>
                <Container>
                    <Row className='blog-heading-row'>
                        <Col>
                            <h2 data-aos='fade-right' data-aos-duration="800">You might also like <br /> Recent Blogs</h2>
                            <Link to='/blog-list' data-aos='fade-right' data-aos-duration="1000">
                                Explore All
                                <SvgIcon className='arrow-right' name='chevron-right' viewbox='0 0 4.029 6.932' />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='6'>
                            <List
                                data-aos='fade-up' data-aos-duration="800"
                                itemLayout="horizontal"
                                dataSource={Blogdata}
                                renderItem={(item) => (
                                    <List.Item
                                    >
                                        <List.Item.Meta
                                            avatar={<img src={item.avatar} alt="" />}
                                            title={item.title}
                                            description={item.date}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col sm='6'>
                            <List
                                data-aos='fade-up' data-aos-duration="800"
                                itemLayout="horizontal"
                                dataSource={Blogdata2}
                                renderItem={(item) => (
                                    <List.Item
                                    >
                                        <List.Item.Meta
                                            avatar={<img src={item.avatar} alt="" />}
                                            title={item.title}
                                            description={item.date}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <Row className='blog-heading-row'>
                        <Col>
                            <h2 data-aos='fade-right' data-aos-duration="1000">Explore <br /> by Category</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='9'>
                            <ul className='category-list' data-aos='fade-in' data-aos-duration="1100">
                                <li>
                                    <div className='icons'>
                                        <SvgIcon name='dining-icon' viewbox='0 0 71.125 48.658' />
                                    </div>
                                    <p>02</p>
                                    <h4>Dining</h4>
                                </li>
                                <li>
                                    <div className='icons'>
                                        <SvgIcon name='leisure-icon' viewbox='0 0 61.218 44.94' />
                                    </div>
                                    <p>20</p>
                                    <h4>Experience</h4>
                                </li>
                                <li>
                                    <div className='icons'>
                                        <SvgIcon name='shopping-icon' viewbox='0 0 50.18 47.098' />
                                    </div>
                                    <p>09</p>
                                    <h4>Lifestyle</h4>
                                </li>
                                <li>
                                    <div className='icons'>
                                        <SvgIcon name='prive-icon' viewbox='0 0 57.805 48.664' />
                                    </div>
                                    <p>10</p>
                                    <h4>Prive</h4>
                                </li>
                                <li>
                                    <div className='icons'>
                                        <SvgIcon name='wellness-icon' viewbox='0 0 53.338 53.341' />
                                    </div>
                                    <p>29</p>
                                    <h4>Wellness</h4>
                                </li>
                            </ul>
                        </Col>
                        <Col md='3'>
                            <div className='categoryall-arrow' data-aos='fade-left' data-aos-duration="1100">
                                <SvgIcon className='categoryall-icon' name='readmore-icon' viewbox='0 0 55.469 17.557' />
                                <Link to='/blog-category'>
                                    Explore All
                                    <SvgIcon className='arrow-right' name='chevron-right' viewbox='0 0 4.029 6.932' />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className='blog-heading-row'>
                        <Col>
                            <h2 data-aos='fade-right' data-aos-duration="900">Explore our <br /> Most Viewed Blogs</h2>
                            <Link to='/blog' data-aos='fade-right' data-aos-duration="1000">
                                Explore All
                                <SvgIcon className='arrow-right' name='chevron-right' viewbox='0 0 4.029 6.932' />
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {blogItemData.map (item =>
                                <div className='blog-item' key={item.id}>
                                    <Row>
                                        <Col lg='6' data-aos='fade-right' data-aos-duration="800">
                                            <img className='blog-img' src={item.mainimage} alt={BlogImg5} />
                                        </Col>
                                        <Col lg='6' data-aos='fade-left' data-aos-duration="800">
                                            <h3>{item.title}</h3>
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
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default BlogPage;