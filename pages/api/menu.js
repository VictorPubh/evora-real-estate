
export default (req, res) => {
    res.status(200).json(
        [{
            title: 'História',
            path: 'history'
        }, {
            title: 'Imóveis',
            path: 'properties'
        }, {
            title: 'Serviços',
            path: 'services'
        }, {
            title: 'Metodologia',
            path: 'metodology'
        }])
  }
  