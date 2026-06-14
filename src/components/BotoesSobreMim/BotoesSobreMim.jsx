import styles from './BotoesSobreMim.module.css'
import { GoArrowRight } from 'react-icons/go'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'
import { RiFolderDownloadLine } from 'react-icons/ri'

const BotoesSobreMim = () => {
  return (
    <div className={styles.containerBotaoCurriculo}>
      <button>
        <a
          href="https://drive.google.com/file/d/1_lAW-cwWfrvahs3UQMB5-2-9ZOZNBM5M/view?usp=sharing"
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
