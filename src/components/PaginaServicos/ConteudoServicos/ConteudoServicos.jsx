import BotaoContato from '../../BotaoContato/BotaoContato'
import styles from './ConteudoServicos.module.css'
import { motion } from 'motion/react'

const ConteudoServicos = () => {
  return (
    <section>
      <div className={styles.containerPrincipalServicos}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className={styles.conteudoServicos}
        >
          <div className={styles.tituloServicos}>
            <h2>Transforme sua ideia em um projeto inesquecível!</h2>
          </div>

          <div className={styles.textoServicos}>
            <p>
              Sua marca merece ser memorizada, não apenas mais uma na internet.
              Eu crio experiências digitais transformadoras, feitas para
              impactar e conquistar seu público de forma única. Seja um site
              responsivo, uma landing page irresistível ou até mesmo um
              e-commerce, meu objetivo é fazer seu negócio brilhar no mundo
              digital.
            </p>

            <p>
              Com o uso das tecnologias mais modernas e um design que prioriza
              usabilidade e SEO, cada projeto é desenvolvido para ser rápido,
              eficiente e altamente visual. Isso significa mais visibilidade,
              mais clientes e mais resultados.
            </p>

            <p>
              Está pronto para dar o próximo passo e fazer sua marca se
              destacar? Entre em contato comigo e vamos transformar suas ideias
              em realidade!
            </p>

            <p>
              Confira meus serviços abaixo e escolha o que mais atende às suas necessidades.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.containerTabela}
        >
          <table>
            <thead>
              <tr>
                <th>Serviços</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Site Pessoal/Portfólio</td>
              </tr>
              <tr>
                <td>Site Institucional (Empresas)</td>
              </tr>
              <tr>
                <td>Landing Page</td>
              </tr>
              <tr>
                <td>E-commerce Simples</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>

      <BotaoContato />
    </section>
  )
}

export default ConteudoServicos
