import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          LinkedBoost.AI
        </Typography>
        <Box>
          <Button component={Link} to="/" color="primary">Inicio</Button>
          <Button component={Link} to="/" color="primary">Home</Button>
          <Button component={Link} to="/contact" color="primary">Contact</Button>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
