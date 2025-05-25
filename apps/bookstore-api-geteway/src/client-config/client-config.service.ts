import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class ClientConfigService {
    constructor(private readonly config: ConfigService) {}

    getBookClientPort(): number {
        return this.config.get<number>('BOOKS_CLIENT_PORT') ?? 3001;
    }

    getUserClientPort(): number {
        return this.config.get<number>('USERS_CLIENT_PORT') ?? 3002;
    }

    get booksClientOptions(): ClientOptions {
        return {
            transport: Transport.TCP,
            options: {
                port: this.getBookClientPort(),
            },
        };
    }

    get usersClientOptions(): ClientOptions {
        return {
            transport: Transport.TCP,
            options: {
                port: this.getUserClientPort(),
            },
        };
    }
}