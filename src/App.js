import React from 'react';
import styled from 'styled-components';
import Header from './Componentes/header';
import Card from './Componentes/card';
import Footer from './Componentes/footer'

const ContainerCard = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 12px 50px;
`

const ContainerMain = styled.div`
display: flex;
flex-direction: column;
padding: 0px 30px;
background-image: url('https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12121.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;

h1{color:white;}
`

const ContainerPagina = styled.div`
margin: 0px;
padding: 0px;
box-sizing: border-box;
height: 120vh;
background-color: gray;
display: flex;
flex-direction: column;
`
class App extends React.Component {
  state = {
    planetas: [
      {
        id: 1,
        name: "Mercurio",
        value: 10000.00,
        imageUrl: "https://i.pinimg.com/originals/07/5a/68/075a68a7e85ad1a60a5334c479dd20ce.jpg",
      },
      {
        id: 2,
        name: "Venus",
        value: 10000.0,
        imageUrl: "https://i.pinimg.com/originals/d0/4c/88/d04c886183aa68bde2299f3f11b59094.jpg",
      },
      {
        id: 3,
        name: "Marte",
        value: 10000.0,
        imageUrl: "https://i.pinimg.com/originals/32/fb/5d/32fb5da7a11cf27f9dec97355b4e8feb.jpg",
      },
      {
        id: 4,
        name: "Jupiter",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 5,
        name: "Saturno",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 6,
        name: "Urano",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 7,
        name: "Netuno",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 8,
        name: "Ex-Planeta Plutão",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ],

    inputValue: "",
    filtro: ""
  };

  render() {
    /*  ÁREA DE TESTE -----*/
    console.log(typeof (this.state.planetas[0]))
    
    return (
      <ContainerPagina>
        <Header />
        <ContainerMain>
          <h1>Destinos</h1>
          <h1>Pacotes</h1>
          <ContainerCard>

            <Card
              link={this.state.planetas[0].imageUrl}
              planeta={this.state.planetas[0].name}
              preco={this.state.planetas[0].value}
            />
            <Card
              link={this.state.planetas[1].imageUrl}
              planeta={this.state.planetas[1].name}
              preco={this.state.planetas[1].value}
            />
            <Card
              link={this.state.planetas[2].imageUrl}
              planeta={this.state.planetas[2].name}
              preco={this.state.planetas[2].value}
            />
            <Card
              link={this.state.planetas[3].imageUrl}
              planeta={this.state.planetas[3].name}
              preco={this.state.planetas[3].value}
            />
            <Card
              link={this.state.planetas[4].imageUrl}
              planeta={this.state.planetas[4].name}
              preco={this.state.planetas[4].value}
            />
            <Card
              link={this.state.planetas[5].imageUrl}
              planeta={this.state.planetas[5].name}
              preco={this.state.planetas[5].value}
            />
            <Card
              link={this.state.planetas[6].imageUrl}
              planeta={this.state.planetas[6].name}
              preco={this.state.planetas[6].value}
            />
            <Card
              link={this.state.planetas[7].imageUrl}
              planeta={this.state.planetas[7].name}
              preco={this.state.planetas[7].value}
            />
          </ContainerCard>
        </ContainerMain>
        <Footer />
      </ContainerPagina>
    );
  }
}

export default App;
