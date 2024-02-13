import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../Components/Card';

const Agents = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/agents')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => setAgents(data))
            .catch(error => console.error('There has been a problem with fetch operation', error));
        }, []);

    return (
        <Container>
          <Row>
            {agents.map((agent, index) => (
              <Col className='card-component' key={index} sm={12} md={6} lg={3}>
                <CardComponent
                  title={agent.name}
                  text={agent.rarity}
                  img_src={agent.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      );
    };

    export default Agents;