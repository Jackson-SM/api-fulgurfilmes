import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public sinopse: string

  @column()
  public type: string

  @column()
  public year: number

  @column()
  public seasons: number

  @column()
  public time: string

  @column()
  public episodes: number

  @column()
  public views: number

  @column()
  public classificationIndicative: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
