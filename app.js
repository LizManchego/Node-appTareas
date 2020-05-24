const arguments = require('./config/yargs').arguments; //extrae lso parametros enviados
const colors = require('colors');
const tarea = require('./Tareas/tareas');
let comando = arguments._[0];


switch (comando) {
    case 'crear':

        let tareaList = tarea.crear(arguments.descripcion);
        console.log(tareaList)
        break;
    case 'listar':
        let tareaLista = tarea.listar();
        console.log('*********************************'.green);
        console.log(`*********POR HACER *************`.green);
        for (let tarea of tareaLista) {

            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('*********************************'.green);
        }
        break;
    case 'actualizar':
        let tareaAct = tarea.actualizar(arguments.descripcion, arguments.completado);
        console.log(tareaAct);
        break;
    case 'borrar':
        let borrado = tarea.borrar(arguments.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no encontrado")
        break;
}