import React, { useState } from 'react';
import { SvgIcon } from '../../components/common';
import { Button, Card } from 'antd';
import Lottie from 'react-lottie';
import './index.scss'

import Listimg1 from '../../assets/images/list-img-1.jpg';
import Listimg2 from '../../assets/images/list-img-2.jpg';
import Listimg3 from '../../assets/images/list-img-3.jpg';
import Listimg4 from '../../assets/images/list-img-4.jpg';
import Listimg5 from '../../assets/images/list-img-5.jpg';
import Listimg6 from '../../assets/images/list-img-6.jpg';
import AnimationOne from '../../assets/json/empty-offer.json';

const FavouriteTab = () => {
    const ListData = [
        { key: 1, name: 'Vintage London Voyage', image: Listimg1 },
        { key: 2, name: 'Royal Revelry Tour', image: Listimg2 },
        { key: 3, name: 'Majestic Museums Marvel', image: Listimg3 },
        { key: 4, name: 'Vintage', image: Listimg4 },
        { key: 5, name: 'Royal Revelry Tour', image: Listimg5 },
        { key: 6, name: 'Majestic Museums Marvel', image: Listimg6 }
    ]
    const animationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        renderer: 'svg'
    }
    const [isShowData, setIsShowData] = useState(false);

    const showData = () => {
        setIsShowData(true);
    };
    return (
        <div className='right-tab-inner'>
            {isShowData ?
                <>
                    <h1 className='tab-heading' data-aos='fade-in' data-aos-duration="800">Favorite</h1>
                    <div className='tab-content favourite-tab' data-aos='fade-in' data-aos-duration="800">
                        <div className='listing-row'>
                            {ListData.map(item =>
                                <Card
                                    key={item.key}
                                    className='tp-item-card'
                                    cover={<img alt="TP List" src={item.image} />}
                                    extra={<Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>}
                                    onClick={() => window.open("/details", "_self")}
                                >
                                    <div className='bottom-row'>
                                        <div className='left-col'>
                                            <h3>{item.name}</h3>
                                            <div className='price-col'>
                                                From <span className='bottomprice'>AED 340</span> / person <span className='off-price'>AED 523</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </>
                :
                <div className='empty-data-card empty-favourite' onClick={showData} data-aos='fade-in' data-aos-duration="800">
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

export default FavouriteTab;