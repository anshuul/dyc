import React from 'react';
import { SvgIcon } from '../../../components/common';
import { Button } from 'antd';
import './index.scss'

const GooglePay = () => {
    return (
        <>
            <div className='applepay-section'>
                <Button className='upper-icon' data-aos="fade-up" data-aos-duration="1000">
                    <SvgIcon name='gpay' viewbox='0 0 71.72 28.49' />
                </Button>
                <p className='mt-3' data-aos="fade-up" data-aos-duration="1200">
                   Click on pay and follow the steps on your device to checkout with Google Pay
                </p>
            </div>
        </>
    )
}

export default GooglePay