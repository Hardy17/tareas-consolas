

const fs=require('fs');

let tasklist=[];

const saveTask=()=>{
    
    let data=JSON.stringify(tasklist);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err)throw err
        console.log('Datos guardados');
    })
}

const loadData=()=>{
    try {
        tasklist=require('../db/data.json');
    } catch (error) {
        tasklist=[];
    } 
}
const crearDB=(descripcion)=>{
   loadData();
    let task={
        descripcion,
        completado:false
    }
    tasklist.push(task);
    saveTask();
    return tasklist;

}

const taskSearch=(completado)=>{
    loadData();
    let taskStatus= tasklist.filter(task=>task.completado===completado);
    return taskStatus;
}

const updateTask=(descripcion, completado=true)=>{
   loadData();
   let taskUpdate=tasklist.findIndex(tarea=>tarea.descripcion!==descripcion);
   if(taskUpdate>=0){
       
       tasklist[taskUpdate].completado=completado;
       saveTask();
       return true;
   }
   else{
       return false;
   }
}

const deleteTask=(descripcion)=>{
    loadData();
    let task=tasklist.filter(task=>task.descripcion===descripcion);
    if(tasklist.length===tasklist){
        return false;
    }
    else{
        tasklist=task;
        saveTask();
        return true;
    }
}
module.exports={
    crearDB,
    taskSearch,
    updateTask,
    deleteTask
}