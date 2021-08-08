import React from 'react';
import styled from 'styled-components'


const CardProduto = styled.div`
  display: flex;
  width: 220px;
  margin: 5px auto;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
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
  width: 220px;
  height: 140px;
`

const BotaoAdd = styled.button`
box-shadow: 3px 3px 3px 3px  lightgrey;
            border: none;
            width: 80%;
            padding: 10px;
            margin: 10px 0;
            font-size: 10pt;
            border-radius: 5px;
            background: gray;
            font-weight: 600;
            line-height: 20px;
            cursor: pointer;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
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

    if (this.props.ordem === "Crescente") {
      produtoFiltrado.sort((a, b) => {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
      })
    } else if (this.props.ordem === "Decrescente") {
      produtoFiltrado.sort((a, b) => {
        return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
      })
    }

    const quantidadeDeItem = (produtoFiltrado.length)
    /*Mostrar quantidade de item não foi implementado por error de chamar infinitamente o props*/

    return (

      <CardContainer>
        {produtoFiltrado.map((viagem) => {
          return (
            <CardProduto>
              <CardImage src={viagem.imageUrl} alt="foto-do-planeta" />
              <p>{viagem.name}</p>
              <p>R$ {viagem.value}</p>
              <BotaoAdd onClick={() => this.props.addPlanetaAoCarrinho(viagem)}>Adicionar ao carrinho</BotaoAdd>
            </CardProduto>)

        })}
      </CardContainer>)

  }
}

export default Card