'use strict'

const Property = use("App/Models/Property")

class PropertyController {

  async index () {
    const properties = Property.all()

    return properties
  
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PropertyController
