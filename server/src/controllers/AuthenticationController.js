const {User} = require('../models')

module.exports = {
  async register(req, res){
    try {
      const user = await User.create(res, req)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
      // email already exist
    }

  }
}
