import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Coragem.module.css'
import logo from '../../../public/img/logo-topo.png'
import imgTopo from '../../../public/img/foto-topo.png'

export default function Coragem(){
return(
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
      </main>
    </div>
  </div>
</header>
 )  
}