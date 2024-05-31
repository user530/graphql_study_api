import { registerAs } from '@nestjs/config';

interface ConfigHTTP {
    host: string;
    port: number;
}

export const httpConfig = registerAs('http', (): ConfigHTTP => {
    const DEFAULT_HOST = 'localhost';
    const DEFAULT_PORT = 5001;
    const parsedPort = parseInt(process.env.PORT);

    return ({
        host: process.env.HOST || DEFAULT_HOST,
        port: (
            isNaN(parsedPort)
                ? DEFAULT_PORT
                : parsedPort
        ),
    });
})