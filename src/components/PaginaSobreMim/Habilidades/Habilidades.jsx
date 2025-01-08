import styles from './Habilidades.module.css'
import { motion } from 'motion/react'
import {
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaBootstrap,
  FaSearch,
} from 'react-icons/fa'
import { HiDeviceTablet } from 'react-icons/hi2'
import { SiJavascript } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const HabilidadesSobreMim = () => {
  const iconesHabilidades = [
    { id: 1, icone: <FaHtml5 />, nome: 'HTML5', cor: '#E44D26' },
    { id: 2, icone: <FaCss3Alt />, nome: 'CSS3', cor: '#1572b6' },
    { id: 5, icone: <SiJavascript />, nome: 'JavaScript', cor: '#F7DF1E' },
    { id: 4, icone: <FaReact />, nome: 'React', cor: '#61DAFB' },
    { id: 6, icone: <FaJava />, nome: 'Java', cor: '#007396' },
    { id: 7, icone: <FaPython />, nome: 'Python', cor: '#306998' },
    { id: 3, icone: <FaFigma />, nome: 'Figma', cor: '#F24E1E' },
    { id: 8, icone: <FaGithub />, nome: 'Github', cor: '#181717' },
    { id: 9, icone: <FaBootstrap />, nome: 'Bootstrap', cor: '#563D7C' },
    { id: 10, icone: <VscVscode />, nome: 'VSCode', cor: '#007ACC' },
    { id: 11, icone: <HiDeviceTablet />, nome: 'Design Responsivo', cor: '#F7DF1E' },
    { id: 12, icone: <FaSearch />, nome: 'SEO', cor: '#1572B6' },
  ]

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className={styles.containerHabilidades}
      >
        <div className={styles.tituloConteudo}>
          <h2>Habilidades</h2>
        </div>
        <div className={styles.textoConteudo}>
          {iconesHabilidades.map((item) => {
            return (
              <div key={item.id} style={{ '--hover-cor': item.cor }}>
                <div className={styles.habilidades}>
                  <span>{item.icone}</span>
                  <p>{item.nome}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default HabilidadesSobreMim
