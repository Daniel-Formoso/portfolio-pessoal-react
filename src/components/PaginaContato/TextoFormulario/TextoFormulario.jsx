import React from 'react'
import styles from './TextoFormulario.module.css'
import { motion } from 'motion/react'

const TextoFormulario = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1}}
        viewport={{ once: true, amount: .5 }}
        className={styles.containerTextoFormulario}
      >
        <div className={styles.textoFormulario}>
          <p>
            Gostaria de conversar ou tem alguma pergunta? Envie sua mensagem
            através do formulário abaixo e entrarei em contato com você o quanto
            antes!
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default TextoFormulario
