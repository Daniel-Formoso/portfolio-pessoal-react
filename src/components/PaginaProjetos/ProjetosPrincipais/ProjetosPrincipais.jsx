import styles from './ProjetosPrincipais.module.css'
import { motion } from 'motion/react'
import { IoCodeOutline } from 'react-icons/io5'
import { IoIosEye } from 'react-icons/io'
import stylesBotoes from '../../CSS-Botao/Botoes.module.css'

const ProjetosPrincipais = () => {
  const projetos = [
    {
      id: 1,
      nome: 'Fink Estamparia - Landing Page',
      imagem: '/assets/mockups/mockup-fink-estamparia.webp',
      descricao:
        'Landing page desenvolvida para a FINK Estamparia, apresentando seus produtos personalizados e facilitando o contato com os clientes. O projeto tem uma navegação simples e interface moderna.',
      site: 'https://www.finkestamparia.com.br/',
      github: 'https://github.com/Daniel-Formoso/finkestamparia',
    },
    {
      id: 2,
      nome: 'Elite Gym - Landing Page',
      imagem: '/assets/mockups/mockup-elite-gym.webp',
      descricao:
        'Um site fictício desenvolvido para uma academia, destacando seus serviços, planos e depoimentos. O projeto apresenta um design responsivo, com uma interface moderna e navegação intuitiva.',
      site: 'https://elite-gym-eta.vercel.app/',
      github: 'https://github.com/Daniel-Formoso/elite-gym',
    },
    {
      id: 3,
      nome: 'Conversor de Moedas',
      imagem: '/assets/mockups/mockup-conversor.webp',
      descricao:
        'Um conversor de moedas simples que utiliza a API AwesomeAPI para obter taxas de câmbio em tempo real. O projeto oferece uma interface fácil de usar, permitindo a conversão rápida entre diferentes moedas globais.',
      site: 'https://conversor-moedas-two.vercel.app/',
      github: 'https://github.com/Daniel-Formoso/conversor-moedas',
    },
    {
      id: 4,
      nome: 'DermaCenter Louzada',
      imagem: '/assets/mockups/mockup-dermacenter.webp',
      descricao:
        'Um site fictício desenvolvido para uma clínica dermatológica, com foco em exibir os serviços oferecidos, informações sobre os profissionais e uma interface limpa e moderna, priorizando a experiência do usuário.',
      site: 'https://famous-madeleine-da03a2.netlify.app/',
      github: 'https://github.com/Daniel-Formoso/dermacenter',
    },
    {
      id: 5,
      nome: 'Formulário de Inscrição',
      imagem: '/assets/mockups/mockup-newsletter.webp',
      descricao:
        'Uma página de inscrição para newsletter com validação de e-mail. O projeto garante que apenas e-mails válidos sejam submetidos e oferece uma forma eficiente de coletar dados dos usuários para futuras comunicações.',
      site: 'https://projeto-newsletter.netlify.app/',
      github: 'https://github.com/Daniel-Formoso/pagina-inscricao-newsletter',
    },
    {
      id: 6,
      nome: 'Perfil de Links Sociais',
      imagem: '/assets/mockups/mockup-perfil-links.webp',
      descricao:
        'Uma página responsiva que organiza links para redes sociais de forma simples e prática. O projeto proporciona uma navegação rápida para acessar perfis como Instagram, LinkedIn e GitHub.',
      site: 'https://stalwart-mousse-aa8647.netlify.app/',
      github: 'https://github.com/Daniel-Formoso/perfil-links-sociais',
    },
    {
      id: 7,
      nome: 'Portfólio Pessoal',
      imagem: '/assets/mockups/mockup-portfolio.webp',
      descricao:
        'Um portfólio simples e responsivo que exibe meus projetos de desenvolvimento front-end. O projeto destaca minhas habilidades com HTML, CSS e JavaScript, com foco em uma navegação intuitiva e design limpo.',
      site: 'https://meu-site-murex-chi.vercel.app/',
      github: 'https://github.com/Daniel-Formoso/meu-portfolio-pessoal',
    },
  ]

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className={styles.containerProjetosPrincipais}
      >
        {projetos.map((projeto) => {
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

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className={styles.containerProjetosPrincipais}
      >
        {projetos.map((projeto) => {
          return (
            <div key={projeto.id} className={styles.containerPaginaProjetos}>
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className={styles.imagemProjeto}
              />
              <div className={styles.containerCardProjeto}>
                <div className={styles.tituloCard}>
                  <h2>{projeto.nome}</h2>
                </div>
                <div className={styles.textoCard}>
                  <p>{projeto.descricao}</p>
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
            </div>
          )
        })}
      </motion.div> */}
    </section>
  )
}

export default ProjetosPrincipais
