
import React from 'react';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./About.css"

const onHover = (props) => {
  props.target.style.color = "#39FF14"
  props.target.style.cursor = "pointer"
}

const onLeave = (props) => {
  props.target.style.color = "white"
}

const mailTo = (e) => {
  window.location.href = "mailto:afique13@gmail.com?body=Hi Afiq!"
  e.preventDefault()
}


const About = () => {
  return (
      <Grid style={{ margin: "1.5rem 0" }} container alignItems="center" justifyContent="center">
        <div className="mail-group">
          <Item className="mail">
          <EmailOutlinedIcon onClick={mailTo} onMouseEnter={onHover} onMouseLeave={onLeave} style={{ verticalAlign: "middle", marginLeft: "1vw"  }} sx={{ fontSize: 60 }}></EmailOutlinedIcon>
          <span className="message">Say Hello</span></Item>
        </div>
      </Grid>
  )
};

export default About
