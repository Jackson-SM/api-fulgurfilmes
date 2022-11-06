import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '30 mins',
    })

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
}
