import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InventarioModule } from '../inventario/inventario.module';
import { ProductEntity } from '../inventario/entity/product-entity';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'inventario',
            entities: [
                ProductEntity
            ],
            synchronize: true,
        }),
        InventarioModule,
    ]
})
export class DatabaseModule {
    constructor(private readonly connection: Connection) {

    }
}
