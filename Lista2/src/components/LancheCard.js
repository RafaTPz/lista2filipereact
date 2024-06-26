import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'


function LancheCard(props) {
    return (
        
        <Link key={props.idx} to={"/lanches/"+ (props.idx + 1)}> 
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.imagem} />
          <Card.Body>
            <Card.Title>{props.produto}</Card.Title>
            <Card.Text>
              {props.description || "Lanche Legal"}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
        
      );
}

export default LancheCard
