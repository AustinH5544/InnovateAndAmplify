// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import PillNav from './components/reactbits/PillNav'
import logo from './assets/logo.png' // or your actual logo

function App() {
    const location = useLocation()

    return (
        <div className="app-root">
            <PillNav
                logo={logo}
                logoAlt="Innovate And Amplify"
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Portfolio', href: '/portfolio' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' }
                ]}
                activeHref={location.pathname}
                ease="power2.easeOut"
                baseColor="rgba(255,255,255, .8)" // translucent dark
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#000000"
            />

            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
