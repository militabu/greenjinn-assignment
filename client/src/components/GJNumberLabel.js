import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import GJNumbersView from './GJNumbersView'

export default function GJNumberLabel() {

    const [buttonPairs, setButtonPairs] = useState([])
    const [clickedButtonPair, setClickedButtonPair] = useState('')

    useEffect(() => {
        const fetchButtons = async () => {
            try {
                const res = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/');
                const resData = await res.json();
                setButtonPairs(resData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchButtons();
    }, [])

    const clickedPair = (pairName) => {
        const pairInfo = async (id) => {
            try {
                const res = await fetch(`https://www.bitstamp.net/api/v2/ticker/`)
                const resData = await res.json()

                for (let i = 0; i < resData.length; i++) {
                    if (resData[i].pair === id) {
                        setClickedButtonPair(resData[i].last)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

        pairInfo(pairName)
    }

    return (
        <div className='trading-pairs-container'>
            <section className='area1'>
                <p className='buttons'>
                    {buttonPairs.map(pair => (
                        <Button key={pair.name} buttonText={pair.name} buttonClick={() => clickedPair(pair.name)} />
                    ))}
                </p>
            </section>
            <section className='area2'>
                <GJNumbersView text={clickedButtonPair} desc='trading value' />
            </section>
        </div>
    )
}
