import styled from "styled-components";

export const Container = styled.div`
  background-color: #0d080f;
  color: white;
  width: 500px;
  padding: 20px;

  border-radius: 8px;
  text-align: center;

  h1 {
    text-align: center;
    padding: 20px;
  }
`;

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  width: fit-content;
`;

export const Button = styled.button`
  font-size: 16px;
  margin: auto;
  padding: 1em 2.5em 1em 2.5em;
  background: #fff;
  box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffffffb9;
    transition: all 0.3s 0.08s linear;
  }
`;

export const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
`;

export const Table = styled.table`
  width: 100%; /* Define a largura da tabela */
  border-collapse: collapse; /* Recolhe as bordas das células */
  margin-bottom: 20px; /* Adiciona um espaço abaixo da tabela */

  th,
  td {
    padding: 10px; /* Espaçamento interno das células */
    text-align: center; /* Alinha o texto à esquerda */
    border: 1px solid #ddd; /* Adiciona uma borda fina às células */
    background-color: white;
    color: black;
  }

  thead th {
    background-color: #04aa6d; /* Cor de fundo do cabeçalho */
    color: white; /* Cor do texto do cabeçalho */
    text-transform: uppercase;
  }

  tfoot {
    border-top: solid 2px #041d14a8;
  }
  tfoot td {
    
    background-color: #ddd;
    padding: 10px; /* Espaçamento interno das células */
    text-align: center; /* Alinha o texto à esquerda */
    border: 1px solid #ddd; /* Adiciona uma borda fina às células */
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
