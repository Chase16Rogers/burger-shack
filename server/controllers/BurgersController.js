import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";


export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  getAll(req, res, next) {
    try {
      res.send(burgersService.getAll())
    } catch (error) {
      next(error)
    }
  }

  getOne(req, res, next,) {
    try {
      res.send(burgersService.getOne(req))
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      res.send(burgersService.create(req))
    } catch (error) {
      next(error);
    }
  }

  edit(req, res, next) {
    try {
      res.send(burgersService.edit(req))
    } catch (error) {
      next(error);
    }
  }

  delete(req, res, next) {
    try {
      return res.send(burgersService.delete(req))
    } catch (error) {
      next(error);
    }
  }

}