import React from 'react'
import Apresentacao from '../../components/Apresentacao/Apresentacao'
import SobreMim from '../../components/SobreMim/SobreMim'
import SliderHabilidades from '../../components/SliderHabilidades/SliderHabilidades'
import Servicos from '../../components/Servicos/Servicos'
import ProjetoHome from '../../components/ProjetosHome/ProjetosHome'
import styles from './Home.module.css'
import BotaoProjeto from '../../components/BotaoProjetos/BotaoProjetos'
import BotaoContato from '../../components/BotaoContato/BotaoContato'

const Home = () => {
  return (
    <>
      <div className={styles.primeiraSection}>
        <Apresentacao />
      </div>
      <SobreMim />
      <SliderHabilidades />
      <Servicos />
      <ProjetoHome />
      <BotaoProjeto />
      <BotaoContato />
    </>
  )
}

export default Home
