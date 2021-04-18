import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const profilecontroller = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profilecontroller.show);
profileRouter.put('/', profilecontroller.update);

export default profileRouter;
