import db from '../models';

const Plans = db.plans;
const Op = db.Sequelize.Op;

const findAll = (req, res) => {
  console.log('here')
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Plans.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving plans.',
      });
    });
};

const findById = (req, res) => {
  const id = req.params.id;
  Plans.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find plan with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving plan with id=' + id,
      });
    });
};

export default {
    findAll,
    findById
}
