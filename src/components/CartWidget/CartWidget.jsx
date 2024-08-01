import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'




export default function CartWidget() {
    return(
    <div className="cart-widget">        
       <div>
            <FontAwesomeIcon icon={faCartArrowDown} className='fa-xl'/>
            <div className='cart-items-count'><span>3</span></div>
       </div>
    </div>
    )
}