import styles from './Apresentacao.module.css'
import { motion } from 'motion/react'

const ApresentacaoServicos = () => {
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
            <motion.p>Meus Serviços</motion.p>
          </motion.div>
          <motion.div
            className={styles.subtituloApresentacao}
            initial={{ x: '-300%' }}
            animate={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <p>Crio soluções digitais que fazem a diferença!</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApresentacaoServicos
