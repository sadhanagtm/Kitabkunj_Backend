import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { BookController } from './book/book.controller';
import { ContentModule } from './content/content.module';
import { ContentController } from './content/content.controller';
// import { RegisterModule } from './register/register.module'
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
// import { TestionialsModule } from './testionials/testionials.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Aribt45#',
      database: 'Backend',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities:false,
      synchronize: false,
    }),
    AuthModule,
    ProductModule,
    ContentModule,
    // RegisterModule,
    UserModule,
    ContactModule,
    // TestionialsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
