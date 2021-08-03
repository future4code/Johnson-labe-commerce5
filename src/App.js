import React from 'react';
import styled from 'styled-components';
import Header from './Componentes/header';
import Card from './Componentes/card';

const ContainerCard = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 12px;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Destinos</h1>
        <h1>Pacotes</h1>
        <ContainerCard>
          <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
          <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
          <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
          <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
           <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
           <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
           <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
           <Card
          link="https://sm.ign.com/ign_br/screenshot/default/death-star-i-copy-36ad2500_j4nb.jpg"
          planeta="Planeta 1"
          preco="2000,00"
          />
          </ContainerCard>
      </div>    
    );
  } 
}

export default App;
