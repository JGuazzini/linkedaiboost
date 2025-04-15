import { Box, Typography, Container, Paper } from '@mui/material'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SearchIcon from '@mui/icons-material/Search'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

const features = [
  {
    title: 'AI Summary Optimization',
    text: 'We write a professional and engaging LinkedIn summary using AI.',
    icon: <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Strategic Keywords',
    text: 'We enhance your visibility in recruiter searches.',
    icon: <SearchIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    title: 'Experience Restructuring',
    text: 'We rewrite your roles and achievements to showcase your best.',
    icon: <WorkOutlineIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
]

const Features = () => {
  return (
    <Box id="features" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          What We Do for You
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
          mt={4}
        >
          {features.map((feature, index) => (
            <Paper
              key={index}


              elevation={3}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%' },
                p: 4,
                textAlign: 'center',
                flexShrink: 0,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.03)',
                  boxShadow: 6, // o puedes usar '0 8px 20px rgba(0,0,0,0.15)' si quieres algo personalizado
                },
              }}
            >
              <Box mb={2}>{feature.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">{feature.text}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Features
