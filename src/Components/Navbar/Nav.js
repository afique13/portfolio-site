
import React from 'react'
import reactDom from 'react-dom'
import { useState, useEffect } from 'react'
import { AppBar } from '@mui/material'
import { Typography } from '@mui/material'
import  { Toolbar } from '@mui/material'
import  { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useMediaQuery } from 'react-responsive'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export const Nav = () => {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 900px)' })

    const [state, setState] = useState({
        menu: false
    });

    const toggleDrawer = (open) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, "menu": open })
    };

    const TypographyStyle = {
        fontFamily: 'NTR',
        fontSize: '1.75rem',
        textAlign: "center",
        padding: "1vw 2.5vw",
        color: "#39FF14"
    }

    const theme = createTheme({
        typography: {
            fontFamily: "NTR"
        }
    });

    const onHover = (props) => {
        props.target.style.color = "white"
        props.target.style.cursor = "pointer"
    }

    const onLeave = (props) => {
        props.target.style.color = "#39FF14"
    }

    const list = () => {
        return (
            <Box
                sx={{ width: 'auto' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List style={{ backgroundColor: "rgb(48, 44, 44)" }}>
                    {['<home>','<education>','<skills>','<experience>','<contact>'].map((text) => (
                    <ListItem style={TypographyStyle} button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Box>
        )
    }

    return (
        <div>
            {
                isDesktopOrLaptop ? 
                <ThemeProvider theme={theme}>
                    <AppBar elevation={0} color="transparent" position="sticky">
                        <div style={{ display: "flex", margin: "0 auto" }}>
                            {['<home>','<education>','<skills>','<experience>','<contact>'].map((navPrompt) => (
                                <Typography key={navPrompt} style={TypographyStyle} variant="h6" onMouseEnter={onHover} onMouseLeave={onLeave}>
                                    {navPrompt}
                                </Typography>
                            ))}
                        </div>
                    </AppBar>
                </ThemeProvider> : 
                <ThemeProvider theme={theme}>
                    <AppBar elevation={0} color="transparent" position="sticky">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                style={{ color: "#39FF14" }}
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="top"
                                open={state["menu"]}
                                onClose={toggleDrawer(false)}
                                BackdropProps={{ invisible: true }}
                            >
                                {list()}
                            </Drawer>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            }
        </div>
    )
}

export default Nav
