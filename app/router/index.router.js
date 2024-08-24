import { Router } from "express";
import ApiError from "../error/api.error.js";

const router = Router();

router.use((_, response, next) => {
    response.format= 'json';
    next();
});

router.use('/api', './account.router');

router.use((_, __, next) => {
    next(new ApiError(404, 'Not Found'));
});

export default router;