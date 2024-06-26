import React from 'react';
import '../Family.css';
import Plateitem from '../Plateitem';

function Rent(){
    return(
        <div className='plates'>
        <h1>Exclusively designed for large and joint Families.</h1>
        <div className='plates__container'>
            <div className='plates__wrapper'>
                <ul className='plates__items'> 
                   <Plateitem 
                   src="rent/rent1.jpeg"
                   text="Contemporary Designs, Modern Comfort"
                   label='4BHK'
                   path='/family'
                   /> 
                    <Plateitem 
                   src="rent/rent2.jpeg"
                   text="Prestigious Residence"
                   label='4BHK'
                   path='/family'
                   /> 
                   <Plateitem 
                   src="rent/rent3.jpeg"
                   text="Indulge in Supreme Quality Living"
                   label='4BHK'
                   path='/family'
                   /> 
                </ul>
                <ul className='plates__items'>                
                    <Plateitem 
                   src="rent/rent4.jpeg"
                   text="A Haven of Comfort"  
                   label='5BHK'
                   path='/family'
                   /> 
                    <Plateitem 
                   src="rent/rent5.jpeg"
                   text="A Harbor of High-End Living"  
                   label='5BHK'
                   path='/family'
                   /> 
                    <Plateitem 
                   src="rent/rent6.jpeg"
                   text="Experience the Epitome of Refined Living"  
                   label='3BHK'
                   path='/family'
                   /> 
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Rent 