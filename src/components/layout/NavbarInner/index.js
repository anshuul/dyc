import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Select, Dropdown } from "antd";
import { Container, SvgIcon, DownloadAppModal } from "../../common";
import "./index.scss";

import logoImage from '../../../assets/images/logo.svg';
import aedIcon from '../../../assets/images/aed.png';
import usdIcon from '../../../assets/images/usd.png';
import gbpIcon from '../../../assets/images/gbp.png';
import inrIcon from '../../../assets/images/inr.png';
import eurIcon from '../../../assets/images/eur.png';
import CityImage1 from '../../../assets/images/list-img-1.jpg';
import CityImage2 from '../../../assets/images/list-img-2.jpg';
import CityImage3 from '../../../assets/images/list-img-3.jpg';
import CityImage4 from '../../../assets/images/list-img-4.jpg';
import CityImage5 from '../../../assets/images/list-img-5.jpg';
import CityImage6 from '../../../assets/images/list-img-6.jpg';

const getAppItems = [
    {
      key: 1,
      label: (
        <DownloadAppModal />
      )
    }
];

const curItems = [
    {
      key: '1',
      label: (
        <div className='category-box'>
          <h3>Choose currency</h3>
          <ul>
            <li>
              <div className="left-col"><div className="cur-icon"><img src={aedIcon} alt='' /></div> AED</div>
              <div className="right-col"><span>Dirham</span> - AED</div>
            </li>
            <li>
              <div className="left-col"><div className="cur-icon"><img src={usdIcon} alt='' /></div> USD</div>
              <div className="right-col"><span>Dollar </span> - $</div>
            </li>
            <li>
              <div className="left-col"><div className="cur-icon"><img src={gbpIcon} alt='' /></div> GBP</div>
              <div className="right-col"><span>Pound </span> - £</div>
            </li>
            <li>
              <div className="left-col"><div className="cur-icon"><img src={inrIcon} alt='' /></div> INR</div>
              <div className="right-col"><span>Rupee </span> - ₹</div>
            </li>
            <li>
              <div className="left-col"><div className="cur-icon"><img src={eurIcon} alt='' /></div> EUR</div>
              <div className="right-col"><span>Euro </span> - €</div>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  
const NavbarInner = () => {
    const [isActive, setIsActive] = useState(false);
    const SearchExPand = event => {
        setIsActive(current => !current);
    };
    useEffect(() => {
        document.body.classList.toggle('scroll-off', isActive);
    }, [isActive])
    return (
        <header className={isActive ? 'main-header main-header-search expand-search' : 'main-header main-header-search'}>
            {isActive ? <div onClick={SearchExPand} className="overlay-mask"></div> : null}
            <Container>
                <div className="hader-inner">
                    <div className="logo-left">
                        <Link to='/'><img src={logoImage} alt={logoImage} /></Link>
                    </div>
                    <div className="landing-search">
                        <div className="search-icon"><SvgIcon name="search" viewbox="0 0 12.901 12.905" /></div>
                        <div className="landing-search-right">
                            <label className="select-label">Where to?</label>
                            <Select
                                defaultValue="v1"
                                popupClassName="country-drop-search"
                                listHeight={420}
                                suffixIcon={<SvgIcon name="search" viewbox="0 0 12.901 12.905" />}
                                dropdownRender={(menu) => (
                                    <>
                                        <div className="drop-title">Recent Search</div>
                                        {menu}
                                    </>
                                )}
                                options={[
                                    {
                                        label: <><div className="city-img"><SvgIcon name='dubai-flag' viewbox='0 0 42 42' /></div> United Emirates Arab</>,
                                        options : [
                                            {
                                                value: 'v1',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage1} alt={CityImage1} /></div> Dubai</div>,
                                            },
                                            {
                                                value: 'v2',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage2} alt={CityImage1} /></div> Abu Dhabi</div>,
                                            },
                                            {
                                                value: 'v3',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage3} alt={CityImage3} /></div> Northern Emirates</div>,
                                            }
                                        ],
                                    },
                                    {
                                        label: <><div className="city-img"><SvgIcon name='dubai-flag' viewbox='0 0 42 42' /></div> Oman</>,
                                        options : [
                                            {
                                                value: 'v4',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage4} alt={CityImage4} /></div> Muscat</div>,
                                            },
                                            {
                                                value: 'v5',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage5} alt={CityImage5} /></div> Sur</div>,
                                            },
                                            {
                                                value: 'v6',
                                                label: <div className="drop-item"><div className="city-img"><img src={CityImage6} alt={CityImage6} /></div> Southern Oman</div>,
                                            }
                                        ],
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="hedaer-right">
                        <Dropdown overlayClassName="tpdownload-drop" placement="bottomRight" arrow={false} menu={{ items: getAppItems }}>
                            <div className="download-link"><SvgIcon name="phone" viewbox="0 0 12.18 20.438" /> Get the App</div>
                        </Dropdown>
                        <Dropdown
                            menu={{ items: curItems }}
                            placement="bottom"
                            overlayClassName="currencyheader-drop"
                            dropdownRender={(menu) => (
                                <div>
                                {menu}
                                <div className='drop-footer'>
                                    <Button type='text'>Reset all</Button>
                                    <Button type='primary'>Choose</Button>
                                </div>
                                </div>
                            )}
                            >
                            <div className="currency-col" onClick={(e) => e.preventDefault()}>
                                <div className="falg-img"><img src={aedIcon} alt='' /></div>
                                AED
                            </div>
                        </Dropdown>
                        <Button onClick={() => window.open("/login", "_self")} className="login-btn" size="small">Sign in <SvgIcon name='user-alt' viewbox="0 0 8 9" /></Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default NavbarInner;