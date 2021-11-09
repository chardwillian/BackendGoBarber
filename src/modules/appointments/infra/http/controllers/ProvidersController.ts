import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListProvidersClientService from '@modules/appointments/services/ListProvidersService';
// import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
export default class ProvidersClientController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;

        const listProviders = container.resolve(ListProvidersClientService);

        const providers = await listProviders.execute({
            user_id,
        });

        return response.json(classToClass(providers));
    }
}
