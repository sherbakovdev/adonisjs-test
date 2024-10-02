import { Get, Middleware } from '@softwarecitadel/girouette'

import { HttpContext } from '@adonisjs/core/http'
import { middleware } from '#start/kernel'

export default class CustomsController {
  @Get('/app', 'app.show')
  @Middleware(middleware.auth())
  async show({ inertia }: HttpContext) {
    return inertia.render('home')
  }
}
