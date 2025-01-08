import styles from './Projetos.module.css'
import ApresentacaoProjetos from '../../components/PaginaProjetos/Apresentacao/Apresentacao'
import ProjetosPrincipais from '../../components/PaginaProjetos/ProjetosPrincipais/ProjetosPrincipais'

const PaginaProjetos = () => {
  return (
    <>
      <div className={styles.apresentacaoProjetos}>
        <ApresentacaoProjetos />
      </div>
      <ProjetosPrincipais />
    </>
  )
}

export default PaginaProjetos
