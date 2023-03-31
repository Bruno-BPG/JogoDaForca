// import React from 'react';
// import logo from './logo.svg';
import "./App.css";

function App() {
  let letras = [];

  for (let i = 65; i <= 90; i++) {
    letras.push(String.fromCharCode(i));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="caibo"></div>
        <div className="corda"></div>
        {/* <div className='corda2'></div> */}
        <div className="coluna"></div>
        <div className="base"></div>

        <div className="cabeca"></div>
        <div className="corpo"></div>
        <div className="bracoEsquerdo"></div>
        <div className="bracoDireito"></div>
        <div className="pernaDireito"></div>
        <div className="pernaEsquerdo"></div>

        <div className="box1">
          <div className="box2">

            <div className="box3">
              dica:fdfds
            </div>

            <div className="conteinerTeclado">
              <div className="teclado">
                {letras.map((iten, index) => (
                  <div className="tecla" key={index}>{iten}</div>
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* <div className='box2'></div> */}
      </header>
    </div>
  );
}

export default App;
