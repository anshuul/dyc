import React, { useState } from 'react';
import { SvgIcon } from '../../components/common';
import { Button, Radio } from 'antd';
import Lottie from 'react-lottie';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import BookingImg1 from '../../assets/images/experiences-img-1.jpg';
import BookingImg2 from '../../assets/images/experiences-img-2.jpg';
import BookingImg3 from '../../assets/images/experiences-img-3.jpg';
import BookingImg4 from '../../assets/images/experiences-img-4.jpg';
import AnimationOne from '../../assets/json/empty-offer.json';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}>
            <SvgIcon name='chevron-right' viewbox='0 0 4.029 6.932' />
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}>
            <SvgIcon name='chevron-left' viewbox='0 0 4.029 6.932' />
        </div>
    );
}

const MyBookingsTab = () => {
    const [value, setValue] = useState(1);
    const [isShowData, setIsShowData] = useState(false);

    const animationLottie = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        renderer: 'svg'
    }

    const showData = () => {
        setIsShowData(true);
    };

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='right-tab-inner'>

            {isShowData ?
                <>
                    <h1 className='tab-heading'>My Bookings</h1>
                    <div className='tab-content mybookings-tab'>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Upcoming</Radio>
                            <Radio value={2}>Completed</Radio>
                            <Radio value={3}>Cancelled</Radio>
                        </Radio.Group>

                        {value === 1 &&
                            <Slider className='savedcard-slider' {...settings}>
                                <div>
                                    <Link to='/discover/booking-details'>
                                        <div className='card'>
                                            <div className='amount-right'>
                                                <p>AED 340</p>
                                                <small>Paid</small>
                                            </div>
                                            <div className='card-upper'>
                                                <div className='card-image'>
                                                    <img src={BookingImg1} alt='' />
                                                </div>
                                                <h3>Discover Tower Bridge</h3>
                                                <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                                <div className='datetime'>
                                                    <div className='item'>
                                                        <h4>25th Jun 22</h4>
                                                        <label>Date</label>
                                                    </div>
                                                    <div className='item'>
                                                        <h4>01:20 PM</h4>
                                                        <label>Time</label>
                                                    </div>
                                                    <div className='item'>
                                                        <h4>02</h4>
                                                        <label>Person</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-bottom'>
                                                <Button type='secondary'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Confirmed</Button>
                                                <div className='right-tag'>
                                                    <p>05</p>
                                                    <small>DAYS</small>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/discover/booking-details2'>
                                        <div className='card'>
                                            <div className='amount-right'>
                                                <p>AED 340</p>
                                                <small>Paid</small>
                                            </div>
                                            <div className='card-upper'>
                                                <div className='card-image'>
                                                    <img src={BookingImg2} alt='' />
                                                </div>
                                                <h3>Discover Tower Bridge</h3>
                                                <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                                <div className='datetime'>
                                                    <div className='item'>
                                                        <h4>25th Jun 22</h4>
                                                        <label>Date</label>
                                                    </div>
                                                    <div className='item'>
                                                        <h4>01:20 PM</h4>
                                                        <label>Time</label>
                                                    </div>
                                                    <div className='item'>
                                                        <h4>02</h4>
                                                        <label>Person</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-bottom'>
                                                <Button type='secondary'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Confirmed</Button>
                                                <div className='right-tag'>
                                                    <p>05</p>
                                                    <small>DAYS</small>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg3} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Confirmed</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg4} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Confirmed</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        }
                        {value === 2 &&
                            <Slider className='savedcard-slider' {...settings}>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg1} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='done-booking'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Done</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg2} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='done-booking'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Done</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg3} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='done-booking'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Done</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg4} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='done-booking'><SvgIcon name="check" viewbox="0 0 10.289 9.742" /> Done</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        }
                        {value === 3 &&
                            <Slider className='savedcard-slider' {...settings}>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg1} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='cancelled-booking'><SvgIcon name="close" viewbox="0 0 7.481 7.521" /> Cancelled</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg2} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='cancelled-booking'><SvgIcon name="close" viewbox="0 0 7.481 7.521" /> Cancelled</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg3} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='cancelled-booking'><SvgIcon name="close" viewbox="0 0 7.481 7.521" /> Cancelled</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='card'>
                                        <div className='amount-right'>
                                            <p>AED 340</p>
                                            <small>Paid</small>
                                        </div>
                                        <div className='card-upper'>
                                            <div className='card-image'>
                                                <img src={BookingImg4} alt='' />
                                            </div>
                                            <h3>Discover Tower Bridge</h3>
                                            <div className='address-row'><SvgIcon name="map" viewbox="0 0 8.358 12.537" /> London, United Kingdom</div>
                                            <div className='datetime'>
                                                <div className='item'>
                                                    <h4>25th Jun 22</h4>
                                                    <label>Date</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>01:20 PM</h4>
                                                    <label>Time</label>
                                                </div>
                                                <div className='item'>
                                                    <h4>02</h4>
                                                    <label>Person</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-bottom'>
                                            <Button type='secondary' className='cancelled-booking'><SvgIcon name="close" viewbox="0 0 7.481 7.521" /> Cancelled</Button>
                                            <div className='right-tag'>
                                                <p>05</p>
                                                <small>DAYS</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        }
                    </div>
                </>
                :
                <div className='empty-data-card empty-favourite' onClick={showData} data-aos='fade-in' data-aos-duration="800">
                    <Lottie
                        options={animationLottie}
                        height={280}
                        width={280}
                    />
                    <h2>Oops, its empty!</h2>
                    <p>Save your card and make payments seamlessly at partner venues.</p>
                    <Button className='px-5 mt-2' type='secondary'>Explore</Button>
                </div>
            }

        </div>
    )
}

export default MyBookingsTab;