import styles from './BotoesSobreMim.module.css'
import { GoArrowRight } from 'react-icons/go'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'
import { RiFolderDownloadLine } from 'react-icons/ri'

const BotoesSobreMim = () => {
  return (
    <div className={styles.containerBotaoCurriculo}>
      <button>
        <a
          href="https://drive.google.com/drive/folders/1ZCKmyOWNTVLSNkabSY559OYD_g9sCHAY"
          target="_blank"
          className={stylesBotoes.hvrSweepToRight}
        >
          <RiFolderDownloadLine className={styles.iconeCurriculo} />
          Currículo
        </a>
      </button>

      <button>
        <a href="/PaginaSobreMim" className={stylesBotoes.hvrSweepToRight}>
          <GoArrowRight className={styles.iconeSeta} />
          Saiba Mais Sobre Mim
        </a>
      </button>
    </div>
  )
}

export default BotoesSobreMim
