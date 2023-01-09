let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Egges', 'Clean Litter Box'];
while(input != 'quit' && input != 'q'){
    if(input === "list"){
        console.log('***************************')   
        for(let i = 0; i < todos.length; i++){
            console.log(`${i+1}: ${todos[i]}`);
        }
        console.log('***************************')
    }

    else if(input === "new"){
        const task = prompt("Add a task.");
        todos.push(task);
        console.log(`${task} is added to list.`)
        // todos[todos.length] = task;
    }
    else if(input === "delete"){
        const index = parseInt(prompt("What do you want to delete?"));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, delete ${deleted[0+1]}`);          
        }
        else{
            console.log('Unknown index');
        }
        
    }
    input = prompt('What would you like to do?');
}
console.log('todo list off.');
