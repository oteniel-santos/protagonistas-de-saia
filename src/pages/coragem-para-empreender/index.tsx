import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Coragem.module.css'
import logo from '../../../public/img/logo-topo.png'
import imgTopo from '../../../public/img/foto-topo.png'

export default function Coragem(){
return(
<>  
<header className={style.topo}>
  <div className="container">
    <div className="row "> 
      <main>
          <section className="col-md-6 d-flex flex-column align-items-center topo-texto">
            <div className={style['img-logo']}>  
              <Image 
                  src={logo} 
                  layout="responsive"
                  >
              </Image>
              </div>
            <div>
              <h2 className={style.subtitulo} >Checklist</h2>
              <h1 className={style.title}>
                  <span className={style.titulo}>Coragem para</span> <span className={style.Titulodestaque}>Empreender</span>
              </h1>
              <button className={`${style.botao} `}>Quero meu checklist</button>
            </div>    
          </section>
  
          <section className="col-md-6 ">
            <div className={style.imagemTopo}>
              <Image
                src={imgTopo} 
                width="300"
                height="385"          
              ></Image>
            </div>
          </section>
        <div className={style.chamadaTexto}>
          <h2>Trabalhar no seu próprio negócio </h2>
          <p> Esse sonho é possível sim! 
           <strong> Basta planejamento, organização e uma dose de coragem</strong>
          </p> 
        </div>  
        
      </main>
    </div>
  </div>
</header>

<main className="px-5">
    <section>

        
        <p> <strong> Chega de desperdiçar seu tempo </strong> 
          realizando o propósito de vida do seu chefe. A vida é curta demais para isso. 
          Invista em você, corra atrás do que realmente te faz feliz. 
        </p>

        <p>
          E nós temos a certeza de que a felicidade que você tanto sonha, pode ser alcançada 
          por meio do empreendedorismo.
        </p>

        <p>
          Você dona do próprio negócio, com horário flexível e alinhado ao seu estilo de vida, contribuindo com um mundo melhor,
          a partir da sua missão e essência.
        </p>

        <p>
          <strong>Para te ajudar nessa jornada, preparamos um checklis 100%</strong> gratuito que vai mapear seu momento atual e te ajudar
          a dar os primeiros passos no mundo do empreendedorismo.
        </p>
    </section>

    <section>
        formulário de cadastro
    </section>
</main>
</>
 )  
}