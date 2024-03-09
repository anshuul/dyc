import React from 'react';
import { SvgIcon } from '../../../components/common';
import { Button } from 'antd';
import './index.scss'

const PayVanue = () => {
    return (
        <>
            <div className='applepay-section'>
                <Button className='upper-icon' data-aos="fade-up" data-aos-duration="1000">
                    <SvgIcon name='pay-vanue' viewbox='0 0 14.083 24.047' />
                </Button>
                <p className='mt-3' data-aos="fade-up" data-aos-duration="1200">
                   Get ready to make the payment at the venue
                </p>
            </div>
        </>
    )
}

export default PayVanue