import { useState } from 'react'

function Contact() {
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submittedMessage, setSubmittedMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedMessage(`Message for ${contactName} from ${email}: "${message}"`)
    setContactName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact</h1>
      <p>Fill out the form below to send a message:</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Who do you want to contact?"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #fff", backgroundColor: "#1a1a1a", color: "#fff" }}
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #fff", backgroundColor: "#1a1a1a", color: "#fff" }}
        />

        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          style={{ padding: "0.5rem", borderRadius: "8px", border: "1px solid #fff", backgroundColor: "#1a1a1a", color: "#fff" }}
        />

        <button type="submit" style={{ padding: "0.6rem", borderRadius: "8px", border: "1px solid transparent", backgroundColor: "#ff64b7", color: "#fff", cursor: "pointer" }}>
          Send Message
        </button>
      </form>

      {submittedMessage && (
        <div style={{ marginTop: "2rem", color: "#00bfff" }}>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Contact
