
import express, { Application } from 'express';
import { ConfigServer } from '../src/constants/ConfigServer';
import { startApp } from '../src/infrastructure/webserver/server';

describe('Start web Server', () => {
    test('Start Server succesfull', async () => {
        
        const appExpress = {
            listen: jest.fn((_port: number, callback?: () => void) => {
                callback();
            }) as unknown as jest.MockedFunction<Application['listen']>
        } as unknown as jest.MockedFunction<express.Express>;
        
        const start = startApp({
            appExpress,
            configuration: ConfigServer            
        });

        start();

        expect((appExpress.listen as jest.Mock).mock.calls[0][0]).toEqual(ConfigServer.port);
    });
});