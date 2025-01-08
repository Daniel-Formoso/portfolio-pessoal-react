import styles from './ConteudoSobreMim.module.css'
import { motion } from 'motion/react'
import BotaoContato from './../../BotaoContato/BotaoContato'

const ConteudoSobreMim = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        className={styles.containerConteudoSobreMim}
      >
        <div className={styles.tituloConteudo}>
          <h2>Um Pouco Sobre Mim</h2>
        </div>
        <div className={styles.textoConteudo}>
          <p>
            Sou estudante do 7º período de Sistemas de Informação, com foco em
            desenvolvimento front-end. Tenho sólida experiência em HTML, CSS e
            JavaScript, criando interfaces responsivas e otimizadas para
            dispositivos móveis, sempre priorizando a experiência do usuário e a
            performance das aplicações. Ao longo da minha jornada acadêmica,
            aprendi a importância de utilizar as melhores práticas de desenvolvi
            mento, garantindo que os projetos sejam não apenas funcionais, mas
            também acessíveis e visualmente agradáveis.
          </p>
          <p>
            Recentemente, concluí cursos certificados em HTML, CSS, JavaScript e
            React pela Alura, onde aprofundei meus conhecimentos em design web e
            no desenvolvimento com React, uma das tecnologias que mais tenho me
            dedicado a dominar. Atualmente, estou aprofundando meus
            conhecimentos em React, explorando novos recursos como hooks e
            componentes funcionais, para criar aplicações ainda mais dinâmicas e
            eficientes.
          </p>
          <p>
            Minha trajetória profissional inclui uma experiência como Jovem
            Aprendiz na TV Globo, onde tive a oportunidade de desenvolver
            habilidades valiosas, como trabalho em equipe, comunicação eficaz e
            resolução de problemas. Além disso, estou sempre buscando evoluir
            profissionalmente, aprimorando minhas competências por meio de
            cursos e colocando-as em prática em projetos reais.
          </p>
          <p>
            Além de minha formação técnica, sou apaixonado por aprender e
            aplicar novas tecnologias, e estou sempre em busca de novos desafios
            que me permitam crescer como profissional e contribuir com soluções
            criativas para os projetos dos quais faço parte. Se você está
            procurando um desenvolvedor comprometido e em constante evolução,
            ficarei feliz em colaborar e agregar valor à sua equipe ou projeto.
          </p>
        </div>
      </motion.div>
      <BotaoContato />
    </section>
  )
}

export default ConteudoSobreMim
