import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LancheService from '../../services/LancheService'
import { Container, Row, Col } from 'react-bootstrap'
import LancheCard from '../../components/LancheCard'

function Lanches(props) {

  const [lanches, setLanches] = React.useState([])

  React.useEffect(() => {
    LancheService.getAllLanches()
      .then(allLanches => setLanches(allLanches))
  })

  return (
    <div>
      <Container>
        <Row>
          {lanches && lanches.map((lanche, idx) => (
            <Col xl={4} xs={12}>
              <LancheCard
                title={lanche.title}
                image={lanche.image}
                idx={idx}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Lanches
