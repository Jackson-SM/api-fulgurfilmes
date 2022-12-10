import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.use('api').attempt(email, password)

    return token.toJSON()
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').logout()

    return {
      revoke: true,
    }
  }

  public async verify({ auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    return {
      user,
    }
  }

  public async register({ auth, request }: HttpContextContract) {
    const { email, name, password } = request.only(['email', 'name', 'password'])

    const user = await User.create({
      email,
      name,
      password,
    })

    const token = await auth.use('api').attempt(email, password)

    return token.toJSON()
  }
}
