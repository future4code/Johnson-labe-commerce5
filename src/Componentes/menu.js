import React from 'react';
import styled from 'styled-components'


const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

class Menu extends React.Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("Menu")}>
            Menu
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA onClick={() => this.handleClick("Destinos")}>Destinos</SubA>
            <SubA onClick={() => this.handleClick("Pacotes")}>Pacotes</SubA>
            <SubA onClick={() => this.handleClick("Carrinho")}>Carrinho</SubA>
          </DropDownContent>
        </DropDownLi>
    );
  };
}

export default Menu;