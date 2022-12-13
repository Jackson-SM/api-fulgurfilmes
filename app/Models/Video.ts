import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import AssetsVideo from './AssetsVideo'

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  public id: string

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

  @hasOne(() => AssetsVideo)
  public assets: HasOne<typeof AssetsVideo>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
