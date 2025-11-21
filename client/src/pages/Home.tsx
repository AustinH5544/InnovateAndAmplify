import FloatingLines from '../components/reactbits/FloatingLines'

const Home: React.FC = () => {
    return (
        <section className="hero hero-with-bg">
            <div className="hero-bg">
                <FloatingLines
                    linesGradient={['#4f46e5', '#22d3ee', '#a855f7']}
                    animationSpeed={1.0}
                    interactive={true}
                    parallax={true}
                />
            </div>

            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">🚀 Freelance Web & AI Development</div>
                    <h1>Innovative websites and apps for growing businesses.</h1>
                    <p>
                        I build modern sites, web apps, and AI-backed tools that help businesses look
                        professional, automate work, and convert more customers.
                    </p>
                    <div className="hero-buttons">
                        <a href="/contact" className="primary-button">
                            Let&apos;s work together
                        </a>
                        <a href="/services" className="secondary-button">
                            View services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
