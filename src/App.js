import { useState } from 'react'
import Banner from './componets/Banner/Banner';
import Formulario from './componets/Formulario';
import Time from './componets/Time';

function App() {

  const [colaboradores, setColaboradores] = useState('')

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>

    </div>
  );
}

export default App;
