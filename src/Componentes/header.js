import React from 'react';
import styled from 'styled-components'
import Menu from './menu'

const TopoDaPagina = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 10%;
  background-color: black;
`

const CardLogo = styled.div`
display:flex;
align-items: center;
margin-left: 24px;
`

const TextoDaLogo = styled.h2`
color: white;
`

const Logo = styled.img`
width: 40px;
height: 40px;
`

/*const BotaoHeader = styled.button`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: black;
`*/

class Header extends React.Component {
    render() {
        return (
            <TopoDaPagina>
                
                <CardLogo>
                    <TextoDaLogo>StarBenu</TextoDaLogo>
                    <Logo src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/estrela-fundo-transparente2.png?resize=696%2C709&ssl=1" alt="logo"></Logo>
                </CardLogo>
                
            </TopoDaPagina>

        )
    }
}

export default Header


// Não implementado: 
// <Menu></Menu>  
// <BotaoHeader>Minha Conta</BotaoHeader>