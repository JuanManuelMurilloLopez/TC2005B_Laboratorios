function createTable(num){
    let table = "<table>";
    table+= `
    <tr>
        <th>Número</th>
        <th>^2</th>
        <th>^3</th>
    </tr>`;
    for(let i = 1; i <= num; i++){
        table+= `
        <tr>
            <td>${i}</td>
            <td>${i**2}</td>
            <td>${i**3}</td>
        </tr>`;
    }
    table+= "</table>";
    return table;
}

function counter(array){
    let negative = 0;
    let positive = 0;
    let zeros = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == 0){
            zeros++
        }
        else if(array[i] < 0){
            negative++;
        }
        else{
            positive++;
        }
    }
    return {negative, positive, zeros};
}

function average(matrix){
    let averages = [];
    for(let i = 0; i < matrix.length; i++){
        let sum = 0;
        for(let j = 0; j < matrix[i].length; j++){
            sum+= matrix[i][j];
        }
        averages.push(sum/matrix[i].length);
    }
    return averages;
}

function inverseNumber(num){
    let result = 0;
    while (num > 0) {
        let digit = num % 10;
        result = result * 10 + digit;
        num = Math.floor(num / 10);
    }
    return result; 
}

class TaskManager {
    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push({
        text: task,
        completed: false 
    });
    }

    completeTask(index) {
      if (this.tasks[index]) {
        this.tasks[index].completed = true;
      }
    }

    getTasks() {
      return this.tasks;
    }
  }

  const taskManager = new TaskManager();

  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
      taskManager.addTask(taskText);
      taskInput.value = '';
      renderTasks();
    }
  }

  function completeTask(index) {
    taskManager.completeTask(index);
    renderTasks();
  }

  function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    // Me ayudé de IA para poder desplegar correctamente las tareas en forma de lista
    taskManager.getTasks().forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      if (task.completed) {
        li.classList.add('completed');
      }
      li.onclick = () => completeTask(index);
      taskList.appendChild(li);
    });
  }

function showTable(num) {
const tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = createTable(num);
}

let number = prompt("Introduce un número entero positivo:");

showTable(number);

let randNum1 = Math.floor(Math.random() * 100);
let randNum2 = Math.floor(Math.random() * 100);
sum = randNum1 + randNum2;

let user_sum = prompt("¿Cuál es el resultado de " + randNum1 + " + " + randNum2 +" ?");
if(user_sum == sum){
    alert("Felicidades! Sabes sumar");
}
else{
    alert("Casi, pero no");
}

array1 = [2, 0, 5, -3, 0, 5, -2, -5];
array2 = [-8, 5, 0, 0, -4, 7];

console.log("Array 1:", array1);
console.log("Array 2: ", array2);
console.log("Counter Array 1: ", counter(array1));
console.log("Counter Array 2: ", counter(array2));
console.log("Average arrays: ", average([array1, array2]));
console.log("Inverso de 12345: ", inverseNumber(12345));
