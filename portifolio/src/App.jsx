import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
      <div className='interface'>
        <div className='logo'>
          <h2>João Vitor<br></br> <span>Lunardi</span></h2>
        </div>
      <nav className='menu-desktop'>
        <ul>
          <li><i class="bi bi-linkedin"></i><a href ="https://www.linkedin.com/in/jv-lunardi/" target='blank'>LinkedIn</a></li>
          <li><i class="bi bi-github"></i><a href ="https://github.com/JawnLunardi" target='blank'>Github</a></li>
          <li><a href ="mailto:joaovitorlm@gmail.com" target='blank'>joaovitorlm@gmail.com</a></li>
        </ul>
      </nav>
        <div className="btn-contato">
          <a href="https://wa.me/5524998172656" target='_blank'>
            <button>Contato</button>
          </a>
        </div>
        <div className="mobile-btn">
          <a href="https://lt-lunardi.vercel.app" target='_blank'>
            <button>Contato</button>
          </a>
        </div>
      </div>
      </header>
      <main>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">
                <h1>Olá, eu sou João Vitor Lunardi<span>.</span></h1>
                <h2>Desenvolvedor Jr</h2>
                <p>Estudante de Sistemas de Computação na Universidade Federal 
Fluminense (UFF) com mais de um ano de estudos e atuação como freelancer. <br/> Minhas especialidades incluem HTML5, CSS3, JavaScript, React.js, Node.js, Ruby on Rails e Kotlin, além de MySQL e Git, entregando soluções modernas e funcionais.</p>
                <div className="btn-contato">
                  <a href="https://lunardi.vercel.app/joaolunardi_cv.pdf" target='blank' ><button>Curriculum Vitae</button></a>
                </div>
              </div>
              <div className='img-topo-site'>
                <img src="no-bg.png" alt="" />
              </div>
            </div>
          </div>

        </section>

        <section className='skills'>

        </section>
        <section className='especialidades'>
          <div className='interface'>
          <h2>Clique e conheça <span>meus projetos</span></h2>
          <div className="flex">
            
            <div className="especialidades-box"><a href="https://www.linkedin.com/posts/jv-lunardi_kotlin-android-mobile-activity-7214275041142706177-isuv" target='blank'>
            <img className='mobileapp' src="gas_or_eth.png" alt="" />
            <h2 className='titulo'>Calculadora de Combustível</h2>
            <p>Aplicativo Android que compara preço de etanol e gasolina para analisar qual vale mais a pena</p>
            <br />
            <h3>Ferramentas utilizadas</h3>
            <ul>
          <li>Kotlin</li>
          <li>Android Studio</li>
          <li>Jetpack Compose</li>
        </ul></a>
            </div>
            
            
            <div className="especialidades-box"><a href="https://www.linkedin.com/posts/jv-lunardi_frontend-reactjs-desenvolvimentoweb-activity-7242297860371697665-H7vb" target='blank'>
            <img className='webapp' src="weather.png" alt="" />
            <h2 className='titulo'>Previsão do tempo</h2>
            <p>Aplicação web de previsão do tempo consumindo uma API externa da OpenWeather </p>
            <br />
            <h3>Ferramentas utilizadas</h3>
            <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
            </a></div>
            
            
            <div className="especialidades-box"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7246642680854679552/" target='blank'>
            <img className='webapp' src="soccerfans.png" alt="" />
            <h2 className='titulo'>Cadastramento de usuários</h2>
            <p>Projeto de cadastramento de torcedores utilizando banco de dados.</p>             <br />
            <h3>Ferramentas utilizadas</h3>
            <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MySQL</li>
        </ul></a>
            </div>

          </div>
        </div>
        </section>
      </main>


    </div>
  )
}

export default App
