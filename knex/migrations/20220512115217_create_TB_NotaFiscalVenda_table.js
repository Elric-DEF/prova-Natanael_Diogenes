/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.increments('id').primary()
        table.integer('código').notNullable()
        table.timestamp('data')
            .defaultTo(knex.fn.now())
        table.float('valorNota').notNullable()
        table.foreign('cliente.id').references('TB_CLIENTE.id')
        table.foreign('itens').references('TB_ITEM_NOTA_FISCAL.id')
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
};
