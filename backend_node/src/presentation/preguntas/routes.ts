import { Router } from 'express';
import { PreguntaDatasourceImpl } from '../../infrastructure/datasource/pregunta.datasource.impl';
import { PreguntaRepositoryImpl } from '../../infrastructure/repositories/pregunta.repository.impl';
import { PreguntasController } from './controller';



export class PreguntasRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PreguntaDatasourceImpl();
    const preguntaRepository = new PreguntaRepositoryImpl( datasource );
    const preguntasController = new PreguntasController(preguntaRepository);

    router.get('/', preguntasController.getPreguntas );
    router.get('/:id', preguntasController.getById );
    
    router.post('/', preguntasController.createPregunta );
    router.put('/:id', preguntasController.updatePregunta );
    router.delete('/:id', preguntasController.updatePregunta );


    return router;
  }


}

