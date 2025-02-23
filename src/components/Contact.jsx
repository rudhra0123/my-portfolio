import React from 'react'
import { Container } from "react-bootstrap";
import Particle from './Particle';
import ContactForm from './Contact/Contact';
import Social from './Contact/Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact