import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Video from 'App/Models/Video'

export default class VideosController {
  public async index({}: HttpContextContract) {
    const videos = await Video.all()

    return videos
  }

  public async store({ response, request }: HttpContextContract) {
    const { title, sinopse, year, type, seasons, time, episodes, views, classificationIndicative, cover } =
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
        'cover'
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

    const coverImage = request.file('cover')

    if(!coverImage){
      return "Please upload cover image"
    }

    await coverImage.move(Application.publicPath(`images/${video.id}`), {
      name: `cover.${coverImage.extname}`
    })

    response.send({
      message: 'Success'
    })
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
