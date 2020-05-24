const fs = require('fs');
let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("ocurrio un error" + err);
    });
}
const cargarDB = () => {
    //Valida si el archivo esta vacio lo inicializa
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
}

//CREAR TAREA
const crear = (descr) => {
    let tarea = {
        descripcion: descr,
        completado: false
    }
    cargarDB();

    listadoTareas.push(tarea);
    guardarDB();
    return listadoTareas;
}

//LISTAR TAREA
const listar = () => {
    cargarDB();
    return listadoTareas;
}

// ACTUALIZAR TAREA
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}