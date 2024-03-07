import React from 'react';
import { Container, SvgIcon } from '../../../../components/common';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss'

const { Panel } = Collapse;

const KnowMore = () => {
    return (
        <div className='knowmore-wrapper'>
            <Container className='position-relative'>
                <Link className='close-icon' to='/details'>
                    <SvgIcon name="close" viewbox="0 0 7.481 7.521" />
                </Link>
                <h1>My Bookings</h1>
                <div className='mb-5'>
                    <h2>How To Redeem</h2>
                    <ul className='list1'>
                        <li>Printed or mobile voucher accepted</li>
                        <li>Present the voucher with bar code at the entrance</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2 className='mb-3'>What’s Included</h2>
                    <h3>Tour Inclusion :</h3>
                    <ul className='list1 mb-4'>
                        <li>
                            Entry ticket and 30 minutes tour of the observatory deck
                        </li>
                        <li>Transfers (if selected)</li>
                    </ul>
                    <h3>For Levels 148 + 125 + 124 :</h3>
                    <ul className='list1 mb-4'>
                        <li>Enjoy a personalized tour, guided by a Guest Ambassador. </li>
                        <li>Step out onto the world’s highest observation deck with an outdoor terrace at 555 meters. </li>
                        <li>Refresh yourself with signature refreshments at the SKY lounge. </li>
                        <li>Explore Dubai’s most famous landmarks with a unique interactive experience, using motion senses.</li>
                        <li>Continue your journey to levels 125 and 124.</li>
                    </ul>
                    <h3>For Levels 125 + 124 :</h3>
                    <ul className='list1 mb-4'>
                        <li>Be thrilled by the world’s fastest double-deck elevators, cruising at 10 m/s. </li>
                        <li>Take a closer look at the world below through avant-garde, high-powered, telescopes. </li>
                        <li>Level 125 offers a spacious deck tastefully decorated in Arabic mashrabiya for stunning 360-degree views. </li>
                        <li>Set off on a virtual reality experience to the pinnacle of Burj Khalifa.</li>
                    </ul>
                    <h3>Burj Khalifa At the Top Tickets</h3>
                    <ul className='list1'>
                        <li>Access to At The Top Level 124th Floor</li>
                        <li>Sky View Observatory tickets.</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2>What’s Excluded</h2>
                    <ul className='list2'>
                        <li>Transfers (if selected)</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2>Important Information</h2>
                    <ul className='list3'>
                        <li>Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance. </li>
                        <li>The Booking Confirmation is valid only for the selected date and time. </li>
                        <li>Transfers (if selected) Shared transfers are only provided from centrally located hotels and residences in Dubai city. (Deira, Bur Dubai, Sheikh Zayed, Marina) </li>
                        <li>The Burj Khalifa is open every day for 24 Hours. (Guests are requested to reach the venue 15 min prior to the selected time slot.) </li>
                        <li>Important note: At the Top + The Cafe , includes only 1 soft drink or 1 pastry, (Hot beverage is not included)</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2>UsefuI Information</h2>
                    <ul className='list3'>
                        <li>Please bring a valid photo ID/passport with you as it is required to be displayed at the entrance. </li>
                        <li>The Booking Confirmation is valid only for the selected date and time. </li>
                        <li>Transfers (if selected) Shared transfers are only provided from centrally located hotels and residences in Dubai city. (Deira, Bur Dubai, Sheikh Zayed, Marina) </li>
                        <li>The Burj Khalifa is open every day for 24 Hours. (Guests are requested to reach the venue 15 min prior to the selected time slot.) </li>
                        <li>Important note: At the Top + The Cafe , includes only 1 soft drink or 1 pastry, (Hot beverage is not included)</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2>FAQ</h2>
                    <Collapse accordion
                        defaultActiveKey={['1']}
                        expandIconPosition='end'
                        expandIcon={({ isActive }) => isActive ? <SvgIcon name="chevron-right" viewbox="0 0 4.029 6.932" /> : <SvgIcon name="chevron-right" viewbox="0 0 4.029 6.932" />}
                    >
                        <Panel header="What is TravellerPass?" key="1">
                            <p>
                                TravellerPass is a mobile application that gives you access to over 3000+ venues in the UAE and Oman through unlimited 2 for 1 offers or flat discounts across categories such as Dining, Experiences, Lifestyle, Wellness and our luxury segement, Prive.
                            </p>
                        </Panel>
                        <Panel header="Is there a limit to the number of redemption ?" key="2">
                            <p>
                                95% of all our offers are unlimited, which means you get your discount as many times as you want.
                            </p>
                        </Panel>
                        <Panel header="Where can I download TravellerPass?" key="3">
                            <p>
                                You can purchase our Annual Bundle membership plan to get started right away! What's more, you get all the days as promised based on the membership you choose from the date of activation, so you can keep availing our offers without any interruption.
                            </p>
                        </Panel>
                        <Panel header="When can I start my membership with Traveller" key="4">
                            <p>
                                Once you activate your membership, start saving by following the below steps:
                            </p>
                        </Panel>
                    </Collapse>
                </div>

                <div className='mb-5'>
                    <h2>Cancellation Policy</h2>
                    <p>5% cancellation fees will be charged for all applicable bookings.</p>
                    <h3>Free Cancellation 24 hours Prior</h3>
                    <ul className='list3 mb-2 pb-2'>
                        <li>For all cancellations made 24 hours prior to the tour departure time NO charges will be applicable. </li>
                        <li>If cancellation made within 24 hours of your tour departure time 100% charges will be applicable. </li>
                        <li>If eligible for a refund your amount will be returned back to you within 7 working days.</li>
                    </ul>
                    <h3>Tour Policy (3 -12)-Global Village</h3>
                    <ul className='list3'>
                        <li>Children under 3 years will be considered as Infant and entry will be free of cost. </li>
                        <li>People aged between 3 - 65 years will be considered as an adult and charged adult rate.</li>
                    </ul>
                </div>

                <div className='mb-5'>
                    <h2>Terms & Conditions</h2>
                    <ul className='list4'>
                        <li>TravellerPass LLC maintains the http://www.travellerpass </li>
                        <li>We will not trade with or provide any services to OFAC </li>
                        <li>Cardholder must retain a copy of transaction records </li>
                        <li>The user is responsible for maintaining the confidentiality</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default KnowMore;