import styles from './ConteudoPolitica.module.css'
import { motion } from 'motion/react'

const ConteudoPrivacidade = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.containerConteudo}
      >
        <div className={styles.titulo}>
          <h2>Política de Privacidade</h2>
        </div>
        <div className={styles.texto}>
          <p>
            Sua privacidade é muito importante para nós. Esta Política de
            Privacidade explica como coletamos, usamos e protegemos suas
            informações pessoais quando você acessa e utiliza o nosso portfólio
            online.
          </p>
        </div>

        <div className={styles.infoColetadas}>
          <h2>Informações Coletadas</h2>

          <p>
            Coleto as seguintes informações pessoais quando você preenche
            formulários de contato em meu site:
          </p>

          <div className={styles.listaInformacoes}>
            <ul>
              <li>Nome</li>
              <li>Telefone</li>
              <li>E-mail</li>
            </ul>
          </div>

          <p>
            Essas informações são coletadas com o seu consentimento quando você
            decide entrar em contato comigo para perguntas, comentários ou para
            solicitar mais informações sobre meus serviços.
          </p>
        </div>

        <div className={styles.compartilhamentoInfo}>
          <h2>Compartilhamento de Informações</h2>

          <p>
            Não compartilho suas informações pessoais com terceiros, exceto
            quando necessário para cumprir com obrigações legais ou se tivermos
            permissão explícita para isso. Não vendemos nem alugamos seus dados
            para ninguém.
          </p>
        </div>

        <div className={styles.contatoPrivacidade}>
          <h2>Contato</h2>
          <p>
            Se você tiver qualquer dúvida sobre esta Política de Privacidade ou
            sobre o tratamento das suas informações pessoais, entre em contato
            através do e-mail: daniel.formoso100@gmail.com ou pelo formulário de
            contato disponível no meu site.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default ConteudoPrivacidade
