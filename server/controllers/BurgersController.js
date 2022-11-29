// import { dbContext } from "../db/DbContext.js";
import { burgersService } from "../services/BurgersServices.js";
import BaseController from "../utils/BaseController.js";




export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .delete('/:id', this.remove)
      .put('/:id', this.edit)
  }

  async getOne(req, res, next) {
    try {
      const burger = await burgersService.getOne(req.params.id)
      return res.send({ burger, message: 'the burger' })
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newBurger = await burgersService.create(req.body)
      return res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const message = await burgersService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      const burgerEdit = await burgersService.edit(req.params.id)
      return res.send(burgerEdit)
    } catch (error) {
      next(error)
    }
  }
}