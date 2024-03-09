import React from 'react';
import { SvgIcon } from '../../../components/common';
import { Button } from 'antd';
import './index.scss'

const ApplePay = () => {
    return (
        <>
            <div className='applepay-section'>
                <Button className='upper-icon' data-aos="fade-up" data-aos-duration="1000">
                    <SvgIcon name='apple-pay' viewbox='0 0 38.937 16.118' />
                </Button>
                <p className='mt-3' data-aos="fade-up" data-aos-duration="1200">
                   Click on pay and follow the steps on your device to checkout with Apple Pay
                </p>
            </div>
        </>
    )
}

export default ApplePay