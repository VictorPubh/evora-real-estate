
export default (req, res) => {
    res.status(200).json(
        [{
            title: 'História',
            path: 'history'
        }, {
            title: 'Imóveis',
            path: 'properties'
        }, {
            title: 'Metodologia',
            path: 'metodology'
        }, {
            title: 'Contato',
            path: 'contact'
        }])
  }
  