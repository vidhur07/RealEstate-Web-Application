import Pgitem from './Pgitem';
import './Pgwomen.css';

function Pgwomen() {
  return (
    <div className='womens'>
      <h1>PG for WOMEN</h1>
      <div className='womens__container'>
        <div className='womens__wrapper'>
            <ul className='womens__items'>
                <Pgitem 
                    src='/pgwomen/women1.jpeg'
                    text='Your Secure and Cozy Retreat'
                    label='4 Women Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgwomen/women2.jpeg'
                    text='A Warm and Safe Environment'
                    label='7 Women Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgwomen/women3.jpeg'
                    text='Your Safe and Serene Space'
                    label='5 Women Stay'
                    path='/'
                />
            </ul>
        <div>
            
        </div>
            <ul className='womens__items'>
                <Pgitem 
                    src='/pgwomen/women4.jpeg'
                    text='Your Peaceful Urban Refuge'
                    label='3 Women Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgwomen/women5.jpeg'
                    text=' Feel at Home'
                    label='2 Women Stay'
                    path='/'
                />
                <Pgitem 
                    src='/pgwomen/women6.jpeg'
                    text='Tranquil Living, Secure Surroundings'
                    label='3 Women Stay'
                    path='/'
                />
            </ul>
        </div>      
      </div>
    </div>
  )
}

export default Pgwomen;
