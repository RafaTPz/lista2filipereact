import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../utils/axios'
import LancheService from '../../../services/LancheService'

import { Image, Container, Table, Row, Col } from 'react-bootstrap'

function Lanche(props) {
  const params = useParams()
  const [lanche, setLanche] = React.useState(null)

  React.useEffect(() => {
    LancheService.getLancheById(params.id)
      .then(lancheById => setLanche(lancheById))
  }, [])

  return (
    <div>
      {lanche && <Container>
        <Row>
          <Col md={6} xs={12}>
            <Image height={"300px"} src={lanche.image} roundedCircle />
          </Col>
          <Col md={6} xs={12}>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Caracteristica</th>
                  <th>Valores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>{lanche.title}</td>
                </tr>
                <tr>
                  <td>Bonus</td>
                  <td>{lanche.bonus}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>}
    </div>
  )
}

export default Lanche
