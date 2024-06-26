import Pgitem from './Pgitem';
import './Pgmen.css';

function Pgmen() {
  return (
    <div className='mens'>
      <h1>PG for MEN</h1>
      <div className='mens__container'>
        <div className='mens__wrapper'>
            <ul className='mens__items'>
                <Pgitem 
                    src='/pgmen/men1.jpeg'
                    text='Convenience at Your Doorstep'
                    label='2 Men Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgmen/men2.jpeg'
                    text='Your Sanctuary in the City'
                    label='4 Men Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgmen/men3.jpeg'
                    text='Find Your Perfect Space'
                    label='7 Men Stay'
                    path='/'
                />
            </ul>
        <div>
            
        </div>
            <ul className='mens__items'>
                <Pgitem 
                    src='/pgmen/men4.jpeg'
                    text='Tailored for Your Comfort'
                    label='4 Men Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgmen/men5.jpeg'
                    text='Your Home Away from Home'
                    label='3 Men Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgmen/men6.jpeg'
                    text='Comfort and Convenience Combined'
                    label='4 Men Stay'
                    path='/'
                />
            </ul>
        </div>      
      </div>
    </div>
  )
}

export default Pgmen;
