var filters = {
    'all': function (tasks){
        return tasks;
    },
    'complete': function (tasks){
        return tasks.filter(function (task){
            return task.completed;
        });
    },
    'active': function (tasks) {
        return tasks.filter(function(task){
            return ! task.completed;
        });
    }
}
new Vue({
    'el': '#app',
    'data': {
        filter: "all",
        newTask:"",
        tasks:[
            {text:"Task1", completed:false},
            {text:"Task2", completed:false},
            {text:"Task3", completed:true},
        ],
        
    },
    'computed': {
        filterdTasks: function(task){
            return filters[ this.filter ](this.tasks);
        },
        remainingTasks: function (){
            return filters.active(this.tasks).length;
        },
        allDone: {
            get: function (){
                return this.remainingTasks === 0;
            },
            set: function (value){
                this.tasks.forEach(task => {
                    task.completed=value;
                });
            }
        }
    },
    'methods': {
        addNewTask: function (){
            if(this.newTask === "")
                return;
            this.tasks.push({text:this.newTask, completed: false});
            this.newTask = "";
        },
        deleteTask: function (index){
            this.tasks.splice(index, 1);
        },
        deleteCompleteTasks: function (){
            this.tasks = filters.active(this.tasks);
        }
    }
});