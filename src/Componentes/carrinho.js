import React from 'react';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
border: 1px solid black;
width: 15vw;
height: 100%;
background-color: #001020;
color: #ddeeff;
padding-left: 10px;
padding-right: 10px;
padding: 1vw;
gap: 10px;
`

const InformacaoCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    align-items: center;
`

const BotaoRemover = styled.button`
    padding: 5px;
`

class Carrinho extends React.Component {

    changeTotalValue = () => {
        let valorTotal = 0
        for (let prod of this.props.arrayCarrinho) {
            valorTotal += prod.value * prod.quantidade
        }
        return valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    render() {

        return (

            <CarrinhoContainer>
                <h2>Carrinho:</h2>
                {this.props.arrayCarrinho.filter(function (a) {
                    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                }, Object.create(null)).map((prodCarrinho) => {
                    return (
                        <InformacaoCarrinho key={prodCarrinho.name}>
                            <p>{prodCarrinho.quantidade}x</p> 
                            <p>{prodCarrinho.name}</p>
                            <BotaoRemover onClick={() => this.props.removePlanetaDoCarrinho(prodCarrinho)}>Remover</BotaoRemover>
                        </InformacaoCarrinho>
                    )
                })
                }
                <p><strong>Valor total:</strong> {this.changeTotalValue()}</p>
            </CarrinhoContainer>
        )
    }
}

export default Carrinho