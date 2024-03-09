import { Switch } from 'antd';
import React from 'react';
import { Slider } from 'antd';
import { Row, Col } from '../../components/common';
import './index.scss'

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

const NotificationSettingTab = () => {
    return (
        <div className='right-tab-inner'>
            <h1 className='tab-heading' data-aos='fade-in' data-aos-duration="800">Notification Setting</h1>
            <div className='tab-content notificationsetting-tab' data-aos='fade-in' data-aos-duration="800">
                <div className='notificationsetting-row'>
                    <div className='left-col'>
                        <h3>Push Notifications</h3>
                        <p>
                            Get alerts on top offers of the week and much more. Deactivating this will block all app notifications
                        </p>
                    </div>
                    <div className='right-col'>
                        <Switch />
                    </div>
                </div>
                <div className='notificationsetting-row'>
                    <div className='left-col'>
                        <h3>Nearby Deal Alerts</h3>
                        <p>
                            Get notified when you pass by a venue with an offer on the app and never miss-out!
                        </p>
                    </div>
                    <div className='right-col'>
                        <Switch />
                    </div>
                </div>
                <div className='deals-limit'>
                    <h3>Daily Deals Limit</h3>
                    <p>
                        Limit the number of nearby deal alerts you receive in a day.
                    </p>
                    <Row>
                        <Col sm='11'>
                            <Slider marks={marks} defaultValue={10} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default NotificationSettingTab;