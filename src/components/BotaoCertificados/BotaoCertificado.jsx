import { RiMedalFill } from 'react-icons/ri'
import styles from './BotaoCertificado.module.css'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'

const BotaoCertificados = () => {
  return (
    <div className={styles.containerBotaoCertificados}>
      <button>
        <a
          href="https://drive.google.com/drive/u/2/folders/1VXz-71R669YeBrVOmnqQUVlAXYYuvulR"
          target="_blank"
          className={stylesBotoes.hvrSweepToRight}
        >
          <RiMedalFill className={styles.iconeCertificado} />
          Meus Certificados
        </a>
      </button>
    </div>
  )
}

export default BotaoCertificados
