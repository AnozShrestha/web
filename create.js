let todoList = [
    { title: "Task 1",
     description: "Description 1",
      priority: 1, 
      completed: false },
    { title: "Task 2",
     description: "Description 2",
      priority: 2,
       completed: true },
    { title: "Task 3", 
    description: "Description 3",
     priority: 3, 
     completed: false },
  ];
  console.log(todoList)
  
  function addToDo(title,description,priority,completed){
    todoList.push({title,description,priority,completed});
  }

  addToDo('Task 4','Description 4',4,true)
  console.log(todoList);

  function removeTodo(index){
    todoList.splice(index,1)
  }
  removeTodo(1);
  console.log(todoList)

  function updated(index,title,description,priority,completed){
    todoList[index]={title,description,priority,completed};
  }

  updated(0,'Task 1 updated','Description 1 updated',5,true)
  console.log(todoList)


  function updatedPriority(index,title,description,priority,completed){
    todoList[index]={title,description,priority,completed};
  }




  
