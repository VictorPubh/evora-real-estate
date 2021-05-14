import propertiesOne from '../../public/images/imoveis/1.png'
import propertiesTwo from '../../public/images/imoveis/2.jpg'
import propertiesThree from '../../public/images/imoveis/3.jpg'
import propertiesFour from '../../public/images/imoveis/4.jpg'

export default (req, res) => {
    res.status(200).json([
        {
            url: propertiesOne,
            title: 'Casa de 4 Quartos',
            details: 'O quarto contém 4 quartos, 2 banheiros, entrada frontal e saída dos fundos.',
            sale: false
        },
        {
            url: propertiesTwo,
            title: 'Casa de 1 Quarto',
            details: 'O quarto contém 1 quartos, 1 banheiros, entrada frontal e garagem.',
            sale: true
        },
        {
            url: propertiesOne,
            title: 'Casa de 4 Quartos',
            details: 'O quarto contém 4 quartos, 2 banheiros, entrada frontal e saída dos fundos.',
            sale: false
        },
        {
            url: propertiesTwo,
            title: 'Casa de 1 Quarto',
            details: 'O quarto contém 1 quartos, 1 banheiros, entrada frontal e garagem.',
            sale: true
        }
    ])
}