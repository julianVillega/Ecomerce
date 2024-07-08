import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'




export default function CartWidget() {
    return(
    <div className="cart-widget col-1 align-self-start my-1">        
       <div>
            <FontAwesomeIcon icon={faCartArrowDown} className='fa-xl'/>
            <div className='cart-items-count'><span>3</span></div>
       </div>
    </div>
    )
}