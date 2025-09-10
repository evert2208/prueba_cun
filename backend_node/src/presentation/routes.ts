import { Router } from 'express';

import { CursoRoutes } from './cursos/routes';
import { LeccionRoutes } from './lecciones/routes';
import { PreguntasRoutes } from './preguntas/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/cursos', CursoRoutes.routes );
    router.use('/api/lecciones', LeccionRoutes.routes );
    router.use('/api/preguntas', PreguntasRoutes.routes );




    return router;
  }


}

