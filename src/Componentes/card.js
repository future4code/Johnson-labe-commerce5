import React from 'react';
import styled from 'styled-components'

const CardProduto = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
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
        return (
                <CardProduto>
                    <CardImage src={this.props.link} alt="foto-do-planeta" />
                    <p>{this.props.planeta}</p>
                    <p>R$ {this.props.preco}</p>
                    <BotaoAdd>Adicionar ao carrinho</BotaoAdd>
                </CardProduto>
        )
    }
}

export default Card