import imgWebOne from '../../public/images/Carousel1-web.png'
import imgWebTwo from '../../public/images/Carousel2-web.png'

export default (req, res) => {
    res.status(200).json(
        [{
            url: imgWebOne,
            title: 'Bem-vindo a Évora.',
            sub: 'Aqui na Évora nós oferecemos uma grande escala de serviços, assim como a venda e locação de imóveis.'
        },
        {
            url: imgWebTwo,
            title: 'Bem-vindo a Évora.',
            sub: 'Aqui na Évora nós oferecemos uma grande escala de serviços, assim como a venda e locação de imóveis.'
        }])
  }
  