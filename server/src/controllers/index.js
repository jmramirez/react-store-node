import { Router } from 'express';
import filtersRouter from './filter';
import productsRouter from './product';
import registerRouter from './register';

const router = Router();

router.use(registerRouter);
router.use(filtersRouter);
router.use(productsRouter);

export default router;
