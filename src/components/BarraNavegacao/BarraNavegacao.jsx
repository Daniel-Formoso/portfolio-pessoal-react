import { TbMenuDeep } from 'react-icons/tb'
import { FaLinkedin } from 'react-icons/fa6'
import { ImGithub } from 'react-icons/im'
import { RiCloseLargeLine } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import stylesBotoes from '../CSS-Botao/Botoes.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import styles from './BarraNavegacao.module.css'

const BarraNavegacao = () => {
  const [abrirMenu, setAbrirMenu] = useState(false)

  const toggleMenu = () => {
    setAbrirMenu(!abrirMenu)

    if (!abrirMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'block'
    }
  }

  return (
    <div className={styles.containerNavegacao}>
      <button className={styles.botaoAbrirMenu} onClick={toggleMenu}>
        <TbMenuDeep />
      </button>

      <AnimatePresence>
        {abrirMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100% ' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className={`${styles.menuHamburguer} ${abrirMenu ? styles.abrirMenu : ''}`}
          >
            <button className={styles.botaoFecharMenu} onClick={toggleMenu}>
              <RiCloseLargeLine />
            </button>

            <nav onClick={toggleMenu}>
              <motion.div
                initial={{ y: '-1000%', rotate: -90 }}
                animate={{ y: '0%', rotate: -90 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  ease: 'easeOut',
                  delay: 0.5,
                }}
                className={styles.containerTextoMenu}
              >
                <p>Menu</p>
              </motion.div>

              <ul>
                <motion.li
                  initial={{ y: '-1000%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 0.8,
                  }}
                >
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li
                  initial={{ y: '-1000%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 1,
                  }}
                >
                  <Link to="/PaginaSobreMim">Quem Sou</Link>
                </motion.li>
                <motion.li
                  initial={{ y: '-1000%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 1.2,
                  }}
                >
                  <Link to="/PaginaProjetos">Projetos</Link>
                </motion.li>
                <motion.li
                  initial={{ y: '-1000%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 1.4,
                  }}
                >
                  <Link to="/PaginaContato">Contato</Link>
                </motion.li>
              </ul>
            </nav>

            <div className={styles.containerContatoMenuMobile}>
              <div className={styles.containerContato}>
                <motion.button
                  initial={{ y: '-1800%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 1.6,
                  }}
                >
                  <a
                    href="mailto:daniel.formoso100@gmail.com"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <MdEmail className={styles.iconeContato} />
                    E-mail
                  </a>
                </motion.button>
                <motion.button
                  initial={{ y: '-1800%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 1.8,
                  }}
                >
                  <a
                    href="tel:+5521992379899"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <FaPhone className={styles.iconeContato} />
                    Telefone
                  </a>
                </motion.button>
              </div>

              <div className={styles.containerRedes}>
                <motion.button
                  initial={{ y: '-1800%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 2,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/danielformoso/"
                    target="_blank"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <FaLinkedin className={styles.iconeRedes} />
                    Linkedin
                  </a>
                </motion.button>
                <motion.button
                  initial={{ y: '-1800%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    ease: 'easeOut',
                    delay: 2.2,
                  }}
                >
                  <a
                    href="https://github.com/Daniel-Formoso"
                    target="_blank"
                    className={stylesBotoes.hvrSweepToRight}
                  >
                    <ImGithub className={styles.iconeRedes} />
                    Github
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BarraNavegacao
