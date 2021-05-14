import imgMobileOne from '../../public/images/Carousel1.png'
import imgMobilelTwo from '../../public/images/Carousel2.png'

export default (req, res) => {
    res.status(200).json(
        [{
            url: imgMobileOne,
            title: 'Bem-vindo a Évora.',
            sub: 'Aqui na Évora nós oferecemos uma grande escala de serviços, assim como a venda e locação de imóveis.'
        },
        {
            url: imgMobilelTwo,
            title: 'Bem-vindo a Évora.',
            sub: 'Aqui na Évora nós oferecemos uma grande escala de serviços, assim como a venda e locação de imóveis.'
        }])
  }
  