import Carditem from './Carditem';
import './Cards.css';


function Cards() {
    return (
     <div className='cards'>
        <h1>Check out these EPIC Houses in Market</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'> 
                   <Carditem 
                   src="images/house1.jpeg"
                   text="Discover the Allure of Bespoke Residential Bliss"
                   label='4BHK'
                   path='/'
                   /> 
                    <Carditem 
                   src="images/house5.jpeg"
                   text="Prestigious Residence"
                   label='3BHK'
                   path='/'
                   /> 
                   <Carditem 
                   src="images/house4.jpeg"
                   text="Indulge in Supreme Quality Living"
                   label='3BHK'
                   path='/'
                   /> 
                </ul>
                <div>
                 
                </div>
                <ul className='cards__items'>                
                    <Carditem 
                   src="images/house2.jpeg"
                   text="Savor the Finest in Contemporary Living"  
                   label='3BHK'
                   path='/'
                   /> 
                    <Carditem 
                   src="images/house6.jpeg"
                   text="Redefine Your Home with Exceptional Comfort"  
                   label='2BHK'
                   path='/'
                   /> 
                    <Carditem 
                   src="images/house7.jpeg"
                   text="Experience the Epitome of Refined Living"  
                   label='2BHK'
                   path='/'
                   /> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
