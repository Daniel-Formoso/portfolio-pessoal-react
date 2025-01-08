import styles from './BotaoContato.module.css'
import { motion } from 'motion/react'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'
import { GoArrowRight } from 'react-icons/go'

const BotaoContato = () => {
  return (
    <div className={styles.containerBotoes}>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href="/PaginaContato" className={stylesBotoes.hvrSweepToRight}>
          <GoArrowRight className={styles.iconeSeta} />
          Contate-me
        </a>
      </motion.button>
    </div>
  )
}

export default BotaoContato
