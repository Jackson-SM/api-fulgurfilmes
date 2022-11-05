import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.attempt(email, password, {
      expiresIn: '30 mins',
    })

    return token.toJSON()
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()

    return {
      revoked: auth.isLoggedIn,
    }
  }
}
