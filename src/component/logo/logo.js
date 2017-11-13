import React from 'react';
import './logo.css'
import logoImg from './logo.jpg'


class Logo extends React.Component{
    render() {
        return(
            <div className='logoName'>
                <img src={logoImg} />
            </div>
        )
    }
}

export default Logo;