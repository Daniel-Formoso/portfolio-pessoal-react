import React from 'react'
import ApresentacaoContato from '../../components/PaginaContato/Apresentacao/Apresentacao'
import styles from './Contato.module.css'
import TextoFormulario from '../../components/PaginaContato/TextoFormulario/TextoFormulario'
import Formulario from '../../components/PaginaContato/Formulario/Formulario'

const PaginaContato = () => {
  return (
    <>
      <div className={styles.apresentacaoContato}>
        <ApresentacaoContato />
      </div>
      <TextoFormulario />
      <Formulario />
    </>
  )
}

export default PaginaContato
