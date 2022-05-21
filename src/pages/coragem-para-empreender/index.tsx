import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/Coragem.module.css'
import logo from '../../../public/img/logo-topo.png'
import imgTopo from '../../../public/img/foto-topo.png'
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
                  <h2 className={style.subtitulo} >Checklist</h2>
                  <h1 className={style.title}>
                      <span className={style.titulo}>Coragem para</span> <span className={style.Titulodestaque}>Empreender</span>
                  </h1>
                    <Link href="#form">
                      <button className={`${style.botao}  mb-4`}>
                          Quero meu checklist
                      </button>
                    </Link>
              </div>  
            </div>  
            <div className={`${style.chamadaTexto} d-none d-md-block`}>
                <h2>Trabalhar no seu próprio negócio </h2>
                <p> Esse sonho é possível sim! 
                <strong> Basta planejamento, organização e uma dose de coragem</strong>
                </p> 
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

          <div className={`${style.chamadaTexto} d-block d-md-none text-md-start`}>
                <h2>Trabalhar no seu próprio negócio </h2>
                <p> Esse sonho é possível sim! 
                <strong> Basta planejamento, organização e uma dose de coragem</strong>
                </p> 
            </div>  
        
      {/* </main> */}
    </div>
  </div>
</header>

<main className={`${style.main} container `}>
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
   
    <section className="container px-5 bg-light mt-4 pt-5">
      <h2 id="form">Preencha seus dados abaixo para receber seu checklist</h2>
    <form method="post" action="https://22.e-goi.com//w/1e4e6ihPeaKRKTRSf7ea2204-70" className="form ">
      <input type="hidden" name="lista" value="1"/>
      <input type="hidden" name="cliente" value="1358209"/>
      <input type="hidden" name="lang" id="lang_id" value="br"/>
      <input type="hidden" name="formid" id="formid" value="4"/>
      
      <div className="form-group mb-4">
          <label>
              Nome* 
          </label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Digite seu nome" 
            name="easygoi_3" 
            id="easygoi_3" 
            defaultValue=""/>
      </div>
      
      <div className="form-group mb-4">
          <label>
            E-mail  * 
          </label>
          <input 
              type="email"
              className="form-control"
              placeholder="Digite seu melhor email" 
              name="easygoi_4" 
              id="easygoi_4" 
              defaultValue=""/>
      </div>
      
      <div className="form-group mb-4">
        <label>
          WhatsApp* 
        </label>
        <div className="form-row ">
          <div className="col-md-4 mb-1">
              <select name="ind_easygoi_11" className="form-control d-none" id="ind_easygoi_11" data-theme="c">
            <option value="+93">
              Afeganist&#227;o (+93)
            </option>
            <option value="+27">
              &#193;frica do Sul (+27)
            </option>
            <option value="+355">
              Alb&#226;nia (+355)
            </option>
            <option value="+49">
              Alemanha (+49)
            </option>
            <option value="+213">
              Alg&#233;ria (+213)
            </option>
            <option value="+376">
              Andorra (+376)
            </option>
            <option value="+244">
              Angola (+244)
            </option>
            <option value="+12684">
              Anguilla (+12684)
            </option>
            <option value="+1268">
              Ant&#237;gua e Barbuda (+1268)
            </option>
            <option value="+966">
              Ar&#225;bia Saudita (+966)
            </option>
            <option value="+54">
              Argentina (+54)
            </option>
            <option value="+374">
              Arm&#234;nia (+374)
            </option>
            <option value="+297">
              Aruba (+297)
            </option>
            <option value="+247">
              Ascension (+247)
            </option>
            <option value="+61">
              Austr&#225;lia (+61)
            </option>
            <option value="+43">
              &#193;ustria (+43)
            </option>
            <option value="+994">
              Azerbaidj&#227;o (+994)
            </option>
            <option value="+1242">
              Baamas (+1242)
            </option>
            <option value="+973">
              Bahrein (+973)
            </option>
            <option value="+880">
              Bangladesh (+880)
            </option>
            <option value="+1246">
              Barbados (+1246)
            </option>
            <option value="+32">
              B&#233;lgica (+32)
            </option>
            <option value="+501">
              Belize (+501)
            </option>
            <option value="+229">
              Benin (+229)
            </option>
            <option value="+1441">
              Bermuda (+1441)
            </option>
            <option value="+375">
              Bielorr&#250;ssia (+375)
            </option>
            <option value="+591">
              Bol&#237;via (+591)
            </option>
            <option value="+599">
              Bonaire, Saint Eustatius e Saba, Cura&#231;&#227;o e Sint Maarten Holand&#234;s (+599)
            </option>
            <option value="+387">
              B&#243;snia-Herzegovina (+387)
            </option>
            <option value="+267">
              Botsuana (+267)
            </option>
            <option value="+55" selected>
              Brasil (+55)
            </option>
            <option value="+673">
              Brunei (+673)
            </option>
            <option value="+359">
              Bulg&#225;ria (+359)
            </option>
            <option value="+226">
              Burkina-Faso (+226)
            </option>
            <option value="+257">
              Burundi (+257)
            </option>
            <option value="+975">
              But&#227;o (+975)
            </option>
            <option value="+238">
              Cabo Verde (+238)
            </option>
            <option value="+237">
              Camar&#245;es (+237)
            </option>
            <option value="+855">
              Camboja (+855)
            </option>
            <option value="+1">
              Canad&#225;, EUA, Puerto Rico e Rep&#250;blica Dominicana (+1)
            </option>
            <option value="+7">
              Cazaquist&#227;o, Quirguist&#227;o e R&#250;ssia (+7)
            </option>
            <option value="+56">
              Chile (+56)
            </option>
            <option value="+86">
              China (+86)
            </option>
            <option value="+357">
              Chipre (+357)
            </option>
            <option value="+379">
              Cidade do Vaticano (+379)
            </option>
            <option value="+57">
              Col&#244;mbia (+57)
            </option>
            <option value="+269">
              Comores (+269)
            </option>
            <option value="+243">
              Congo-Brazzaville (+243)
            </option>
            <option value="+242">
              Congo-Kinshasa (+242)
            </option>
            <option value="+850">
              Coreia do Norte (+850)
            </option>
            <option value="+82">
              Coreia do Sul (+82)
            </option>
            <option value="+225">
              Costa do Marfim (+225)
            </option>
            <option value="+506">
              Costa Rica (+506)
            </option>
            <option value="+385">
              Cro&#225;cia (+385)
            </option>
            <option value="+53">
              Cuba (+53)
            </option>
            <option value="+246">
              Diego Garcia (+246)
            </option>
            <option value="+45">
              Dinamarca (+45)
            </option>
            <option value="+253">
              Djibuti (+253)
            </option>
            <option value="+1767">
              Dominica (+1767)
            </option>
            <option value="+20">
              Egipto (+20)
            </option>
            <option value="+503">
              El Salvador (+503)
            </option>
            <option value="+971">
              Emirados &#193;rabes Unidos (+971)
            </option>
            <option value="+593">
              Equador (+593)
            </option>
            <option value="+291">
              Eritreia (+291)
            </option>
            <option value="+421">
              Eslov&#225;quia (+421)
            </option>
            <option value="+386">
              Eslov&#234;nia (+386)
            </option>
            <option value="+34">
              Espanha (+34)
            </option>
            <option value="+372">
              Est&#244;nia (+372)
            </option>
            <option value="+251">
              Eti&#243;pia (+251)
            </option>
            <option value="+679">
              Fidji (+679)
            </option>
            <option value="+63">
              Filipinas (+63)
            </option>
            <option value="+358">
              Finl&#226;ndia (+358)
            </option>
            <option value="+33">
              Fran&#231;a (+33)
            </option>
            <option value="+241">
              Gab&#227;o (+241)
            </option>
            <option value="+220">
              G&#226;mbia (+220)
            </option>
            <option value="+233">
              Gana (+233)
            </option>
            <option value="+995">
              Ge&#243;rgia (+995)
            </option>
            <option value="+350">
              Gibraltar (+350)
            </option>
            <option value="+1473">
              Granada (+1473)
            </option>
            <option value="+30">
              Gr&#233;cia (+30)
            </option>
            <option value="+299">
              Gronel&#226;ndia (+299)
            </option>
            <option value="+590">
              Guadeloupe (+590)
            </option>
            <option value="+1671">
              Guam (+1671)
            </option>
            <option value="+502">
              Guatemala (+502)
            </option>
            <option value="+592">
              Guiana (+592)
            </option>
            <option value="+594">
              Guiana Franc&#234;sa (+594)
            </option>
            <option value="+224">
              Guin&#233; (+224)
            </option>
            <option value="+240">
              Guin&#233; Equatorial (+240)
            </option>
            <option value="+245">
              Guin&#233;-Bissau (+245)
            </option>
            <option value="+509">
              Haiti (+509)
            </option>
            <option value="+504">
              Honduras (+504)
            </option>
            <option value="+852">
              Hong Kong (+852)
            </option>
            <option value="+36">
              Hungria (+36)
            </option>
            <option value="+967">
              I&#234;men (+967)
            </option>
            <option value="+44">
              Ilha de Man e Reino Unido (+44)
            </option>
            <option value="+1345">
              Ilhas Cayman (+1345)
            </option>
            <option value="+682">
              Ilhas Cook (+682)
            </option>
            <option value="+500">
              Ilhas Falkland (+500)
            </option>
            <option value="+298">
              Ilhas Faroe (+298)
            </option>
            <option value="+1670">
              Ilhas Marianas do Norte (+1670)
            </option>
            <option value="+692">
              Ilhas Marshall (+692)
            </option>
            <option value="+677">
              Ilhas Salom&#227;o (+677)
            </option>
            <option value="+1284">
              Ilhas Vigens Brit&#226;nicas (+1284)
            </option>
            <option value="+1340">
              Ilhas Virgem Americanas (+1340)
            </option>
            <option value="+91">
              &#205;ndia (+91)
            </option>
            <option value="+62">
              Indon&#233;sia (+62)
            </option>
            <option value="+98">
              Ir&#227; (+98)
            </option>
            <option value="+964">
              Iraque (+964)
            </option>
            <option value="+353">
              Irlanda (+353)
            </option>
            <option value="+354">
              Isl&#226;ndia (+354)
            </option>
            <option value="+972">
              Israel (+972)
            </option>
            <option value="+39">
              It&#225;lia (+39)
            </option>
            <option value="+1876">
              Jamaica (+1876)
            </option>
            <option value="+81">
              Jap&#227;o (+81)
            </option>
            <option value="+962">
              Jord&#226;nia (+962)
            </option>
            <option value="+965">
              Kuait (+965)
            </option>
            <option value="+856">
              Laos (+856)
            </option>
            <option value="+266">
              Lesoto (+266)
            </option>
            <option value="+371">
              Let&#244;nia (+371)
            </option>
            <option value="+961">
              L&#237;bano (+961)
            </option>
            <option value="+231">
              Lib&#233;ria (+231)
            </option>
            <option value="+218">
              L&#237;bia (+218)
            </option>
            <option value="+423">
              Liechtenstein (+423)
            </option>
            <option value="+370">
              Litu&#226;nia (+370)
            </option>
            <option value="+352">
              Luxemburgo (+352)
            </option>
            <option value="+853">
              Macau (+853)
            </option>
            <option value="+389">
              Maced&#244;nia (+389)
            </option>
            <option value="+261">
              Madagascar (+261)
            </option>
            <option value="+60">
              Mal&#225;sia (+60)
            </option>
            <option value="+265">
              Malawi (+265)
            </option>
            <option value="+960">
              Maldivas (+960)
            </option>
            <option value="+223">
              M&#225;li (+223)
            </option>
            <option value="+356">
              Malta (+356)
            </option>
            <option value="+212">
              Marrocos (+212)
            </option>
            <option value="+596">
              Martinica (+596)
            </option>
            <option value="+230">
              Maur&#237;cio (+230)
            </option>
            <option value="+222">
              Maurit&#226;nia (+222)
            </option>
            <option value="+262">
              Mayotte e Reunion (+262)
            </option>
            <option value="+52">
              M&#233;xico (+52)
            </option>
            <option value="+95">
              Mianmar (+95)
            </option>
            <option value="+691">
              Micron&#233;sia (+691)
            </option>
            <option value="+258">
              Mo&#231;ambique (+258)
            </option>
            <option value="+373">
              Mold&#225;via (+373)
            </option>
            <option value="+377">
              M&#244;naco (+377)
            </option>
            <option value="+976">
              Mong&#243;lia (+976)
            </option>
            <option value="+382">
              Montenegro (+382)
            </option>
            <option value="+1664">
              Montserrat (+1664)
            </option>
            <option value="+264">
              Nam&#237;bia (+264)
            </option>
            <option value="+674">
              Nauru (+674)
            </option>
            <option value="+977">
              Nepal (+977)
            </option>
            <option value="+505">
              Nicar&#225;gua (+505)
            </option>
            <option value="+227">
              N&#237;ger (+227)
            </option>
            <option value="+234">
              Nig&#233;ria (+234)
            </option>
            <option value="+683">
              Niue (+683)
            </option>
            <option value="+47">
              Noruega (+47)
            </option>
            <option value="+687">
              Nova Caledonia (+687)
            </option>
            <option value="+64">
              Nova Zel&#226;ndia (+64)
            </option>
            <option value="+968">
              Om&#227; (+968)
            </option>
            <option value="+31">
              Pa&#237;ses Baixos (+31)
            </option>
            <option value="+680">
              Palau (+680)
            </option>
            <option value="+970">
              Palestina (+970)
            </option>
            <option value="+507">
              Panam&#225; (+507)
            </option>
            <option value="+675">
              Papua Nova Guin&#233; (+675)
            </option>
            <option value="+92">
              Paquist&#227;o (+92)
            </option>
            <option value="+595">
              Paraguai (+595)
            </option>
            <option value="+51">
              Peru (+51)
            </option>
            <option value="+689">
              Polin&#233;sia Franc&#234;sa (+689)
            </option>
            <option value="+48">
              Pol&#244;nia (+48)
            </option>
            <option value="+351" >
              Portugal (+351)
            </option>
            <option value="+974">
              Qatar (+974)
            </option>
            <option value="+254">
              Qu&#234;nia (+254)
            </option>
            <option value="+686">
              Quiribati (+686)
            </option>
            <option value="+236">
              Rep&#250;blica Centro-Africana (+236)
            </option>
            <option value="+420">
              Rep&#250;blica Tcheca (+420)
            </option>
            <option value="+40">
              Rom&#234;nia (+40)
            </option>
            <option value="+250">
              Ruanda (+250)
            </option>
            <option value="+290">
              Saint Helena, Tristan da Cunha (+290)
            </option>
            <option value="+1869">
              Saint Kitts e Nevis (+1869)
            </option>
            <option value="+508">
              Saint Pierre and Miquelon (+508)
            </option>
            <option value="+685">
              Samoa (+685)
            </option>
            <option value="+1684">
              Samoa Americana (+1684)
            </option>
            <option value="+1758">
              Santa L&#250;cia (+1758)
            </option>
            <option value="+378">
              S&#227;o Marino (+378)
            </option>
            <option value="+239">
              S&#227;o Tom&#233; e Pr&#237;ncipe (+239)
            </option>
            <option value="+1784">
              S&#227;o Vicente e Granadinas (+1784)
            </option>
            <option value="+248">
              Seicheles (+248)
            </option>
            <option value="+221">
              Senegal (+221)
            </option>
            <option value="+232">
              Serra Leoa (+232)
            </option>
            <option value="+381">
              S&#233;rvia (+381)
            </option>
            <option value="+65">
              Singapura (+65)
            </option>
            <option value="+963">
              S&#237;ria (+963)
            </option>
            <option value="+252">
              Som&#225;lia (+252)
            </option>
            <option value="+94">
              Sri Lanka (+94)
            </option>
            <option value="+268">
              Suazil&#226;ndia (+268)
            </option>
            <option value="+249">
              Sud&#227;o (+249)
            </option>
            <option value="+46">
              Su&#233;cia (+46)
            </option>
            <option value="+41">
              Su&#237;&#231;a (+41)
            </option>
            <option value="+597">
              Suriname (+597)
            </option>
            <option value="+992">
              Tadjiquist&#227;o (+992)
            </option>
            <option value="+66">
              Tail&#226;ndia (+66)
            </option>
            <option value="+886">
              Taiwan (+886)
            </option>
            <option value="+255">
              Tanz&#226;nia (+255)
            </option>
            <option value="+235">
              Tchade (+235)
            </option>
            <option value="+670">
              Timor-Leste (+670)
            </option>
            <option value="+228">
              Togo (+228)
            </option>
            <option value="+676">
              Tonga (+676)
            </option>
            <option value="+1868">
              Trinidad e Tobago (+1868)
            </option>
            <option value="+216">
              Tun&#237;sia (+216)
            </option>
            <option value="+1649">
              Turks and Caicos Islands (+1649)
            </option>
            <option value="+90">
              Turquia (+90)
            </option>
            <option value="+993">
              Turquimenist&#227;o (+993)
            </option>
            <option value="+688">
              Tuvalu (+688)
            </option>
            <option value="+380">
              Ucr&#226;nia (+380)
            </option>
            <option value="+256">
              Uganda (+256)
            </option>
            <option value="+598">
              Uruguai (+598)
            </option>
            <option value="+998">
              Usbequist&#227;o (+998)
            </option>
            <option value="+678">
              Vanuatu (+678)
            </option>
            <option value="+58">
              Venezuela (+58)
            </option>
            <option value="+84">
              Vietn&#227; (+84)
            </option>
            <option value="+681">
              Wallis and Futuna (+681)
            </option>
            <option value="+260">
              Z&#226;mbia (+260)
            </option>
            <option value="+263">
              Zimbabwe (+263)
            </option>
              </select>
          </div>
          <div className="col">
              <input 
                type="tel" 
                name="easygoi_11_numero" 
                placeholder="(DDD) + Número"
                className="form-control" 
                id="easygoi_11_numero" 
                defaultValue=""/>
          </div>
        </div>
      </div>

      <div className="text-center">
        <input type="submit" className={`${style.botao} mb-5 `} value="Receber checklist"/>
      </div>
    
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