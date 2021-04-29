import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profilecontroller = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profilecontroller.show);
profileRouter.put(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            old_password: Joi.string(),
            password: Joi.when('old_password', {
                is: Joi.exist(),
                then: Joi.required(),
            }),
            password_confirmation: Joi.when('password', {
                is: Joi.exist(),
                then: Joi.valid(Joi.ref('password')).required(),
            }),
        },
    }),
    profilecontroller.update,
);

export default profileRouter;
