import React, { useState } from 'react'

import './App.css'
import people from './images/logo_people.png'
import time from './images/logo_time_bomb.png'
import percentage from './images/logo_percentage_left.png'
import virus from './images/logo_virus.png'
import worldmentalhealth from './images/world_menntal_health.png'
import mentalHeakth from './images/logo_mental_health.png'
import clickImage from './images/loogo_click_to_pledge.png'
import sunlogo from './images/sun_pharma_logo.png'
import imagePage from './images/Image Page 2.png'



function App () {
  function nextPage () {
    setButtonClicked(true)
  }

  const [buttonClicked, setButtonClicked] = useState(false)

  if (!buttonClicked) {
    return (
      <div style={{ flex: 1 }}>
        <div style={divStyle}>
          <div style={divStyle22}>
            <img src={people} style={imageStyle}/>
            {getTextForpercentage()}
          </div>

          <div style={{ ...divStyle22, marginTop: 20 }}>
            <img src={time} style={imageStyle}/>
            {getTextForTime()}
          </div>

          <div style={{ ...divStyle22, marginTop: 20 }}>
            <img src={virus} style={imageStyle}/>
            {getTextForvirus()}
          </div>

          <div style={{ ...divStyle22, marginTop: 20 }}>
            <img src={percentage} style={imageStyle}/>
            {getTextForpeople()}
          </div>
        </div>
        <div style={{ marginTop: 30 }}>
          <text style={{ ...textStyle, marginLeft: 90 }}>On the occasion of
          </text>
          <br/>

          <img src={worldmentalhealth} style={{
            'height': '100%',
            'width': '50%',
            marginTop: 5,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}/>

          <img src={mentalHeakth} style={{
            'height': '100%',
            'width': '50%',
            marginTop: 15,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}/>

          <img src={clickImage} style={{
            'height': '30%',
            'width': '30%',
            marginTop: 20,
            marginLeft: 40,
          }} onClick={nextPage}/>

          <div style={{
            'height': '100%',
            'width': '50%',
            marginTop: 25,
            marginBottom: 25,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <text>A public awareness initiative by</text>
            <img src={sunlogo} style={{
              'height': '7%',
              'width': '7%',
              marginLeft: 15,
            }}/>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        {getPledgeCount()}
        <img src={imagePage} style={{
          'height': '100%',
          'width': '50%',
          marginTop: 5,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}/>
        {getThankYouText()}

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 140
        }}>
          <text>A public awareness initiative by</text>
          <img src={sunlogo} style={{
            'height': '7%',
            'width': '7%',
            marginLeft: 15,
          }}/>
        </div>
      </div>
    )
  }
}

function getTextForTime () {
  return (
    <div style={{ marginLeft: 10 }}>
      <text style={textStyle}>Due to mental illness,</text>
      <br/>
      <text style={textStyle}>every</text>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>40
        seconds
      </text>
      <text style={textStyle}> a person suicides.</text>
    </div>)
}

function getTextForvirus () {
  return (
    <div style={{ marginLeft: 10 }}>
      <text
        style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>COVID-19
      </text>
      <text style={textStyle}> pandemic has further impact on people's mental
        health.
      </text>
    </div>)
}

function getTextForpercentage () {
  return (
    <div style={{ marginLeft: 10 }}>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}> 1 in
        4
      </text>
      <text style={textStyle}>suffers from mental illness across the
        globe today
      </text>
    </div>)
}

function getTextForpeople () {
  return (
    <div style={{ marginLeft: 10 }}>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>75%
      </text>
      <text style={textStyle}> of people with mental neurological and substance
        use disorder receive no treatment for their condition at all.
      </text>
    </div>)
}


function getPledgeCount () {
  return (
    <div style={{
      marginTop:30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <text style={{ color: '#804312', fontWeight: 'bold', fontSize: 35, fontFamily:'Orbitron' }}>0851</text><br/>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>    Pledges</text><br/>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>& counting</text>
    </div>)
}

function getThankYouText () {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
    <div>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>Thank you,
      </text>
      <text style={textStyle}> for joining us in taking the </text><br/>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>pledge</text>
      <text style={textStyle}> to have  </text><br/>
      <text style={{ color: '#008000', fontWeight: 'bold', fontSize: 25 }}>Mental Health for All</text>
    </div>
    </div>)
}
export default App

const imageStyle = {
  height: 70,
  width: 70,
}

const textStyle = {
  fontWeight: 'bold',
  fontSize: 16,
  marginRight: 10,
}

const divStyle = {
  marginTop: 70,
  marginLeft: 40,
}

const divStyle22 = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 20,
}

