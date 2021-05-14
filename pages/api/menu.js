
export default (req, res) => {
    res.status(200).json(
        [{
            title: 'História',
            path: 'history'
        }, {
            title: 'Imóveis',
            path: 'properties'
        }, {
            title: 'Avaliação',
            path: 'rate'
        }, {
            title: 'Clientes',
            path: 'customers'
        }, {
            title: 'Contato',
            path: 'contact'
        }])
  }
  