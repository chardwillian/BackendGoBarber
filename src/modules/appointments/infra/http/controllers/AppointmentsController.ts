import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

export default class AppointmentsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointment = container.resolve(CreateAppointmentService);

        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider_id,
        });

        return response.json(appointment);
    }

    public async list(request: Request, response: Response): Promise<Response> {
        const AppointmentRepository = container.resolve<
            IAppointmentsRepository
        >('AppointmentsRepository');

        const appointmentAllAppointment = await AppointmentRepository.listAll();

        return response.json(appointmentAllAppointment);
    }
}
