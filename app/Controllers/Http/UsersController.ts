import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    const { email, name, password } = request.only(['email', 'name', 'password'])
    const user = await User.create({
      email,
      name,
      password,
    })

    return user
  }

  public async index({}: HttpContextContract) {
    const users = await User.all()

    return users
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return user
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const { name, password } = request.only(['name', 'password'])

    user.merge({ name, password })

    await user.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
