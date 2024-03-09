import React, { useState } from 'react';
import { Row, Col } from '../../components/common';
import Lottie from 'react-lottie';
import { List } from 'antd';
import './index.scss'

import AnimationOne from '../../assets/json/empty-offer.json';
import OfferImg1 from '../../assets/images/offer-1.png';
import OfferImg2 from '../../assets/images/offer-2.png';
import OfferImg3 from '../../assets/images/offer-3.png';
import OfferImg4 from '../../assets/images/offer-4.png';

const MyOffersTab = () => {
    const [isShowData, setIsShowData] = useState(false);

    const showData = () => {
        setIsShowData(true);
    };
    const animationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        renderer: 'svg'
    }
    const data = [
        {
            image: OfferImg1,
            title: '50% Off Eid Offers',
            description: 'Planing the perfect celebration is now'
        },
        {
            image: OfferImg2,
            title: '30% Ramadan Month Offers',
            description: 'This Holy month of ramadan, dine at the most'
        },
        {
            image: OfferImg3,
            title: '70% Eid Holiday Offers',
            description: 'Enjoy your Eid holiday in style and utmost'
        },
        {
            image: OfferImg4,
            title: '10% Abu Dhabi Offers',
            description: 'The all-new rewards app will make your life More rewarding.'
        },
    ];
    return (
        <div className='right-tab-inner'>
            {isShowData ?
                <>
                    <h1 className='tab-heading' data-aos='fade-in' data-aos-duration="800">My Offers</h1>
                    <div className='tab-content myoffers-tab' data-aos='fade-in' data-aos-duration="800">
                        <Row>
                            <Col>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<img src={item.image} alt={item.title} />}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </div>
                </>
                :
                <div className='empty-data-card empty-offers' onClick={showData} data-aos='fade-in' data-aos-duration="800">
                    <Lottie
                        options={animationLottie}
                        height={280}
                        width={280}
                    />
                    <h2>Sorry, its empty!</h2>
                    <p>We will make sure to notify you when you have free vouchers, promotions and goodies to avail!</p>
                </div>
            }
        </div>
    )
}

export default MyOffersTab;