import React from 'react';
import styled from 'styled-components';


const CorpoFiltros = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
width: 15vw;
height: 100%;
padding-left: 10px;
padding-right: 10px;
background-color: #001020;
color: #ddeeff;
padding: 1vw;
gap: 10px;

h1{
    text-align: center
    }
label{
    display: block;
}
`

export class Filtros extends React.Component {
    render() {
        return (

            <CorpoFiltros>
                <h1>Filtros</h1><br /><br />

                <label>Valor Mínimo</label>
                <input 
                    type="number"
                    value={this.props.inputValorMinimo}
                    type="number"
                    onChange={this.props.onChangeValorMin} 
                    placeholder="R$"
                />
                <label>Valor Máximo</label>
                <input   
                    value={this.props.inputValorMaximo}
                    type="number"
                    onChange={this.props.onChangeValorMax} 
                    placeholder="R$"
                />
                <br/>
                <label>Buscar Produto</label>
                <input 
                    placeholder="Insira o nome do produto " 
                    type="text" 
                    value={this.props.inputValue}
                    onChange={this.props.onChangeBuscaNome} 
                />


            </CorpoFiltros>
        )
    }
}

export default Filtros;