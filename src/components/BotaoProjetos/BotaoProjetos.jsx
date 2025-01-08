import stylesBotoes from '../CSS-Botao/Botoes.module.css'
import { motion } from 'motion/react'
import styles from './BotaoProjetos.module.css'
import { GoArrowRight } from 'react-icons/go'

const BotaoProjeto = () => {
  return (
    <div className={styles.containerBotoes}>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href="/PaginaProjetos" className={stylesBotoes.hvrSweepToRight}>
          <GoArrowRight className={styles.iconeSeta} />
          Todos os Projetos
        </a>
      </motion.button>
    </div>
  )
}

export default BotaoProjeto
