
import React from 'react'
import reactDom from 'react-dom'
import './navbar.css'
import { AppBar } from '@mui/material'
import { Typography } from '@mui/material'

export const Nav = () => {

    const TypographyStyle = {
        fontFamily: 'AnonymousPro',
        textAlign: "center",
        padding: "1vw 2vw"
    }

    const onHover = (props) => {
        props.target.style.color = "white"
        props.target.style.cursor = "pointer"
    }

    const onLeave = (props) => {
        props.target.style.color = "green"
    }

    return (
        <div>
            <AppBar color="transparent" position="sticky">
                <div style={{ display: "flex", margin: "0 auto" }}>
                    <Typography variant="h6" color="green" style={TypographyStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                        &lt;Home&gt;
                    </Typography>
                    <Typography variant="h6" color="green" style={TypographyStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                        &lt;Education&gt;
                    </Typography>
                    <Typography variant="h6" color="green" style={TypographyStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                        &lt;Skills&gt;
                    </Typography>
                    <Typography variant="h6" color="green" style={TypographyStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                        &lt;Experience&gt;
                    </Typography>
                    <Typography variant="h6" color="green" style={TypographyStyle} onMouseEnter={onHover} onMouseLeave={onLeave}>
                        &lt;Contact&gt;
                    </Typography>
                </div>
            </AppBar> 
        </div>
    )
}

export default Nav
