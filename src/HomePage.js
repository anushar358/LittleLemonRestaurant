import './styles.css'
import restaurant from './restauranfood.jpg'
import salad from'./greek salad.jpg'
import brushetta from './bruchetta.svg'
function HomePage() {
    return (
        <>
            <main className='hero-section'>
                <div>
                    <h1 style={{ color: 'yellow' }}>Little Lemon </h1>
                    <h2 style={{ color: 'white' }}>Chicago</h2>
                    <p style={{ color: 'white' }}>We are mediterranean restaurant with home style cooked meals.We focus on traditional receipes served with modern twist.</p>
                </div>
                <img src={restaurant} alt="Little Lemon Restaurant" className="image" />
            </main>
            <article >ORDER FOR DELIVERY!!
                <section>
                    <nav>
                        <ul>
                            <li><a href="/lunch">Lunch</a></li>
                            <li><a href="/starters">Starters</a></li>
                            <li><a href="/mains">Mains</a></li>
                            <li><a href="/desserts">Desserts</a></li>
                            <li><a href="/salad">Salads</a></li>
                        </ul>
                    </nav>
                </section>
                <div className="menu-item">
                        <div className="menu-description">
                        <h3>Greek Salad</h3>
                        <p>The famous salad of crispy lettuce,peppers and olives.$12.99</p>
                    </div>
                    <img src={salad} alt="Greek Salad" className='menu-image' />
                    <div className="menu-description">
                        <h3>Brushetta</h3>
                        <p>Our Brushetta is made from grilled bread smeared with garlic.$7.99</p>
                    </div>
                    <img src={brushetta} alt="Brushetta" className='menu-image' />
                </div>
            </article>
        </>
    )
}
export default HomePage;