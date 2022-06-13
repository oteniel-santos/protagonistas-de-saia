import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Coragem.module.css'
import logo from '../../../public/img/logo-topo.png'
// import imgTopo from '../../../public/img/foto-topo.png'

export default function Coragem(){
return(
<>  
<header className={style.topo2}>
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
              <h1 className={`{style.title} mt-4`}>
                  <span className={style.titulo}>Obrigada</span>
              </h1>
              
            </div>    
          </section>
  
          
        <div className={`{style.chamadaTexto} mt-4 `}>
          <h2>Já enviamos o seu checklist</h2>
          <p> 
            Confira sua caixa de entrada para acessar o seu checklist 
          </p>
          
          <p>
            <strong> Caso não encontre, dê uma olhada na caixa de span. 
              Adicione nosso email aos seus contatos para ficar por dentro 
              de todas as novidades.</strong>
          </p> 

        </div>  
        
      </main>
    </div>
  </div>



</header>


</>
 )  
}