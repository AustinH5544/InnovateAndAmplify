const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Thanks for reaching out! I’ll get back to you soon.')
        e.currentTarget.reset()
    }

    return (
        <section className="contact">
            <div className="section-header">
                <div className="section-badge">Get in touch</div>
                <h2 className="section-title">Tell me about your project</h2>
                <p className="section-description">
                    Share a little about what you&apos;re looking for, and I&apos;ll follow up to schedule a call.
                </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Project details</label>
                    <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="submit-button">
                    Send message
                </button>
            </form>
        </section>
    )
}

export default Contact
