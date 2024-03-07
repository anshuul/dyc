import React from 'react';
import { Container, Row, Col, SvgIcon, DownloadSection } from '../../components/common';
import { Link } from 'react-router-dom';
import './index.scss'

import LogoIcon from '../../assets/images/logo-icon.svg';

const PrivacyPolicy = () => {
    return (
        <div className='twl-terms-wrapper'>
            <section className='terms-banner'>
                <Container>
                    <Row className='banner-row'>
                        <Col md='7' lg='8'>
                            <div className='banner-left'>
                                <div>
                                    <h1 data-aos='fade-right' data-aos-duration="900">Privacy <br /> Policy</h1>
                                    <p data-aos='fade-right' data-aos-duration="1000">
                                        Last Updated: October 1, 2021
                                    </p>
                                </div>
                                <div className='bottom-link'>
                                    <SvgIcon className='left-arrow' name='privacy-arrow' viewbox='0 0 55.468 17.558' />
                                    <Link to='/terms-conditions'>
                                        Terms and Conditions <SvgIcon className='right-arrow' name='chevron-right' viewbox='0 0 4.029 6.932' />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md='5' lg='4'>
                            <div className='brand-mark' data-aos='fade-left' data-aos-duration="1000">
                                <img src={LogoIcon} alt={LogoIcon} />
                                <p>TravellerPass</p>
                                <h1>Brand Mark</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='terms-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-row'>
                                <h2>Overview</h2>
                                <p>
                                    This service is operated by TravellerPass LLC. Throughout the site, the terms “we”, “us” and “our” refer to TravellerPass LLC. TravellerPass LLC offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. <br />
                                    By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. <br />
                                    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h2>Online Store Terms & Membership</h2>
                                <p>
                                    This service is operated by TravellerPass LLC. Throughout the site, the terms “we”, “us” and “our” refer to TravellerPass LLC. TravellerPass LLC offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. <br />
                                    By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. <br />
                                    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. <br />
                                    Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                                </p>
                                <p>
                                    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your country of residence, or that you are the age of majority in your country of residence and you have given us your consent to allow any of your minor dependents to use this site. <br />
                                    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                                    TravellerPass LLC will send you email campaigns to keep you aware of the latest offers. <br />
                                    You must not transmit any worms or viruses or any code of a destructive nature. <br />
                                    A breach or violation of any of the Terms will result in an immediate termination of your Services.
                                </p>
                                <ul>
                                    <li>
                                        TravellerPass LLC maintains the http://www.travellerpass.com Website (“Site”)
                                    </li>
                                    <li>
                                        We will not trade with or provide any services to OFAC and sanctioned countries
                                    </li>
                                    <li>
                                        Customers using the website who are Minor /under the age of 18 shall not register as a User of the website and shall not transact on or use the website
                                    </li>
                                    <li>
                                        Cardholder must retain a copy of transaction records and Merchant policies and rules
                                    </li>
                                    <li>
                                        The user is responsible for maintaining the confidentiality of his account
                                    </li>
                                </ul>

                            </div>
                            <div className='content-row'>
                                <h3>Memberships on Apple Devices</h3>
                                <h4>Payments and Renewal:</h4>
                                <ul>
                                    <li>
                                        Payment will be charged to iTunes Account at confirmation of purchase.
                                    </li>
                                    <li>
                                        Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.
                                    </li>
                                    <li>
                                        Account will be charged for renewal within 24-hours prior to the end of the current period.
                                    </li>
                                    <li>
                                        You can manage or turn off auto-renew in your Account settings at any time after purchase
                                    </li>
                                    <li>
                                        No cancellation of the current subscription is allowed during the active period.
                                    </li>
                                </ul>
                                <p>
                                    In the event of any failure of the Licensed Application to conform to any applicable warranty, the User may notify Apple, and Apple will refund the purchase price for the Licensed Application to that User; and that, to the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any of the mentioned warranty or terms mentioned in the agreement. <br />
                                    TravellerPass LLC and the User agrees to acknowledge that the agreement is concluded between TravellerPass and the User only, and not with Apple.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h3>Memberships on Android</h3>
                                <p>
                                    Visa, Mastercard and other major card processing companies with both credit and debit cards may be used for payments on the app in AED, OMR or US Dollars as specified during purchase of memberships. Subscription options for monthly and yearly memberships are offered. In case of a refund request by the user, the request will be reviewed and the amount in full or for the remaining months of the membership will be refunded to the original mode of payment based on TravellerPass LLC’s decision on a case-by-case basis.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h2>General Conditions</h2>
                                <p>
                                    We reserve the right to refuse service to anyone for any reason at any time. <br />
                                    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to the technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. <br />
                                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. <br />
                                    The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h2>Accuracy, Completeness and <br /> Timeless of Information</h2>
                                <p>
                                    We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. <br />
                                    This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h2>Modifications to the <br /> Service and Prices</h2>
                                <p>
                                    Prices for our products are subject to change without notice. <br />
                                    We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. <br />
                                    We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.
                                </p>
                            </div>
                            <div className='content-row'>
                                <h2>Products or Services (If Applicable)</h2>
                                <p>
                                    Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. <br />
                                    We have made every effort to display as accurately as possible the colours and images of our products that appear at the store. We cannot guarantee that your computer monitor’s display of any colour will be accurate. <br />
                                    We reserve the right but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing and services are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product or service at any time. Any offer for any product or service made on this site is void where prohibited. <br />
                                    Should an offer be removed or deactivated from the app, the customer will not be eligible for a refund on these grounds.  <br />
                                    Should your mobile not function efficiently, we will try to resolve the issue for you within 5-7 working days. The customer may claim for a refund if we are unable to fix the issue within the stipulated time-frame. <br />
                                    We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the service will be corrected.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <DownloadSection />
        </div>
    )
}

export default PrivacyPolicy;