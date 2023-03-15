import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit"><Link to="/" style={{color:'white',textdecoration:'none'}}>Login</Link></Button>
          <Button color="inherit"><Link to="/signup" style={{color:'white',textdecoration:'none'}}>signup</Link></Button>
          <Button color="inherit"><Link to="/contact" style={{color:'white',textdecoration:'none'}}>contact</Link></Button>

          
        </Toolbar>
      </AppBar>
    </Box>  
    </div>
  )
}

export default Navbar
