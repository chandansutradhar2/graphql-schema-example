import { ApolloConfig } from '@apollo/server';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructorModule } from './instructor/instructor.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    installSubscriptionHandlers:true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    // typePaths: ['./**/*.graphql'],
    // definitions: {
    //   path: './src/type.ts',
    //   outputAs: 'interface'
    // }

  }), InstructorModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
