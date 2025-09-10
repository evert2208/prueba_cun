import { Router } from 'express';
import { CursosController } from './controller';
import { CursoDatasourceImpl } from '../../infrastructure/datasource/curso.datasource.impl';
import { CursoRepositoryImpl } from '../../infrastructure/repositories/curso.repository.impl';


export class CursoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CursoDatasourceImpl();
    const cursoRepository = new CursoRepositoryImpl( datasource );
    const cursoController = new CursosController(cursoRepository);

    router.get('/', cursoController.getCursos );
    router.get('/:id/lecciones', cursoController.getLeccionById );
    
    router.post('/', cursoController.createCurso );
    router.put('/:id', cursoController.updateCurso );
    router.delete('/:id', cursoController.deleteCurso );


    return router;
  }


}

