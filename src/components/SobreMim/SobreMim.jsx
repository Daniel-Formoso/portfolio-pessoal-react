import BotoesSobreMim from '../BotoesSobreMim/BotoesSobreMim'
import styles from './SobreMim.module.css'
import { motion } from 'motion/react'

const SobreMim = () => {
  return (
    <section id="sobre-mim">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        className={styles.containerSobreMim}
      >
        <div className={styles.tituloSobreMim}>
          <h2>Quem Sou</h2>
        </div>
        <div className={styles.textoSobreMim}>
          <p>
            Sou formado em Sistemas de Informação, com foco em desenvolvimento front-end. Tenho experiência em HTML, CSS e JavaScript, criando interfaces responsivas e otimizadas. Recentemente, conclui cursos com certificados em HTML, CSS, JavaScript e React pela Alura, e estou aprofundando meus conhecimentos em React para entregar soluções modernas. Minha experiência na TV Globo como Jovem Aprendiz me ajudou a desenvolver habilidades em trabalho em equipe, comunicação eficaz e resolução de problemas. Estou sempre em busca de novos desafios e oportunidades para criar interfaces intuitivas e eficientes.
          </p>
        </div>

        <BotoesSobreMim />
      </motion.div>
    </section>
  )
}

export default SobreMim
