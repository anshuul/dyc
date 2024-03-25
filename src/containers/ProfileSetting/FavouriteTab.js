import React, { useEffect, useState } from 'react';
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
import Apis from '../../utility/apis';
import { useSelector } from 'react-redux';
import apiClient from '../../apiConfig';
import CustomLoader from '../../components/common/Loader/CustomLoader';

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
    const [listData, setListData] = useState([]);
    const selectedCity = useSelector((state) => state.citySearch.selectedCity);
    const currency = useSelector((state) => state.currency);
    console.log(currency, "currency");
    const [showLoader, setshowLoader] = useState(false)
    const userData = localStorage.getItem("userData");


    const showData = () => {
        setIsShowData(true);
    };

    console.log(listData, "listdata");
    const handleFavToggle = (value,tourId ) => {
        setshowLoader(true)
        apiClient
        .post(
          Apis(
            "toggleFavTour",
            selectedCity.vCountryName,
            userData ? "loggedIn" : "guest"
          ),
          {
            tourId,
            productId:tourId,
            favourite:value
          }
        ).then(() => fetchData())
    
      }
    const fetchData = async () => {
        try {
            setshowLoader(true)
            const response = await apiClient.post(
                // Fetch data from API
                "/discover/favouriteTourList",
                // Apis("listByGroup", selectedCity.vCountryName, "guest"),
                {
                    dCurrentLat: selectedCity.vCityLatitude,
                    dCurrentLong: selectedCity.vCityLongitude,
                },
                {
                    headers: {
                        uCurrency: currency.uCurrency,
                    },
                }
            );


            const response2 = await apiClient.post(
                // Fetch data from API
                "/globaltix/favouriteProductList",
                // Apis("listByGroup", selectedCity.vCountryName, "guest"),
                {
                    dCurrentLat: selectedCity.vCityLatitude,
                    dCurrentLong: selectedCity.vCityLongitude,
                },
                {
                    headers: {
                        uCurrency: currency.uCurrency,
                    },
                }
            );
            // setListData((state) => {
            //    return [...response.data?.DATA,...response2.data?.DATA]
            // });
            setListData(prevData => {
                const newData = [];

                if (response.data?.DATA?.length > 0) {
                    newData.push(...response.data?.DATA.map(e => {return {...e, country:"UAE"}}));
                }

                if (response2.data?.DATA?.length > 0) {
                    newData.push(...response2.data?.DATA.map(e => {return {...e, country:"OTHERS"}}));
                }

                return [...newData];
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setshowLoader(false)

    };
    useEffect(() => {
    

        fetchData();
        return () => {
            setListData([])
        }
    }, []);

    return (
        <div className='right-tab-inner'>
            {showLoader && <CustomLoader />}
            {listData.length !== 0 ?
                <>
                    <h1 className='tab-heading' data-aos='fade-in' data-aos-duration="800">Favorite</h1>
                    <div className='tab-content favourite-tab' data-aos='fade-in' data-aos-duration="800">
                        <div className='listing-row'>
                            {listData.map((item, index) =>
                                <div style={{ position: 'relative' }} key={index}>
                                    <Button style={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "30px",
                                        padding: "0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "absolute",
                                        top: "15px",
                                        right: "15px",
                                        zIndex: "1",
                                    }}
                                        onClick={() => {
                                            handleFavToggle(item.isFavouriteOffer === 0 ? 1 : 0, item.tourId)
                                        }}
                                    >
                                        <SvgIcon
                                            name="heart"
                                            viewbox="0 0 10.238 9.131"
                                            fill={item.isFavouriteOffer === 0 ? "#000" : "#FF5D5D"}
                                        />
                                    </Button>
                                    <Card
                                        key={item.key}
                                        className='tp-item-card'
                                        cover={<img alt="TP List" src={item.gProductImage || item.rTourImage} />}
                                        // extra={<Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>}
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
                                </div>
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