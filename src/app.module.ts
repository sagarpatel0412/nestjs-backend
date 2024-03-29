import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from './Pokemon/pokemon.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CelestialPostModule } from './celestial-post/celestial-post.module';
import { PostCommentsModule } from './post-comments/post-comments.module';
import { PostLikesModule } from './post-likes/post-likes.module';
import { HttpModule } from '@nestjs/axios';
import { CarasoulModule } from './carasoul/carasoul.module';
import { EventModule } from './event/event.module';
import { UsersEventsModule } from './users_events/users_events.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      replication: {
        master: {
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'root',
          database: 'nestjs',
        },
        slaves: [
          {
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nestjs',
          },
        ],
      },
      // entities: [PokemonEntity],
      autoLoadEntities: true,
      // migrations: ['migrations/*{.ts,.js}'],
      // migrationsTableName: 'migrations_typeorm',
      // migrationsRun: true,
      // migrations: ['../src/migrations/*.ts'],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql',
      playground: true,
      path: '/graphql',
      driver: ApolloDriver,
      cors: {
        credentials: true,
        origin: true,
      },
    }),
    PokemonModule,
    UserModule,
    AuthModule,
    CelestialPostModule,
    PostCommentsModule,
    PostLikesModule,
    HttpModule,
    CarasoulModule,
    EventModule,
    UsersEventsModule,
    NewsletterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//PK_38e35d22994b239b354e4d622c4