import styles from './BotoesRodape.module.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa6'
import { ImGithub } from 'react-icons/im'
import { FaCode } from 'react-icons/fa'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'

const BotoesContatoRodape = () => {
  return (
    <div className={styles.containerContatoRodape}>
      <div className={styles.logo}>
        <a href="/">
          <FaCode className={styles.iconeLogo} />
          <p>DanielDev</p>
        </a>
      </div>

      <div className={styles.containerBotoesRodape}>
        <button>
          <a
            href="mailto:daniel.formoso100@gmail.com"
            className={stylesBotoes.hvrSweepToRightRodape}
          >
            <MdEmail className={styles.iconeContato} />
            E-mail
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/danielformoso/"
            target="_blank"
            className={stylesBotoes.hvrSweepToRightRodape}
          >
            <FaLinkedin className={styles.iconeContato} />
            Linkedin
          </a>
        </button>
        <button>
          <a
            href="https://github.com/Daniel-Formoso"
            target="_blank"
            className={stylesBotoes.hvrSweepToRightRodape}
          >
            <ImGithub className={styles.iconeContato} />
            Github
          </a>
        </button>
      </div>
    </div>
  )
}

export default BotoesContatoRodape
