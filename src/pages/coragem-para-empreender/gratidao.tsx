import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Coragem.module.css'
import logo from '../../../public/img/logo-topo.webp'
import imgTopo from '../../../public/img/foto-topo.webp'
import logoSvg from '../../../public/img/logo-svg.svg'
import Link from 'next/link'
// import {Link }from 'react-router-dom'

export default function Coragem(){

return(
<>  
<header className={style.topo}>
  <div className={`${style.geral} container align-self-center `}>
    <div className="row g-0 "> 
      {/* <main> */}
          <section className=" d-flex flex-column">
            <div className=" text-md-center  ">
              <div className={`${style.imgLogo} m-auto `}>  
                <Image 
                    src={logo} 
                    layout="responsive"
                    alt="Logo Protagonistas de Saia"
                    >
                </Image>
              </div>
              <div>
                  <h2 className={`${style['subtitulo-g']} mt-4`}> OBRIGADA! </h2>
                  <h1 className={style.title}>
                      <span className={`${style['Titulodestaque-g']} `}>Seu checklist foi enviado <br/> 
                      para seu email</span>
                  </h1> 
              </div>  
            </div>  
            <div className={`${style.chamadaTexto} d-none d-md-block text-center`}>
              <p className={` ${style.paragrafoObrigado} `}> 
                <strong>
                    Abra sua caixa de entrada e acesse o seu checklist <br />  
                </strong> 
                Caso não encontre, confira a lixeira do email e nos adicione aos seus contatos
              </p> 
              <p className={` ${style.paragrafoTelegram} `}> 
                Aproveite para entrar no nosso grupo silencioso no Telegram. <br />
                Você vai ter acesso a conteúdos exclusivos sobre empreendorismo, transição de carreira e muito mais.  
              </p>
              <Link href="https://t.me/+BcKTrpKWFWM0NjMx">
                  <button className={`${style.botao}`}>
                    Entrar no grupo do Telegram
                  </button>
              </Link>
            </div>    
          </section>
          
      {/* </main> */}
    </div>
  </div>
</header>


<div className="container mt-5">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-8 d-flex align-items-center mx-auto">
      <Link href={"/"}> 
       <div className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <Image 
          src={logoSvg}
          height="80"
          width="80"
          alt="logo Protagonistas de Saia em svg"
          ></Image>
         </div> 
      </Link>
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Protagonistas de Saia</span>
    </div>
  </footer>

</div>
</>
 )  
}