import styles from './Formulario.module.css'
import { motion } from 'motion/react'
import stylesBotoes from '../../CSS-Botao/Botoes.module.css'

const Formulario = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.containerFormulario}
      >
        <div className={styles.tituloFormulario}>
          <h2>Contate-me</h2>
        </div>

        <form action="https://formspree.io/f/mlddopke" method="POST">
          <label>
            Nome
            <input type="text" name="nome" placeholder="Seu nome" required />
          </label>

          <label>
            Telefone (+DDD)
            <input type="number" name="numero" placeholder="Seu telefone" />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              required
            />
          </label>

          <label>
            Mensagem
            <textarea
              required
              name="mensagem"
              id="mensagem"
              placeholder="Olá, meu nome é..."
            ></textarea>
          </label>

          <button type="submit" className={stylesBotoes.hvrSweepToRightRodape}>
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Formulario
