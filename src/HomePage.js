import './styles.css'
import restaurant from './restauranfood.jpg'
import salad from './greek salad.jpg'
import brushetta from './bruchetta.svg'
function HomePage() {
    return (
        <>
            <main className='hero-section' aria-label='Hero section about the restaurant'>
                <section>
                    <header>
                        <h1 style={{ color: 'yellow' }}>Little Lemon </h1>
                        <h2 style={{ color: 'white' }}>Chicago</h2>
                    </header>
                    <p style={{ color: 'white' }} aria-label='Restaurant description'>We are mediterranean restaurant with home style cooked meals.We focus on traditional receipes served with modern twist.</p>
                </section>
                <figure>
                    <img src={restaurant} alt="Little Lemon Restaurant" className="image" />
                    <figcaption className="sr-only">Interior view of the Little Lemon Restaurant</figcaption>
                </figure>
            </main>
            <article aria-label='Delivery Menu'>
                <header>
                    <h3>ORDER FOR DELIVERY!!</h3>
                </header>
                <section aria-labelledby='menu-nav'>
                    <nav id='menu-nav' aria-label='Menu Categories'>
                        <ul>
                            <li><a href="/lunch">Lunch</a></li>
                            <li><a href="/starters">Starters</a></li>
                            <li><a href="/mains">Mains</a></li>
                            <li><a href="/desserts">Desserts</a></li>
                            <li><a href="/salad">Salads</a></li>
                        </ul>
                    </nav>
                </section>
                <section className="menu-item">
                    <article className="menu-description">
                        <h3>Greek Salad</h3>
                        <p>The famous salad of crispy lettuce,peppers and olives.$12.99</p>
                    </article>
                    <img src={salad} alt="Greek Salad" className='menu-image' />
                    <article className="menu-description">
                        <h3>Brushetta</h3>
                        <p>Our Brushetta is made from grilled bread smeared with garlic.$7.99</p>
                    </article>
                    <img src={brushetta} alt="Brushetta" className='menu-image' />
                </section>
            </article>
        </>
    )
}
export default HomePage;