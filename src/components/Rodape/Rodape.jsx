import BotoesContatoRodape from '../BotoesRodape/BotoesRodape'
import styles from './Rodape.module.css'

const Rodape = () => {
  return (
    <footer>
      <div className={styles.containerRodape}>
        <nav className={styles.navRodape}>
          <ul className={styles.listaRodape}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/PaginaSobreMim">Quem Sou</a>
            </li>
            <li>
              <a href="/PaginaProjetos">Projetos</a>
            </li>
            <li>
              <a href="/PaginaContato">Contato</a>
            </li>
          </ul>
        </nav>

        <BotoesContatoRodape />

        <div className={styles.containerInfoAutor}>
          <p>Desenvolvido por Daniel Formoso, 2025</p>
          <div className={styles.politicasDePrivacidade}>
            <a href="/PaginaPoliticaPrivacidade">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
