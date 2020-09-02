import React, { Component } from 'react'
import Tech from '../Tech'

import './MainStyles.css'

export default class Landing extends Component {
    

    render () {
        

        return (
            <>
                <div className='header'>
                    <h1>
                        Hunt
                        <span>Web</span>
                    </h1>    
                    <div className='buttonLogin'>LOGIN</div>      
                </div>
                <div className='bodie'>
                    <h2>SAIBA MAIS SOBRE NOSSAS</h2>
                    <h3>TECNOLOGIAS</h3>
                    <div className='buttonBodie'>SAIBA MAIS</div>
                </div>
                <div className='technologys'>
                    <div className='techHeader'>
                        <h4>TECNOLOGIAS</h4>
                    </div>
                   <Tech />
                </div>
            </>
            
        )
    }
}

