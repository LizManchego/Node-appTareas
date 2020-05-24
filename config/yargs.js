const descripcion = {
    demand: true, //OBLIGATORIO
    alias: 'd',
    desc: "Descripcion de la tarea por hacer" //descripcion del parametro
};

const completado = {
    default: true, //OBLIGATORIO
    alias: 'c' //alias del parametro
}

const arguments = require('yargs')
    .command('listar', 'Listar Tareas')
    .command('crear', 'crear Tareas', { descripcion })
    .command('actualizar', 'Actualizar tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar Tareas', { descripcion })
    .help()
    .argv;

module.exports = {
    arguments
}