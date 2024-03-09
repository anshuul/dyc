import React, { useState } from 'react';
import { Row, Col, SvgIcon } from '../../components/common';
import { Button, Switch } from 'antd';
import Lottie from 'react-lottie';
import Slider from "react-slick";
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import SavedCardImage from '../../assets/images/payment-cards.png';
import masterCard from '../../assets/images/mater-card.png';
import visaCard from '../../assets/images/visa-card.png';
import AnimationOne from '../../assets/json/emptycard.json';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <Button
            className={className}
            onClick={onClick}>
            <SvgIcon name='chevron-right' viewbox='0 0 4.029 6.932' />
        </Button>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <Button
            className={className}
            onClick={onClick}>
            <SvgIcon name='chevron-left' viewbox='0 0 4.029 6.932' />
        </Button>
    );
}

const MyCardsTab = () => {
    const [isShowCardsList, setIsShowCardsList] = useState(false);

    const showCardsList = () => {
        setIsShowCardsList(true);
    };
    const animationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        renderer: 'svg'
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 467,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='right-tab-inner'>
            {isShowCardsList ?
                <>
                    <h1 className='tab-heading' data-aos='fade-in' data-aos-duration="800">My Cards</h1>
                    <div className='tab-content'>
                        <div className='mycard-tab'>
                            <Button className='addcard-btn' type='link' icon={<SvgIcon name='plus' viewbox='0 0 16.638 17.53' />}>Add New Card</Button>
                            <div className='cardtitle' data-aos="fade-up" data-aos-duration="1000">
                                Saved Cards
                                <img src={SavedCardImage} alt="Saved Cards" />
                            </div>
                            <Slider className='savedcard-slider' {...settings}>
                                <div>
                                    <div className='slider-card selected' data-aos="zoom-in" data-aos-duration="1000">
                                        <div className='card-upper'>
                                            <div className='card-icons'>
                                                <img src={masterCard} alt='Master' />
                                            </div>
                                            <Button type='link' size='small'><SvgIcon name='trash' viewbox='0 0 6.556 8.627' /> </Button>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>1224 56 ** **** 7890</h3>
                                            <p>07/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='slider-card' data-aos="zoom-in" data-aos-duration="1200">
                                        <div className='card-upper'>
                                            <div className='card-icons'>
                                                <img src={visaCard} alt='Visa' />
                                            </div>
                                            <Button><SvgIcon name='trash' viewbox='0 0 6.556 8.627' /> </Button>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>1224 56 ** **** 7890</h3>
                                            <p>07/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='slider-card' data-aos="zoom-in" data-aos-duration="1400">
                                        <div className='card-upper'>
                                            <div className='card-icons'>
                                                <img src={visaCard} alt='Visa' />
                                            </div>
                                            <Button><SvgIcon name='trash' viewbox='0 0 6.556 8.627' /> </Button>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>1224 56 ** **** 7890</h3>
                                            <p>07/2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='slider-card' data-aos="zoom-in" data-aos-duration="1200">
                                        <div className='card-upper'>
                                            <div className='card-icons'>
                                                <img src={visaCard} alt='Visa' />
                                            </div>
                                            <Button><SvgIcon name='trash' viewbox='0 0 6.556 8.627' /> </Button>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>1224 56 ** **** 7890</h3>
                                            <p>07/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <Row className="cards-bottom-row" data-aos="fade-up" data-aos-duration="1000">
                                <Col sm='6'>
                                    <p>
                                        We do not store any sensitive card information. all sensitive information is replaced by a non-sensitive token issued by our PCI complaints payment gateway to manage all purchase through the app.
                                    </p>
                                </Col>
                                <Col sm='6' className="autorenew-right">
                                    <div className='autorenew-right-inner'>
                                        <span className='autorenew-text'>Auto renewal</span>
                                        <Switch />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>
                :
                <div className='mycard-tab' data-aos='fade-in' data-aos-duration="800">
                    <div className='empty-data-card'>
                        <Lottie
                            options={animationLottie}
                            height={280}
                            width={280}
                        />
                        <h2>Oops, its empty!</h2>
                        <p>Save your card and make payments seamlessly at partner venues.</p>
                        <Button type='secondary' className='add-new-btn' icon={<SvgIcon name='plus' viewbox='0 0 16.638 17.53' />} onClick={showCardsList}>
                            Add New Card
                        </Button>
                        <p>You will be charged a token amount to authorize your card which will be reversed to you.</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default MyCardsTab;