import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordREmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email } = request.body;

        const sendForgotPasswordEmail = container.resolve(
            SendForgotPasswordREmailService,
        );

        await sendForgotPasswordEmail.execute({
            email,
        });

        return response.status(204).json();
    }
}
