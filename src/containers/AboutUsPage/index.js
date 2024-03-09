import React from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../components/common';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

import BlogImg1 from '../../assets/images/blog-1-new.jpg';
import BlogImg2 from '../../assets/images/blog-2.jpg';
import BlogImg3 from '../../assets/images/blog-3.jpg';
import BlogImg4 from '../../assets/images/blog-4.jpg';
import Tpimg1 from '../../assets/images/tp-img1.jpg';
import Tpimg2 from '../../assets/images/tp-img2.jpg';
import Tpimg3 from '../../assets/images/tp-img3.jpg';
import Tpimg4 from '../../assets/images/tp-img4.jpg';
import TopBrands from '../../assets/images/top-brands.jpg';
import videoBg from '../../assets/images/video-bg.png';
import LabelledSolutionImg from '../../assets/images/labelled-solution.png';
import LabelledSolutionBg from '../../assets/images/labelled-solution-bg.svg';
import ADCBBank from '../../assets/images/ADCB-Bank.png';
import BeyondRewards from '../../assets/images/Beyond-Rewards.png';
import CommercialBank from '../../assets/images/Commercial-Bank.png';
import DeemOffers from '../../assets/images/Deem-Offers.png';
import Ahlirewards from '../../assets/images/ahlirewards.png';
import MyOffers from '../../assets/images/My-Offers.png';
import TravellerPass from '../../assets/images/TravellerPass.png';
import DubaiIslamicBank from '../../assets/images/Dubai-Islamic-Bank.png';
import PartnersBgImage from '../../assets/images/partner-bg.jpg';
import TpIcon from '../../assets/images/tp-icon.png';
import AboutBannerBg from '../../assets/images/about-bg.jpg';

