import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Financas.module.css'
import logo from '../../../public/img/logo-topo-branco.webp'
import imgTopo from '../../../public/img/foto-topo.png'
import logoSvg from '../../../public/img/logo-svg.svg'
import Link from 'next/link'
// import {Link }from 'react-router-dom'

export default function Coragem(){
return(
<>  
<header className={`${style.topo} `}>
  <div className={`${style.geral} container align-self-center  `}>
    <div className="row "> 
      {/* <main> */}
          <section className="col d-flex flex-column ">
            <div className=" text-center ">
              <div className={`${style.imgLogo} mx-auto mb-5 `}>  
                <Image 
                    src={logo} 
                    layout="responsive"
                    alt="Logo Protagonistas de Saia"
                    >
                </Image>
              </div>
              <div>
                  <h2 className={style.subtitulo} >Checklist</h2>
                  <h1 className={style.title}>
                      <span className={style.titulo}>Gestão de Negócios</span><br/> 
                      <span className={style.Titulodestaque}>e Finanças</span>
                  </h1>
                    <Link href="#form">
                      <button className={`${style.botaotopo}  mt-5`}>
                          Quero meu checklist
                      </button>
                    </Link>
              </div>  
            </div>  
            {/* <div className={`${style.chamadaTexto} d-none d-md-block`}>
                <h2>Trabalhar no seu próprio negócio </h2>
                <p> Esse sonho é possível sim! 
                <strong> Basta planejamento, organização e uma dose de coragem</strong>
                </p> 
            </div>     */}
          </section>
  

        
      {/* </main> */}
    </div>
  </div>
</header>

<main className={`${style.main} container `}>
    <section>
       <p>
          Só ter uma ótima idéia, ou um bom networking não garante o 
          sucesso do seu negócio. 
       </p>
      
      <p>
          Por menor que seja seu negócio, você será uma administradora! 
          E ainda que seu intuito seja construir um negócio para atender 
          seu propósito/missão, você quer que ele seja sustentável, certo? 
          Afinal de contas, ninguém quer abrir um negócio para fechar 
          daqui a 2 anos, não é verdade?
      </p>

      <p>
        E para isso é preciso ter noções gerais sobre Finanças, Gestão de 
        Processo e de Pessoas.
      </p>

      <p>
        Ah!  E gerir seu negócio não tem que ser algo chato e burocrático. 
        Pense que este momento é essencial para que você e seu negócio sejam 
        prósperos.
      </p>
      
      <p>
        Aqui está um checklist, totalmente grátis, para que você possa avaliar 
        como está em cada um desses pilares e em qual deve buscar mais conhecimento.
      </p>

    </section>
   
    <section className="container px-4  bg-light  mt-4 pt-5">
      <h2 id="form">Preencha seus dados abaixo para receber seu checklist</h2>

      <form 
          className="needs-validation" 
          method="post" 
          encType="multipart/form-data" 
          action="https://22.e-goi.com//w/1e4e6nOOe31b6cZXxpe1b8c9d43">
        <input type="hidden" name="lista" value="1"/>
        <input type="hidden" name="cliente" value="1378128"/>
        <input type="hidden" name="lang" id="lang_id" value="br"/>
        <input type="hidden" name="formid" id="formid" value="4"/>
      <div className="form-group">
        <label htmlFor="fname_5"  className="mt-4">Nome  *</label>
        <input 
            type="text" 
            required
            className="form-control" 
            placeholder="Digite seu nome" 
            name="fname_5" 
            id="fname_5" 
            defaultValue=""
        />

      </div>  
      <div className="form-group">
        <label htmlFor="email_6" className="mt-4">
          E-mail  * 
        </label>
        <input 
            type="email" 
            className="form-control"
            name="email_6" 
            id="email_6" 
            placeholder="digite seu melhor email"
            defaultValue=""
            required
            />
        <small className="form-text text-muted">
          Não se preocupe, somos anti-spam e nunca compartilharemos seu e-mail, com ninguém
        </small>
      </div>  
        <button className={`${style.botao} btn btn-primary mt-4 mb-4 mx-auto`} type="submit" > Quero meu checklist </button>
      </form>


    </section>   
</main>
<div className="container">
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