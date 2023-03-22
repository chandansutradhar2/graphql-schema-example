import { ApolloConfig } from '@apollo/server';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructorModule } from './instructor/instructor.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: './src/type.ts',
      outputAs: 'interface'
    }

  }), InstructorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
