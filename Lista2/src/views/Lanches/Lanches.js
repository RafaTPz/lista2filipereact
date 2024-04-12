import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import LancheService from '../../services/LancheService';
import LancheCard from '../../components/LancheCard';

function Lanches(props) {
  const [lanches, setLanches] = useState([]);

  useEffect(() => {
    const fetchLanches = async () => {
      try {
        const allLanches = await LancheService.getAllLanches();
        setLanches(allLanches);
      } catch (error) {
        console.error('Erro ao buscar lanches:', error);
      }
    };

    fetchLanches();
  }, []); 
  return (
    <div>
      <Container>
        <Row>
          {lanches.map((lanche, idx) => (
            <Col xl={4} xs={12} key={idx}>
              <LancheCard
                produto={lanche.produto} 
                imagem={lanche.imagem} 
                idx={idx}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Lanches;
