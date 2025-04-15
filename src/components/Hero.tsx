import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        px: 4, // padding lateral opcional
        maxWidth: '100%',
        backgroundColor: '#bcc7d3',
        py: 10,
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Boost Your LinkedIn Profile with AI
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Our AI enhances your profile to stand out to recruiters and increase your job opportunities.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/contact"
        >
          Get Your Upgrade Now
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
