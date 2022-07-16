import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Crise.module.css'
import logo from '../../../public/img/logo-topo-branco.webp'
import imgTopo from '../../../public/img/foto-topo-protagonistas-3.webp'
import logoSvg from '../../../public/img/logo-svg.svg'
import Link from 'next/link'
// import {Link }from 'react-router-dom'

export default function Coragem(){

function validation(){ 
    window.addEventListener('load', function(){
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form){
        form.addEventListener('submit', function(event){
          if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
 }


return(
<>  
<header className={style.topo}>
  <div className={`${style.geral} container align-self-center `}>
    <div className="row g-0 "> 
      {/* <main> */}
          <section className="col-md-7 col-lg-6 d-flex flex-column">
            <div className=" text-md-start ">
              <div className={`${style.imgLogo}  `}>  
                <Image 
                    src={logo} 
                    layout="responsive"
                    alt="Logo Protagonistas de Saia"
                    >
                </Image>
              </div>
              <div>
                  <h2 className={style.subtitulo} >Guia de Oportunidades</h2>
                  <h1 className={style.title}>
                      <span className={style.titulo}>Empreender</span> <br />
                      <span className={style.Titulodestaque}>na Crise</span>
                  </h1>
                    <Link href="#form">
                      <button className={`${style.botao}  mb-4`}>
                          Quero meu guia
                      </button>
                    </Link>
              </div>  
            </div>  
            <div className={`${style.chamadaTexto} d-none d-md-block`}>
                <h2>Não deixe escapar oportunidades para seu negócio! </h2>
            </div>    
          </section>
  
          <section className="col-md-5 col-lg-6 align-self-center">
            <div className={style.imagemTopo}>
              <Image
                src={imgTopo} 
                // width="auto"
                // height="auto"
                alt="Foto das proprietárias da Protagonistas de Saia"          
              ></Image>
            </div>

          </section> 
        
      {/* </main> */}
    </div>
  </div>
</header>

<main className={`${style.main} container `}>
    <section>
       
        <p> 
          A empreendedora de sucesso é aquela que vê oportunidades em todas as 
          situações, inclusive, em tempos de crise.
          
        </p>

        <p>
          Mas, sabemos também que muitas vezes você está tão absorvida na linha de frente , no operacional, que não tem tempo para pensar estrategicamente ne seu negócio.
        </p>
        <p>
        Justamente por isso, criamos esse guia prático para trazer luz aos pontos cegos do seu negócio.
        </p> 
        
        <p>
          Não perca tempo e baixe agora mesmo seu guia, 
              <strong>
                  totalmente  gratuito.
              </strong> 
        </p>

       
    </section>
   
    <section className="container px-4 bg-light mt-4 pt-5 px-3">
      <h2 id="form">Preencha seus dados abaixo para receber seu checklist</h2>
      <form 
          className="needs-validation" 
          method="post" 
          encType="multipart/form-data" 
          action="//22.mktid9.com//w/1e3e6nOOe2qsLollGae6f548385">
        <input type="hidden" name="lista" value="1"/>
        <input type="hidden" name="cliente" value="1378128"/>
        <input type="hidden" name="lang" id="lang_id" value="br"/>
        <input type="hidden" name="formid" id="formid" value="3"/>
      <div className="form-group">
        <label htmlFor="fname_3"  className="mt-4">Nome  *</label>
        <input 
            type="text" 
            required
            className="form-control" 
            placeholder="Digite seu nome" 
            name="fname_3" 
            id="fname_3" 
            defaultValue=""
        />

      </div>  
      <div className="form-group">
        <label htmlFor="email_2" className="mt-4">
          E-mail  * 
        </label>
        <input 
            type="email" 
            className="form-control"
            name="email_4" 
            id="email_4" 
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

<section>

</section>

    
</main>
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