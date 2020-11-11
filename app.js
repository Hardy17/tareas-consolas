const argv=require('./config/yargs').argv;
const colors=require('colors');
const todoTask=require('./todo/todo');

let comando=argv._[0];

switch(comando){
    case 'crear':
       let createTask=todoTask.crearDB(argv.descripcion);

    break;

    case'listar':
       let searchTask=todoTask.taskSearch(argv.completado);

       for (let tarea of searchTask) {
           console.log('========Tareas========'.green);
           console.log(tarea.descripcion);
           console.log('Estado: ',tarea.completado);
           console.log('======================'.green);
       }
     break;
    case 'actualizar':
        let updateTask=todoTask.updateTask(argv.descripcion,argv.completado);
        console.log(updateTask);
    break;
    case 'borrar':
        let deleteTask=todoTask.deleteTask(argv.descripcion);
        console.log(deleteTask);
    break;

    default:
       console.log('No existe un comando para esa accion');
    break;

} 
