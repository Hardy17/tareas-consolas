const descripcion={
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
}

const completado={

    alias:'c',
    default:true,
    type:'boolean',
    desc:'Describe el status de la tarea'
}


const argv= require('yargs')
.command('crear','Crea una nueva tarea',{
    descripcion
})
.command('actualizar','actualiza el estatus de una tarea',{
    descripcion,
    completado
})
.command('listar','lista las tareas dependiendo el status',{
    completado
})
.command('borrar','elimina el registro',{
    descripcion
})
.help()
.argv;

module.exports={
    argv
}