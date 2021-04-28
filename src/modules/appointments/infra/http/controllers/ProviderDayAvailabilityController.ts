import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { provider_id } = request.params; // aqui foi feito desestruturação, já no monthAvailability não
        const { day, month, year } = request.body; // o motivo foi pq eu quis ver e entender as duas formas funcionando

        const listProviderDayAvailability = container.resolve(
            ListProviderDayAvailabilityService,
        );

        const availability = await listProviderDayAvailability.execute({
            provider_id,
            day,
            month,
            year,
        });

        return response.json(availability);
    }
}
