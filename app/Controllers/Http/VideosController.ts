import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Video from 'App/Models/Video'

export default class VideosController {
  public async index({}: HttpContextContract) {
    const videos = await Video.all()

    return videos
  }

  public async store({ request }: HttpContextContract) {
    const { title, sinopse, year, type, seasons, time, episodes, views, classificationIndicative } =
      request.only([
        'title',
        'sinopse',
        'year',
        'type',
        'seasons',
        'time',
        'episodes',
        'views',
        'classificationIndicative',
      ])

    const video = await Video.create({
      title,
      sinopse,
      year,
      type,
      seasons,
      time,
      episodes,
      views,
      classificationIndicative,
    })

    return video
  }

  public async show({ params }: HttpContextContract) {
    const video = await Video.findOrFail(params.id)

    return video
  }

  public async update({ request }: HttpContextContract) {}

  public async destroy({ params }: HttpContextContract) {
    const video = await Video.findOrFail(params.id)

    await video.delete()
  }
}
