import React from 'react';
import styled from 'styled-components';
import Header from './Componentes/header';
import Card from './Componentes/card';
import Footer from './Componentes/footer';
import Filtros from './Componentes/filtro';

const ContainerCard = styled.div`

`

const ContainerMain = styled.div`
display: flex;
flex-direction: row;
background-image: url('https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12121.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100%;
width: 100%;

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
const PaginaPrincipal = styled.div`
display: flex;
margin: 0px 15px;
flex-direction: column;
width: 100%;
`

class App extends React.Component {
  state = {
    planetas: [
      {
        id: 1,
        name: "Mercurio",
        value: 21392.00,
        imageUrl: "https://i.pinimg.com/originals/07/5a/68/075a68a7e85ad1a60a5334c479dd20ce.jpg",
      },
      {
        id: 2,
        name: "Venus",
        value: 17049.0,
        imageUrl: "https://i.pinimg.com/originals/d0/4c/88/d04c886183aa68bde2299f3f11b59094.jpg",
      },
      {
        id: 3,
        name: "Marte",
        value: 10863.0,
        imageUrl: "https://i.pinimg.com/originals/32/fb/5d/32fb5da7a11cf27f9dec97355b4e8feb.jpg",
      },
      {
        id: 4,
        name: "Jupiter",
        value: 44323.0,
        imageUrl: "https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/03/36965_F44C83AB5F977CB6.jpg",
      },
      {
        id: 5,
        name: "Saturno",
        value: 53805.0,
        imageUrl: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/02/27/saturno-e-jupiter-em-aquario-nos-convidam-a-avaliar-como-podemos-contribuir-para-asociedade-17008.jpg",
      },
      {
        id: 6,
        name: "Urano",
        value: 55341.0,
        imageUrl: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/04/planeta-urano.jpg",
      },
      {
        id: 7,
        name: "Netuno",
        value: 89462.0,
        imageUrl: "https://www.signos.com.br/wp-content/uploads/2019/10/sh9_netuno-em-cada-signo_1382167400.jpg",
      },
      {
        id: 8,
        name: "Ex-Planeta Plutão",
        value: 97645.0,
        imageUrl: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sonda-new-horizons-registrou-imagem-plutao-em-julho-2015-55a55da01dda4.jpg",
      }
    ],

    inputValue: "",
    filtro: "",
    inputValorMaximo: +Infinity,
    inputValorMinimo: -Infinity,
    
  };

  onChangeBuscaNome = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onChangeValorMin = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };

  onChangeValorMax = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };

  render() {
    /* ---- ÁREA DE TESTE -----*/
    return (
      <ContainerPagina>
        <Header />
        <ContainerMain>
            <Filtros
              listaPlanetas = {this.state.planetas}
              inputValue={this.state.inputValue}
              inputValorMinimo={this.state.inputValorMinimo}
              inputValorMaximo={this.state.inputValorMaximo}
              onChangeBuscaNome={this.onChangeBuscaNome}
              onChangeValorMin={this.onChangeValorMin}
              onChangeValorMax={this.onChangeValorMax}
              />

            <PaginaPrincipal>
              <h1>Destinos</h1>
              <h1>Pacotes</h1>

            

              <Card
                planeta={this.state.planetas}
                inputValue={this.state.inputValue}
                inputValorMaximo={this.state.inputValorMaximo}
                inputValorMinimo={this.state.inputValorMinimo} 
                id={this.state.id}
                 /* adicionaItemAoCarrinho={this.adicionaItemAoCarrinho} */ />

           
            </PaginaPrincipal>
          

        </ContainerMain>
        <Footer />
      </ContainerPagina>
    );
  }
}

export default App;
