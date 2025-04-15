import { Box, Container, TextField, Button, Typography, Paper } from '@mui/material'
import { useRef } from 'react'

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('This is where the form submission logic would go.')
  }

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#f5f7fa' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="name"
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Your Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="How can we help you?"
              name="message"
              multiline
              rows={4}
              fullWidth
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  )
}

export default ContactForm
