import { registerAs, } from '@nestjs/config';

interface ConfigDatabase {
    user: string;
    password: string;
    host: string;
    port: number;
    name: string;
}

export const dbConfig = registerAs('database', (): ConfigDatabase => {

    return ({
        host: '',
        port: 0,
        user: '',
        password: '',
        name: '',
    });
})