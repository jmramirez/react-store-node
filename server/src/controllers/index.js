import { Router } from 'express';
import filtersRouter from './filter';
import productsRouter from './product';
import registerRouter from './register';
import loginRouter from './login';
import ordersRouter from './order'

const router = Router();

router.use(registerRouter);
router.use(loginRouter);
router.use(filtersRouter);
router.use(productsRouter);
router.use(ordersRouter);

export default router;
