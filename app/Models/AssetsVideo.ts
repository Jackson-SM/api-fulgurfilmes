import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AssetsVideo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cover_image: string

  @column()
  public background_image: string

  @column()
  public videoId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
