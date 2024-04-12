import React from 'react';
import { Container } from 'react-bootstrap';
import CriaLancheForm from '../../components/CriaLancheForm';

function ManagePage() {
    return (
        <Container>
            <h2>Gerenciar Lanches</h2>
            <CriaLancheForm />
        </Container>
    );
}

export default ManagePage;
