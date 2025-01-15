import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PaginaSobreMim from './Pages/SobreMim/SobreMim'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import PaginaContato from './Pages/Contato/Contato'
import PaginaProjetos from './Pages/Projetos/Projetos'
import PoliticaPrivacidade from './Pages/PoliticaPrivacidade/Privacidade'
import PaginaServicos from './Pages/Servicos/Servicos'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PaginaSobreMim" element={<PaginaSobreMim />} />
        <Route path="/PaginaContato" element={<PaginaContato />} />
        <Route path="/PaginaProjetos" element={<PaginaProjetos />} />
        <Route path="/PaginaServicos" element={<PaginaServicos />} />
        <Route path="/PaginaPoliticaPrivacidade" element={<PoliticaPrivacidade />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
