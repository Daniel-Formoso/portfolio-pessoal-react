import styles from './ProjetosHome.module.css'
import { motion } from 'motion/react'
import { IoCodeOutline } from 'react-icons/io5'
import { IoIosEye } from 'react-icons/io'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'

const ProjetosHome = () => {
  const projetosHome = [
    {
      id: 1,
      nome: 'Conversor de Moedas',
      imagem: '/assets/mockups/mockup-conversor.webp',
      descricao:
        'Um conversor de moedas simples que utiliza a API AwesomeAPI para obter taxas de câmbio em tempo real. O projeto oferece uma interface fácil de usar, permitindo a conversão rápida entre diferentes moedas globais.',
      site: 'https://conversor-moedas-two.vercel.app/',
      github: 'https://github.com/Daniel-Formoso/conversor-moedas',
    },
    {
      id: 2,
      nome: 'DermaCenter Louzada',
      imagem: '/assets/mockups/mockup-dermacenter.webp',
      descricao:
        'Um site fictício desenvolvido para uma clínica dermatológica, com foco em exibir os serviços oferecidos, informações sobre os profissionais e uma interface limpa e moderna, priorizando a experiência do usuário.',
      site: 'https://famous-madeleine-da03a2.netlify.app/',
      github: 'https://github.com/Daniel-Formoso/dermacenter',
    },
    {
      id: 3,
      nome: 'Formulário de Inscrição',
      imagem: '/assets/mockups/mockup-newsletter.webp',
      descricao:
        'Uma página de inscrição para newsletter com validação de e-mail. O projeto garante que apenas e-mails válidos sejam submetidos e oferece uma forma eficiente de coletar dados dos usuários para futuras comunicações.',
      site: 'https://projeto-newsletter.netlify.app/',
      github: 'https://github.com/Daniel-Formoso/pagina-inscricao-newsletter',
    },
  ]

  return (
    <section id='projetos'>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: .2 }}
        className={styles.containerProjetosHome}
      >
        {projetosHome.map((projeto) => {
          return (
            <div key={projeto.id} className={styles.projetoCard}>
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className={styles.projetoImagem}
              />
              <div className={styles.containerConteudoCard}>
                <div className={styles.tituloProjeto}>
                  <h2>{projeto.nome}</h2>
                </div>
                <div className={styles.textoProjeto}>
                  <p>{projeto.descricao}</p>
                </div>
              </div>

              <div className={styles.containerBotoesLinks}>
                <button>
                  <a
                    href={projeto.github}
                    target="_blank"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <IoCodeOutline className={styles.iconeBotoesCard} />
                    Ver Código
                  </a>
                </button>
                <button>
                  <a
                    href={projeto.site}
                    target="_blank"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <IoIosEye className={styles.iconeBotoesCard} />
                    Ver Site
                  </a>
                </button>
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default ProjetosHome
