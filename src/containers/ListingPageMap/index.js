import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button, Checkbox, Dropdown, Slider } from 'antd';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sliders from "react-slick";
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss";
import './index.scss'

import MapDiningimg1 from '../../assets/images/tour1.jpg';
import MapDiningimg2 from '../../assets/images/tour2.jpg';
import MapDiningimg3 from '../../assets/images/tour3.jpg';

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

const ListingPageMap = () => {
    const settingsMapSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 10,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const marks = {
        0: '0',
        5: '5',
        10: '10',
        15: '15',
        20: '20',
        25: '25',
        30: '30',
        35: '35',
        40: '40',
        45: '45',
        50: '50',
        55: '55',
        60: '60',
        65: '65',
        70: '70',
        75: '75',
        80: '80',
        85: '85',
        90: '90',
        95: '95',
        100: '100'
    };

    const items = [
        {
            key: '1',
            label: (
                <div className='category-box'>
                    <h3>Category</h3>
                    <ul>
                        <li>City Tour <Checkbox /></li>
                        <li>Attractions <Checkbox /></li>
                        <li>Water Sport <Checkbox /></li>
                        <li>Art and culture <Checkbox /></li>
                        <li>Heritage <Checkbox /></li>
                        <li>Food and Drinks <Checkbox /></li>
                        <li>Wellness <Checkbox /></li>
                        <li>Entertainment <Checkbox /></li>
                    </ul>
                </div>
            ),
        },
    ];

    const dateItems = [
        {
            key: '1',
            label: (
                <div className='category-box'>
                    <h3>Planning your trip?</h3>
                    <div className='planning-time'>
                        <Calendar />
                    </div>
                </div>
            ),
        },
    ];

    const priceRangeItems = [
        {
            key: '1',
            label: (
                <div className='category-box'>
                    <h3>Price Range</h3>
                    <div className='price-range'>
                        <div className='minmax-row'>
                            <div className='colum'>
                                <label>$10</label>
                                <p>Minimum</p>
                            </div>
                            <div className='colum'>
                                <label>$10</label>
                                <p>Maximum</p>
                            </div>
                        </div>
                        <Slider range marks={marks} defaultValue={[10, 50]} />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className='twl-listing-wrapper'>
            <section className='map-section'>
                <div className='upperfilters-row'>
                    <Dropdown
                        menu={{ items }}
                        overlayClassName="filter-drop"
                        trigger={['click']}
                        dropdownRender={(menu) => (
                            <div>
                                {menu}
                                <div className='drop-footer'>
                                    <Button type='text'>Reset all</Button>
                                    <Button type='primary'>Show results</Button>
                                </div>
                            </div>
                        )}
                    >
                        <button onClick={(e) => e.preventDefault()}>
                            Category <SvgIcon name='chevron-bottom' viewbox="0 0 13 8" />
                        </button>
                    </Dropdown>
                    <Dropdown
                        menu={{ items: dateItems }}
                        overlayClassName="filter-drop"
                        trigger={['click']}
                        dropdownRender={(menu) => (
                            <div>
                                {menu}
                                <div className='drop-footer'>
                                    <Button type='text'>Reset all</Button>
                                    <Button type='primary'>Show results</Button>
                                </div>
                            </div>
                        )}
                    >
                        <button onClick={(e) => e.preventDefault()}>
                            Date <SvgIcon name='chevron-bottom' viewbox="0 0 13 8" />
                        </button>
                    </Dropdown>
                    <Dropdown
                        menu={{ items: priceRangeItems }}
                        overlayClassName="filter-drop"
                        trigger={['click']}
                        dropdownRender={(menu) => (
                            <div>
                                {menu}
                                <div className='drop-footer'>
                                    <Button type='text'>Reset all</Button>
                                    <Button type='primary'>Show results</Button>
                                </div>
                            </div>
                        )}
                    >
                        <button onClick={(e) => e.preventDefault()}>
                            Price Range <SvgIcon name='chevron-bottom' viewbox="0 0 13 8" />
                        </button>
                    </Dropdown>
                </div>
                <div className='map-row'>
                    {/* <img className='map-img' src={MapImg} alt="map" /> */}
                    <div className='map-area'><iframe title='map' frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubai+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    <div className='map-lists'>
                        <Container>
                            <Row>
                                <Col>
                                    <Sliders className='map-slider' {...settingsMapSlider}>
                                        <div>
                                            <div className='map-card'>
                                                <div className='card-img'>
                                                    <img src={MapDiningimg1} alt="Map" />
                                                </div>
                                                <div className='map-card-right'>
                                                    <Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>
                                                    <div className='upper-col'>
                                                        <h3>Food Factory</h3>
                                                        <p><SvgIcon name='map' viewbox='0 0 8.358 12.537' /> 12km  /  Al Karama Center</p>
                                                    </div>
                                                    <div className='bottom-col'>
                                                        50% OFF
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='map-card'>
                                                <div className='card-img'>
                                                    <img src={MapDiningimg2} alt="Map" />
                                                </div>
                                                <div className='map-card-right'>
                                                    <Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>
                                                    <div className='upper-col'>
                                                        <h3>Dinner Junctions</h3>
                                                        <p><SvgIcon name='map' viewbox='0 0 8.358 12.537' /> 12km  /  Al Karama Center</p>
                                                    </div>
                                                    <div className='bottom-col'>
                                                        50% OFF
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='map-card'>
                                                <div className='card-img'>
                                                    <img src={MapDiningimg3} alt="Map" />
                                                </div>
                                                <div className='map-card-right'>
                                                    <Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>
                                                    <div className='upper-col'>
                                                        <h3>Fish Dubai</h3>
                                                        <p><SvgIcon name='map' viewbox='0 0 8.358 12.537' /> 12km  /  Al Karama Center</p>
                                                    </div>
                                                    <div className='bottom-col'>
                                                        50% OFF
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='map-card'>
                                                <div className='card-img'>
                                                    <img src={MapDiningimg3} alt="Map" />
                                                </div>
                                                <div className='map-card-right'>
                                                    <Button><SvgIcon name='heart' viewbox='0 0 10.238 9.131' /></Button>
                                                    <div className='upper-col'>
                                                        <h3>Fish Dubai</h3>
                                                        <p><SvgIcon name='map' viewbox='0 0 8.358 12.537' /> 12km  /  Al Karama Center</p>
                                                    </div>
                                                    <div className='bottom-col'>
                                                        50% OFF
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Sliders>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-center">
                                    <Button className='list-btn' onClick={() => window.open("/listing-page", "_self")}>List <SvgIcon name='list' viewbox='0 0 18.156 12.109' /></Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ListingPageMap