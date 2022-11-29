// import { Logger } from "sass"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"




class BurgersService {

  async edit(burgerId) {
    const burger = await this.getOne(burgerId)
    burger.replace()
  }

  async remove(burgerId) {
    const burger = await this.getOne(burgerId)
    let index = dbContext.Burgers.indexOf(burger)
    dbContext.Burgers.splice(index, 1)
    return `${burger.name} removed.`
  }

  async create(burger) {
    logger.log(burger)
    burger.id = dbContext.Burgers[dbContext.Burgers.length - 1].id + 1
    await dbContext.Burgers.push(burger)
    return burger
  }

  async getAll() {
    const burgers = dbContext.Burgers
    return burgers
  }

  async getOne(burgerId) {
    const burger = dbContext.Burgers.find(b => b.id == burgerId)
    if (!burger) throw new BadRequest('no burger found' + burgerId)
    return burger
  }

}

export const burgersService = new BurgersService()