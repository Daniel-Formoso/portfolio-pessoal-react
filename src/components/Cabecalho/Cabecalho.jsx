import NavBar from '../BarraNavegacao/BarraNavegacao'
import styles from './Cabecalho.module.css'
import { FaCode } from 'react-icons/fa'
import { motion } from 'motion/react'

const Cabecalho = () => {
  return (
    <header id='header'>
      <div className={styles.header}>
        <motion.div
          initial={{ y: '-1000%' }}
          animate={{ y: '0%' }}
          transition={{ type: 'spring', stiffness: 50 }}
          className={styles.logo}
        >
          <a href="/">
            <FaCode className={styles.iconeLogo} />
            <p>DanielDev</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: '-1000%' }}
          animate={{ y: '0%' }}
          transition={{ type: 'spring', stiffness: 50 }}
          className={styles.barraNavegacao}
        >
          <NavBar />
        </motion.div>
      </div>
    </header>
  )
}

export default Cabecalho
