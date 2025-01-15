import styles from './Servicos.module.css'
import { motion } from 'motion/react'
import { GoArrowRight } from 'react-icons/go'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'

const Servicos = () => {
  return (
    <>
      <section id='servicos'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: .5 }}
          className={styles.containerServicos}
        >
          <div className={styles.tituloServicos}>
            <h2>Serviços que Ofereço</h2>
          </div>

          <div className={styles.textoServicos}>
            <p>
              Crio soluções digitais que combinam design e funcionalidade para
              proporcionar uma experiência completa ao usuário. Dê uma olhada em
              alguns dos meus projetos e veja como posso ajudar a destacar a sua
              marca no ambiente digital com um site personalizado e otimizado.
              Vamos transformar sua ideia em realidade?
            </p>
          </div>

          <div className={styles.containerBotao}>
            <button>
              <a href="/PaginaServicos" className={stylesBotoes.hvrSweepToRight}>
                <GoArrowRight className={styles.iconeSeta} />
                <p>Veja meus serviços</p>
              </a>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Servicos
