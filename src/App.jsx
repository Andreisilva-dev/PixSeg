import { v4 as uuid } from "uuid";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import {
  Container,
  Input,
  BoxInputs,
  Button,
  Ul,
  Table,
} from "./componentsStyles";

import { useState } from "react";
function App() {
  const [total, setTotal] = useState("");
  const [diferenca, setDiferenca] = useState("");
  const [calculo, setCalculo] = useState("");
  const [tabela, setTabela] = useState([]);

  // banco de dados

  const valorTotal = (e) => {
    let v = parseFloat(e.target.value);
    setTotal(v);
  };

  const valorDifenca = (e) => {
    let d = parseFloat(e.target.value);
    setDiferenca(d);
  };

  const resultado = () => {
    const res = diferenca - total + total; //total - diferenca;
    setCalculo(res);

    setTabela([{ id: 1, trasacao: calculo }]);

    const tab = [...tabela, { id: uuid(), trasacao: res }];
    setTabela(tab);
  };

  const limpar = () => {
    setTotal("");
    setDiferenca("");
  };

  const formataMoeda = (moeda) => {
    return moeda.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const somardor = () => {
    // Resumindo: um return é da função somardor, o outro é da função de callback do reduce.
    return tabela.reduce((acumulador, item) => {
      return acumulador + item.trasacao;
    }, 0);
  };

  // para gerar PDF

  const options = {
    method: "open",
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.SMALL,
      format: "A4",
      orientation: "portrait",
    },
  };
  const getTargetElement = () => document.getElementById("content-id");

  return (
    <>
      <Container>
        <h1>PixSeg</h1>

        <BoxInputs>
          <Input
            type="number"
            onChange={valorTotal}
            placeholder="digite o valor total"
            value={total}
          />

          <Input
            type="number"
            onChange={valorDifenca}
            placeholder="digite a diferença"
            value={diferenca}
          />

          <div>
            <Button onClick={resultado}>Calcular</Button>
            <Button onClick={limpar}>Limpar</Button>
          </div>
        </BoxInputs>
        {/* <Ul>
          {tabela.map((item) => (
            <li key={item.key}>{formataMoeda(item.trasacao)}</li>
          ))}
        </Ul> */}
      </Container>

      {tabela.length > 0 ? (
        <div>
        <div id="content-id">
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>valor</th>
              </tr>
            </thead>
            <tbody>
              {tabela.map((item) => (
                <tr>
                  <td>{item.id.slice(0, 5)}</td>
                  <td>{formataMoeda(item.trasacao)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <td>Total</td>
              <td>{formataMoeda(somardor())}</td>
            </tfoot>
          </Table>
        </div>
        <Button onClick={() => generatePDF(getTargetElement, options)}>
          Gerar PDF
        </Button>
      </div>
      ) : <h1></h1>}

      
    </>
  );
}

export default App;
