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
  }, [params.id])

  return (
    <div>
      {lanche && <Container>
        <Row>
          <Col md={6} xs={12}>
            <Image height={"300px"} src={lanche.imagem} roundedCircle />
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
                  <td>Produto</td>
                  <td>{lanche.produto}</td>
                </tr>
                <tr>
                  <td>Preço</td>
                  <td>{lanche.preco}</td>
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
