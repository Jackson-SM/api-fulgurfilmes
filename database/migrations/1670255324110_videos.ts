import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'videos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().notNullable()
      table.string('title').notNullable()
      table.string('sinopse').notNullable()
      table.string('type').notNullable()
      table.integer('year').notNullable()
      table.integer('seasons')
      table.string('time')
      table.integer('episodes').defaultTo(0)
      table.integer('views').defaultTo(0)
      table.integer('classification_indicative').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
