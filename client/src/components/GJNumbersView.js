import React from 'react'

export default function GJNumbersView({ text, desc }) {
    return (
        <div className='number-view'>
            <h1 className='number-text'>{text}</h1>
            <h4 className='number-desc'>{desc}</h4>
        </div>
    )
}