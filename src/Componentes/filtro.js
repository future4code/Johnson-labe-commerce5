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

const CheckBox = styled.div`
display: flex;
gap: 2px;
`

export default class Filtro extends React.Component {
      state = {
          isChecked: [false,false],
          ordens: [{nome: "Crescente"},{ nome:"Decrescente"}]
          
      }

    handleOnChange = (position) => {
        const updateCheckedState = this.state.isChecked.map((item,index) => {
            return index === position ? !item : item
        })
        
        updateCheckedState.map((item, index) => {
            if (item) {
                this.props.changeOrdem(this.state.ordens[index].nome)
            }
        })
        return  this.setState({isChecked: updateCheckedState})
    };

    
    render() {
      
        const ordensVar = [...this.state.ordens]
        return (

            <CorpoFiltros>
                <h1>Filtros</h1><br/>

                <label>Valor Mínimo</label>
                <input
                    type="number"
                    value={this.props.inputValorMinimo}
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
                <br />
                <label>Buscar Produto</label>
                <input
                    placeholder="Insira o nome do produto "
                    type="text"
                    value={this.props.inputValue}
                    onChange={this.props.onChangeBuscaNome}
                />
                <p>Ordem:</p>
                {ordensVar.map((item, index) => {
                    return (
                        <CheckBox>
                        <input
                            type="checkbox"
                            id = {`custom-cb-${index}`}
                            name = {item}
                            value = {item}
                            checked = {this.state.isChecked[index]}
                            onChange = {() => this.handleOnChange(index)}
                        />
                        <label htmlFor={`custom-cb-${index}`}>{item.nome}</label>
                        </CheckBox>
                    )
                })
                }
                {/*<label>
                    <input
                        type="checkbox"
                        value="crescente"
                        id="0"
                        checked={this.state.isChecked}
                        onChange={this.handleOnChange}
                    /> <span>Crescente</span>
                    <input
                        type="checkbox"
                        value="decrescente"
                        id="1"
                        checked={this.state.isChecked}
                        onChange={this.handleOnChange}
                    /> <span>Decrescente</span>
                    <br/>Above box is {this.state.isChecked? "checked" : "unchecked"}
                </label>*/}

            </CorpoFiltros>
        )
    }
}