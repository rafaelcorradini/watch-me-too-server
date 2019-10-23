exports.up = async function up(knex) {
  await knex.schema.createTable('playlist_videos', (table) => {
    table
      .increments('id')
      .unsigned()
      .notNullable()
      .primary(['user_job_pkey']);
    table
      .string('token', 100)
      .notNullable();
    table.string('video', 100);
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = async function down(knex) {
  await knex.schema.dropTable('playlist_videos');
};
