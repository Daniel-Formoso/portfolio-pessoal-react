import ApresentacaoServicos from '../../components/PaginaServicos/Apresentacao/ApresentacaoServicos'
import ConteudoServicos from '../../components/PaginaServicos/ConteudoServicos/ConteudoServicos'
import styles from './Servicos.module.css'

const PaginaServicos = () => {
  return (
    <>
      <div className={styles.apresentacaoServicos}>
        <ApresentacaoServicos />
      </div>
      <ConteudoServicos />
    </>
  )
}

export default PaginaServicos
