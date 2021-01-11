import { fakeDb } from "../db/FakeDb"
import { generateId } from "../utils/GenerateId"


class BurgersService {
  getAll() {
    return fakeDb.burgers
  }

  getOne(req) {
    let burger = fakeDb.burgers.find(b => b.id == req.params.id)
    return burger
  }

  edit(data) {
    let burger = fakeDb.burgers.findIndex(b => b.id == data.params.id)
    data.body.id = fakeDb.burgers[burger].id
    fakeDb.burgers.splice(burger, 1, data.body)
    return fakeDb.burgers
  }

  create(data) {
    data.body.id = generateId()
    fakeDb.burgers.push(data.body)
    return fakeDb.burgers
  }

  delete(data) {
    let burger = fakeDb.burgers.findIndex(b => b.id == data.params.id)
    fakeDb.burgers.splice(burger, 1)
    return fakeDb.burgers
  }

}

export const burgersService = new BurgersService()