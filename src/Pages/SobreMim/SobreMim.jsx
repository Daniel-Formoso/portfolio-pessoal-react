import React from 'react'
import styles from './SobreMim.module.css'
import ApresentacaoSobreMim from '../../components/PaginaSobreMim/Apresentacao/Apresentacao'
import ConteudoSobreMim from '../../components/PaginaSobreMim/ConteudoSobreMim/ConteudoSobreMim'
import HabilidadesSobreMim from '../../components/PaginaSobreMim/Habilidades/Habilidades'

const PaginaSobreMim = () => {
  return (
    <>
      <div className={styles.apresentacao}>
        <ApresentacaoSobreMim />
      </div>
      <ConteudoSobreMim />
      <HabilidadesSobreMim />
    </>
  )
}

export default PaginaSobreMim
