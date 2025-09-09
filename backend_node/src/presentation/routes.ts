import { Router } from 'express';

import { CursoRoutes } from './cursos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/cursos', CursoRoutes.routes );



    return router;
  }


}

