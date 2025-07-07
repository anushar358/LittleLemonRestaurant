import './styles.css'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/specials">Specials</Link></li>
                    <li><Link to="/customerssay">Customers Say</Link></li>
                    <li><Link to="/chicago">Chicago</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;