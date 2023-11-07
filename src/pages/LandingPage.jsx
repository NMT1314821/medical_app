import React from 'react'
import Header from '../components/Header'
import CardComponent from '../components/CardComponent'

import cough from '../assets/cough.jpeg'
import migraine from '../assets/migraine.jpeg'
import skinProblems from '../assets/skin-problems.jpeg'
import stomachIssues from '../assets/stomach-pain.jpeg'

import '../App.css'
import { Button } from '@mui/material';

function LandingPage() {
  const contents = [
    {
      id: 1,
      problem: "Skin Problems",
      price: "399",
      img: skinProblems
    },
    {
      id: 2,
      problem: "Cough & Cold",
      price: "199",
      img: cough
    },
    {
      id: 3,
      problem: "Migraine",
      price: "499",
      img: migraine
    },
    {
      id: 4,
      problem: "Stomach issues",
      price: "199",
      img: stomachIssues
    }
  ];
  return (
    <>
      <Header />
      <div className='hero-equal-right hero-area'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="text-left home-content z-index position-relative">
                <h1>Making Health Care Better Together</h1>
                <p>We've always had one focus in mind: Provide high-quality products, doctor-formulated, clinically proven and condition-specific, that are not only good for you but deliver real results to help you reach your health and vitality goals.</p>
                <Button style={{ backgroundColor: "#c9a2ff", color: "#fff" }} className="button js-scroll m-2">Book An Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {content.map(createEntry)}
      </div> */}
      <div style={{ margin: "100px 200px 0px 200px" }}>
        <h2>Common Health Concerns</h2>
        <span>Consult a doctor online for any health issue</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "15px 200px" }}>
        {contents.map(content => 
          <div style={{marginRight: "20px"}} key={content.id}>
            <CardComponent problem={content.problem} price={content.price} img={content.img} />
          </div>
        )}
      </div>
    </>

  )
}

export default LandingPage