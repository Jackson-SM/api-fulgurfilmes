import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AssetsVideo from 'App/Models/AssetsVideo'
import Video from 'App/Models/Video'
import { cuid } from '@ioc:Adonis/Core/Helpers'

export default class VideosController {
  public async index({}: HttpContextContract) {
    const videos = await Video.query().preload('assets')

    return videos
  }

  public async store({ response, request }: HttpContextContract) {
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

    const coverImage = request.file('cover')
    const backgroundImage = request.file('backgroundImage')

    if (!(coverImage && backgroundImage)) {
      return 'Please upload cover image'
    }

    const coverImageNewName = `${cuid()}.${coverImage.extname}`
    const backgroundImageNewName = `${cuid()}.${backgroundImage.extname}`

    await coverImage.move(Application.publicPath(`images/${video.id}`), {
      name: coverImageNewName,
    })
    await backgroundImage.move(Application.publicPath(`images/${video.id}`), {
      name: backgroundImageNewName,
    })

    const assetsVideo = await AssetsVideo.create({
      cover_image: coverImageNewName,
      background_image: backgroundImageNewName,
      videoId: video.id,
    })

    response.send({
      message: 'Success',
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
