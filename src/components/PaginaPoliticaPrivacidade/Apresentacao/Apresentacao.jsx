import styles from './PoliticaPrivacidade.module.css'
import { motion } from 'motion/react'

const ApresentacaoPolitica = () => {
  return (
    <section>
      <div className={styles.containerApresentacao}>
        <div className={styles.conteudoApresentacao}>
          <motion.div
            className={styles.tituloApresentacao}
            initial={{ x: '300%' }}
            animate={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <motion.p>Política De Pivacidade</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApresentacaoPolitica
