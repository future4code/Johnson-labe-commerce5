import React from 'react';
import styled from 'styled-components';

const BottomDaPagina = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
  background-color: black;
  h1{color: white;}
`

class Footer extends React.Component {
    render() {
        return (
            <BottomDaPagina>
                <h1>Contato @ Labenu</h1>
            </BottomDaPagina>
        )
    }
}

export default Footer 