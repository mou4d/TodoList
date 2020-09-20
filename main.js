new Vue({
    'el': '#app',
    'data': {
        newTask:"",
        tasks:[
            {text:"Task1", completed:false},
            {text:"Task2", completed:false},
            {text:"Task3", completed:true},
        ]
    },
    'methods':{
        addNewTask: function (){
            if(this.newTask === "")
                return;
            this.tasks.push({text:this.newTask, completed: false});
            this.newTask = "";
        },
        deleteTask: function (index){
            this.tasks.splice(index, 1);
        }
    }
});