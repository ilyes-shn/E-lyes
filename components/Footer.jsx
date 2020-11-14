import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <p>Copyright © Elyes 2020</p>
            </div>
        <style jsx>{`
        .footer {
            background: black;
            color: white;
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `}
        </style>
        </div>
    )
}

export default Footer
