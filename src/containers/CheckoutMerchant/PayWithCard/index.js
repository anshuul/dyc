import React, { useState } from 'react';
import { SvgIcon, Row, Col } from '../../../components/common';
import { Button } from 'antd';
import Slider from "react-slick";
import "../../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import SavedCardImage from '../../../assets/images/payment-cards.png';
import masterCard from '../../../assets/images/mater-card.png';
import visaCard from '../../../assets/images/visa-card.png';

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

const PayWithCard = () => {
    const [isShowCardsList, setIsShowCardsList] = useState(false);

    const showCardsList = () => {
        setIsShowCardsList(true);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
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
                  slidesToShow: 1.3,
                  slidesToScroll: 1,
                }
              },
        ]
    };
    return (
        <>
            {isShowCardsList ?
                <div className='cardpay-section'>
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
                    </Slider>
                    <Row className="cards-bottom-row" data-aos="fade-up" data-aos-duration="1000">
                        <Col>
                            <Button type='link' icon={<SvgIcon name='plus' viewbox='0 0 16.638 17.53' />}>Add New Card</Button>
                        </Col>
                    </Row>
                </div>
                :
                <div className='emptycard-section'>
                    <div className='upper-icon' data-aos="fade-up" data-aos-duration="1000">
                        <SvgIcon name='empty-card' viewbox='0 0 151.307 133' />
                    </div>
                    <Button data-aos="fade-up" data-aos-duration="1300" type='link' icon={<SvgIcon name='plus' viewbox='0 0 16.638 17.53' />} onClick={showCardsList}>Add New Card</Button>
                    <p className='mt-3' data-aos="fade-up" data-aos-duration="1600">
                        We do not store any sensitive card information. All sensitive information is replaced by a non-sensitive token issued by our PCI complaints payment gateway to manage all purchase through the app.
                    </p>
                </div>
            }
        </>
    )
}

export default PayWithCard