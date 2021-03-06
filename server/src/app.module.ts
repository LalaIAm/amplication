import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { HouseholdModule } from "./household/household.module";
import { HouseholdCalendarModule } from "./householdCalendar/householdCalendar.module";
import { EventModule } from "./event/event.module";
import { LocationModule } from "./location/location.module";
import { ListModule } from "./list/list.module";
import { ItemModule } from "./item/item.module";
import { NoteModule } from "./note/note.module";
import { ForumModule } from "./forum/forum.module";
import { PostModule } from "./post/post.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    HouseholdModule,
    HouseholdCalendarModule,
    EventModule,
    LocationModule,
    ListModule,
    ItemModule,
    NoteModule,
    ForumModule,
    PostModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
