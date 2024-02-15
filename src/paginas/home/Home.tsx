import React from 'react';
import './Home.css';
interface Props{
    titulo: string;
    texto: string;
  }
  
  function Home(props : Props) {
    return(
      <>
      <h1 className="titulo">{props.titulo}Home</h1>
      <p>{props.texto}</p>  
      <img src="https://www.one-stack.jp/wp-content/uploads/2022/05/Discussion-rafiki.png" alt="Imagem Tela Inicial" className="img"/>
  
      </>
    )
  }
  
  export default Home;