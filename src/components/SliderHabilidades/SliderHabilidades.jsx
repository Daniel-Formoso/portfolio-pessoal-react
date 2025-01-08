import {
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaBootstrap,
  FaSearch,
} from 'react-icons/fa'
import { HiDeviceTablet } from "react-icons/hi2";
import { SiJavascript } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

import { motion } from 'motion/react'
import styles from './SliderHabilidades.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import BotaoCertificados from '../BotaoCertificados/BotaoCertificado'

const SliderHabilidades = () => {
  const icones = [
    { id: 1, icone: <FaHtml5 /> },
    { id: 2, icone: <FaCss3Alt /> },
    { id: 5, icone: <SiJavascript /> },
    { id: 4, icone: <FaReact /> },
    { id: 6, icone: <FaJava /> },
    { id: 7, icone: <FaPython /> },
    { id: 3, icone: <FaFigma /> },
    { id: 8, icone: <FaGithub /> },
    { id: 9, icone: <FaBootstrap /> },
    { id: 10, icone: <VscVscode /> },
    { id: 11, icone: <HiDeviceTablet /> },
    { id: 12, icone: <FaSearch /> },
  ]

  return (
    <>
      <section id="especializacoes">
        <motion.div
        className={styles.container}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: .5 }}
        >
          <div className={styles.flex}>
            <div className={styles.tituloMinhasHabilidades}>
              <h2>Especializações</h2>
            </div>
            <div className={styles.textoHabilidades}>
              <p>
                Com experiência sólida em desenvolvimento front-end, ofereço
                soluções personalizadas e responsivas, sempre focadas em uma
                experiência de usuário de qualidade.
              </p>
            </div>
          </div>

          <div className={styles.containerPrincipalSlider}>
            <Swiper
              className={styles.containerSlider}
              modules={[Autoplay]}
              slidesPerView={4}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 6,
                },
                1200: {
                  slidesPerView: 7,
                },
                1920: {
                  slidesPerView: 11,
                },
              }}
            >
              {icones.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.iconeSlider}>{item.icone}</div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className={styles.flex}>
            <div className={styles.textoHabilidades}>
              <p>
                Ao longo da minha carreira, investi no aprimoramento contínuo
                das minhas habilidades. Minhas certificações em desenvolvimento
                front-end garantem que estou sempre alinhado com as melhores
                práticas e pronto para entregar soluções de qualidade.
              </p>
            </div>

            <BotaoCertificados />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default SliderHabilidades
