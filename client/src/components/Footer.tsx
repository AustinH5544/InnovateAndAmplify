const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Innovate And Amplify</h4>
                    <p>
                        Portfolio for freelance web development, web apps, and AI solutions.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: (add later)</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Innovate And Amplify. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
