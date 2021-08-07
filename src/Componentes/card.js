import React from 'react';
import styled from 'styled-components'

const CardProduto = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr ;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  width: 200px;
  height: 240px;
  background: linear-gradient(white, lightblue);
  text-align: center;
`
const CardContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
align-items: center;
width: 100%;
height: 100%;
justify-items: center;

`
const CardImage = styled.img`
  width: 200px;
  height: 140px;
  margin-right: 10px;
`

const BotaoAdd = styled.button`
width: 200px;
`

class Card extends React.Component {
  render() {
    const produtoFiltrado = this.props.planeta
      .filter((item) => {
        if (
          item.name.toLowerCase().includes(this.props.inputValue.toLowerCase())
        ) {
          return item.id;
        }
      })
      .filter((item) => {
        if (item.value >= this.props.inputValorMinimo) {
          return item.id;
        }
      })
      .filter((item) => {
        if (item.value <= this.props.inputValorMaximo) {
          return item.id;
        }
      });
  /*
    if (this.state.ordem === "crescente") {
      produtoFiltrado.sort((a, b) => {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
      })
    } else if (this.state.ordem === "decrescente") {
      produtoFiltrado.sort((a, b) => {
        return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
      })
    }*/

    const quantidadeDeItem = (produtoFiltrado.length)

    return (
      <CardContainer>
        {produtoFiltrado.map((viagem) => {
          return (
            <CardProduto>
              <CardImage src={viagem.imageUrl} alt="foto-do-planeta" />
              <p>{viagem.name}</p>
              <p>R$ {viagem.value}</p>
              <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>)
        })}
      </CardContainer>)

  }
}

export default Card