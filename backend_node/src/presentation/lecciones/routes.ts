import { Router } from 'express';
import { LeccionDatasourceImpl } from '../../infrastructure/datasource/leccion.datasource.impl';
import { LeccionRepositoryImpl } from '../../infrastructure/repositories/leccion.repository.impl';
import { LeccionesController } from './controller';


export class LeccionRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new LeccionDatasourceImpl();
    const leccionRepository = new LeccionRepositoryImpl( datasource );
    const leccionesController = new LeccionesController(leccionRepository);

    router.get('/', leccionesController.getLecciones );
    router.get('/:id', leccionesController.getLeccionById );
    
    router.post('/', leccionesController.createLeccion );
    router.put('/:id', leccionesController.updateLeccion );
    router.delete('/:id', leccionesController.deleteLeccion );


    return router;
  }


}

