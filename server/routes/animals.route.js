const Controller = require('../controllers/animals.controller');

module.exports = app => {
    app.get('/api/obj/all', Controller.findAll);
    app.get('/api/obj/:id', Controller.find)
    app.post('/api/obj', Controller.create)
    app.put('/api/obj/:id', Controller.update)
    app.delete('/api/obj/:id', Controller.delete)
}