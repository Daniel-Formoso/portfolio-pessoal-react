import ApresentacaoPolitica from '../../components/PaginaPoliticaPrivacidade/Apresentacao/Apresentacao'
import ConteudoPrivacidade from '../../components/PaginaPoliticaPrivacidade/ConteudoPrivacidade/ConteudoPolitica'
import styles from './Privacidade.module.css'

const PoliticaPrivacidade = () => {
  return (
    <>
      <div className={styles.politicaPrivacidade}>
        <ApresentacaoPolitica />
      </div>
      <ConteudoPrivacidade />
    </>
  )
}

export default PoliticaPrivacidade
