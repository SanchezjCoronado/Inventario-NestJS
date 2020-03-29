import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from 'src/inventario/services/product/product.service';
import { Product } from 'src/models/product.interface';

@Controller('product')
export class ProductController {
    constructor(private productServices:ProductService){}

    @Post()
    addProduct(@Body()productModel:Product):any{
        return this.productServices.saveProduct(productModel);
    }

    @Get()
    getProduct():any{
        return this.productServices.findAll();
    }

    @Get(':id')
    getOneProduct(@Param()params):any{
        return this.productServices.findOnProduct(params.id);
    }

    @Put(':id')
    updateProduct(@Body()productModel:Product,@Param() params):any{
        return this.productServices.updateProduct(params.id, productModel);
    }

    @Delete(':id')
    deleteProduct(@Param() params):any{
        return this.productServices.deleteProduct(params.id);
    }
}