const AboutUsPage = () => {
    const exporeList = [
        {
            id: 1,
            image: <SvgIcon name='dining-icon' viewbox='0 0 71.125 48.658' />,
            name: 'Customize Your way',
            details: 'TravellerPass powers reward systems for your firm.',
            details2: 'We can build you a customized app based on specific branding needs tailor-made for your company.',
            speed: 600,
        },
        {
            id: 2,
            image: <SvgIcon name='leisure-icon' viewbox='0 0 61.201 44.936' />,
            name: 'Api Flexiblity',
            details: 'We adapt to your needs.',
            details2: 'We are flexible enough to provide you with external or internal API’s. Use flexible extensions based on your business. We are there every step of the way.',
            speed: 700,
        },
        {
            id: 3,
            image: <SvgIcon name='shopping-icon' viewbox='0 0 50.18 47.098' />,
            name: 'Digital Cost effective',
            details: 'Digital marketing is a key factor to standout from the masses.',
            details2: ' Signing up with us helps your brand grow digitally and enhance marketing plans with our social campaigns.',
            speed: 800,
        },
        {
            id: 4,
            image: <SvgIcon name='wellness-icon' viewbox='0 0 53.338 53.341' />,
            name: 'Dashboard Real insights',
            details: 'Signing up with us provides access to a real-time dashboard with business insights.',
            details2: 'Track customer usage, generate heat maps, access data on usage metrics and more.',
            speed: 900,
        },
        {
            id: 5,
            image: <SvgIcon name='prive-icon' viewbox='0 0 57.805 48.664' />,
            name: 'Shoutout Email marketing',
            details: 'Our in-house team will create tailor-made email marketing plans for your business.',
            details2: 'Drive usage, increase awareness and engagement for your loyalty program with your branding.',
            speed: 1000,
        },
        {
            id: 6,
            image: <SvgIcon name='prive-icon' viewbox='0 0 57.805 48.664' />,
            name: 'Support 24/7 helpline',
            details: 'Our customer service team is always available to help out with customer grievances.',
            details2: 'Providing your loyalty program with 24/7 live help and structured B2B support.',
            speed: 1100,
        }
    ]

    const Blogdata = [
        {
            title: 'The Ultimate Children’s Playground',
            avatar: BlogImg2,
            date: 'NOV 29 - 5 MIN READ'
        },
        {
            title: 'Time to head to The Dubai Mall',
            avatar: BlogImg3,
            date: 'DEC 02 - 9 MIN READ'
        },
        {
            title: 'Time for something new',
            avatar: BlogImg4,
            date: 'JAN 08 - 10 MIN READ'
        },
    ];

    return (
        <div className='twl-about-wrapper'>
            <section className='landing-banner'>
                <Container>
                    <div className='banner-row'>
                        <h1 data-aos='fade-right' data-aos-duration="900">Know more <br /> About TravellerPass</h1>
                        <p data-aos='fade-right' data-aos-duration="1000">
                            Get to know the story, the faces <br />and the operations behind the brand.
                        </p>
                    </div>
                </Container>
            </section>
            <section className='about-banner'>
                <Container>
                    <Row>
                        <Col>
                            <div className='about-card' data-aos='zoom-in' data-aos-duration="900">
                                <SvgIcon name='travellerPass-icon' viewbox='0 0 115.729 187.284' />
                                <p>About</p> <p>Team</p> <p>Brands</p> <p>Partners</p> <p>Career</p> <p>Blogs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img data-aos='fade-in' data-aos-duration="900" className='banner-img' src={AboutBannerBg} alt={AboutBannerBg} />
            </section>
            <section className='about-section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md='8' className='left-section'>
                            <label data-aos='fade-right' data-aos-duration="800">ABOUT US</label>
                            <h1 data-aos='fade-right' data-aos-duration="900">TravellerPass LLC is a part of IMC Middle East which has over 19 years of expertise in crafting loyalty solutions</h1>
                            <p data-aos='fade-right' data-aos-duration="1000">
                                Our team comprises of a diverse set of experts, ranging from consultants, engineers, social media experts and loyalty experts. We are committed to helping businesses deploy strategic marketing campaigns and building loyalty programs.
                            </p>
                        </Col>
                        <Col md='4' className='right-section'>
                            <div className='brand-mark' data-aos='fade-left' data-aos-duration="1000">
                                <img src={TpIcon} alt={TpIcon} />
                                <p>TravellerPass</p>
                                <h1>Brand Mark</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className='team-section'>
                <Container>
                    <Row>
                        <Col sm='12' data-aos='fade-right' data-aos-duration="900">
                            <label>TEAM</label>
                            <h2>Meet <br /> the Team</h2>
                            <div className='tp-icon'>
                                <SvgIcon name='travellerPass-icon' viewbox='0 0 115.729 187.284' />
                            </div>
                        </Col>
                        <Col sm='12'>
                            <ul className='team-list'>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg1} alt={TeamImg1} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg2} alt={TeamImg2} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg3} alt={TeamImg3} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg4} alt={TeamImg4} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg5} alt={TeamImg5} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg6} alt={TeamImg6} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg7} alt={TeamImg7} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='team-card'>
                                        <div className='team-card-img'>
                                            <img src={TeamImg8} alt={TeamImg8} />
                                        </div>
                                        <div className='team-card-bottom'>
                                            <h3>Aryaa Patel</h3>
                                            <p>UI/UX Specialist</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <section className='topbrand-section'>
                <Container>
                    <Row>
                        <Col>
                            <label>BRANDS</label>
                            <h1 className='heading' data-aos='fade-in' data-aos-duration="1000">Top brands, <br /> all in one place</h1>
                            <img data-aos='zoom-in' data-aos-duration="1100" src={TopBrands} alt="Top Brands" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='buildwith-section'>
                <Container>
                    <Row>
                        <Col md='6' className='buildwith-left'>
                            <h1 data-aos='fade-in' data-aos-duration="800">Build a white labelled solution <br />or integrate with our API</h1>
                            <Button>Get in Touch</Button>
                        </Col>
                        <Col md='6' className="buildwith-right">
                            <div className='buildwith-right-inner'>
                                <img className='buildwith-img' src={LabelledSolutionImg} alt={LabelledSolutionImg} />
                                <img className='buildwith-bg' src={LabelledSolutionBg} alt={LabelledSolutionBg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='explore-section1'>
                <Container>
                    <Row>
                        <Col sm='6' className='heading-left'>
                            <label>PARTNER</label>
                            <h2 className='heading text-left' data-aos='fade-in' data-aos-duration="1000">
                                Work on your <br /> loyalty solution with us
                            </h2>
                        </Col>
                        <Col sm='6'>
                            <div className='heading-right'>
                                <div className='heading-right-inner'>
                                    <div>
                                        <div>
                                            <Button><SvgIcon name='play' viewbox='0 0 41.93 41.965' /></Button>
                                            <SvgIcon className='arrow' name='arrow2' viewbox='0 0 51.113 32.973' />
                                        </div>
                                        <p>Here's an <br />app demo</p>
                                    </div>
                                    <div className='right-col'>
                                        <SvgIcon name='dots' viewbox='0 0 48.628 42.496' />
                                    </div>
                                </div>
                                <img className='bg-image' src={videoBg} alt={videoBg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='explore-section'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <div>
                                <ul className='explore-list'>
                                    {exporeList.map((item) =>
                                    (<li key={item.id} data-aos='fade-up' data-aos-duration={item.speed}>
                                        <div className='explore-list-card'>
                                            <div className='explore-list-card-image'>
                                                {item.image}
                                            </div>
                                            <div className='explore-caption'>
                                                <h3>{item.name}</h3>
                                                <p>{item.details}</p>
                                                <p>{item.details2}</p>
                                            </div>
                                        </div>
                                    </li>)
                                    )}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <div className='partner-section' style={{ backgroundImage: `url(${PartnersBgImage})` }}>
                        <Row>
                            <Col xs='12' className='mb-5'>
                                <h1 data-aos='fade-iright' data-aos-duration="900" className='heading'>Our Valued <br />Partners</h1>
                                <p className='heading-text' data-aos='fade-right' data-aos-duration="1000">
                                    Building loyalty programs with initiatives that focus on retaining customers, driving incremental profits and to create stronger engagement between your customers and your brands.
                                </p>
                            </Col>
                            <Col xs='12'>
                                <div className='text-right mb-4'>
                                    <Link to='/about' className='getin-link'>Get in Touch <SvgIcon name='arrow-right' viewbox='0 0 24.603 7.838' /></Link>
                                </div>
                                <div className='partner-card'>
                                    <ul>
                                        <li>
                                            <div className='img-box'>
                                                <img src={ADCBBank} alt={ADCBBank} />
                                            </div>
                                            <p>ADCB Bank</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={BeyondRewards} alt={BeyondRewards} />
                                            </div>
                                            <p>Beyond Rewards (by ENBD)</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={CommercialBank} alt={CommercialBank} />
                                            </div>
                                            <p>Commercial Bank of Dubai</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={DeemOffers} alt={DeemOffers} />
                                            </div>
                                            <p>Deem Offers</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={Ahlirewards} alt={Ahlirewards} />
                                            </div>
                                            <p>ahlirewards</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={MyOffers} alt={MyOffers} />
                                            </div>
                                            <p>My Offers</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={TravellerPass} alt={TravellerPass} />
                                            </div>
                                            <p>TravellerPass</p>
                                        </li>
                                        <li>
                                            <div className='img-box'>
                                                <img src={DubaiIslamicBank} alt={DubaiIslamicBank} />
                                            </div>
                                            <p>Dubai Islamic Bank</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </section>
            <section className='blog-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='blog-upper'>
                                <Row>
                                    <Col lg='6' data-aos='fade-right' data-aos-duration="800">
                                        <img className='blog-img' src={BlogImg1} alt="Blog" />
                                    </Col>
                                    <Col lg='6' data-aos='fade-left' data-aos-duration="800">
                                        <label>Blogs</label>
                                        <h3>Your perfect plan for an unforgettable holidays</h3>
                                        <p>People of the UAE, Eid Holidays are approaching. So,
                                            planning the ultimate Eid weekend is what is on most
                                            of our minds as we all want to make the most out
                                            of this Eid weekend.
                                        </p>
                                        <Button type='primary' className='with-icon' icon={<SvgIcon name='chevron-right' viewbox='0 0 4.029 6.932' />}>Read Full</Button>
                                        <div className='bottom-text'>Nov  29 - 3 min read</div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <List
                                data-aos='fade-up' data-aos-duration="800"
                                itemLayout="horizontal"
                                dataSource={Blogdata}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[<Button> <SvgIcon name='chevron-right' viewbox='0 0 4.029 6.932' /> </Button>]}
                                    >
                                        <List.Item.Meta
                                            avatar={<img src={item.avatar} alt="" />}
                                            title={item.title}
                                            description={item.date}
                                        />
                                    </List.Item>
                                )}
                            />
                            <div className='more-blog'>
                                <ul>
                                    <li><img src={Tpimg1} alt='Blog More' /></li>
                                    <li><img src={Tpimg2} alt='Blog More' /></li>
                                    <li><img src={Tpimg3} alt='Blog More' /></li>
                                    <li><img src={Tpimg4} alt='Blog More' /></li>
                                </ul>
                                <Button type='link'>+ 23 Blogs</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default AboutUsPage