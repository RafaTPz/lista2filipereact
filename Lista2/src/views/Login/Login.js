import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

function Login(props) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


export default Login
