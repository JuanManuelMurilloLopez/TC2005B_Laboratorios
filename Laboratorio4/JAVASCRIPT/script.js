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
        for(let j = 0; j < metrix[i].length; j++){
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

let number = prompt("Introduce un número entero positivo:")
document.write(createTable(number));

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

console.log()