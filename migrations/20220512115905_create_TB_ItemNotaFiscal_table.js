/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.increments('id').primary()
        table.integer('sequencial').notNullable()
        table.integer('quantidade').notNullable()
        table.integer('valor').notNullable()
        table.integer('produto_id').unsigned()
        table.integer('notaFiscal_id').unsigned()
        table.foreign('produto_id').references('TB_PRODUTO.id')
        table.foreign('notaFiscal_id').references('TB_NOTA_FISCAL_VENDA.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
};
