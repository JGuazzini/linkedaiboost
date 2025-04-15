import { Box, Typography, Container } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: 4, borderTop: '1px solid #e0e0e0', mt: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} LinkedBoost.AI – All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
