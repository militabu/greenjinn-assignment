import React, { useEffect, useState } from 'react';
import GJNumbersView from './GJNumbersView';

export default function AverageTV() {

    const [tv1, setTv1] = useState('');
    const [tv2, setTv2] = useState('');
    const [atv, setAtv] = useState('');

    useEffect(() => {

        const fetchTickerValue = async () => {
            try {
                const res = await fetch('/ticker1');
                const resData = await res.json();
                setTv1(resData.last);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchTickerValue2 = async () => {
            try {
                const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
                const resData = await res.json();
                setTv2(resData.data.rates.USD);

            } catch (error) {
                console.log(error);
            }
        }

        //the 3 API gave me an undefined for res.data

        /*
        const fetchTickerValue3 = async () => {
            try {
                const res = await fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD', {
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                });
                
                console.log('this is res for 3', res)
                const resData = await res.data
                console.log('this is 3', resData)
                
            } catch (error) {
                console.log(error)
            }
        }
        */

        const averageTickerValue = () => {
            const average = (Number(tv1) + Number(tv2)) / 2
            setAtv(average.toFixed(2))
        }

        fetchTickerValue();
        fetchTickerValue2();
        // fetchTickerValue3();
        averageTickerValue()

    }, [tv1, tv2])


    return (
        <div className='atv'>
            <GJNumbersView text={atv} desc='average BTC value' />
        </div>
    )
}
