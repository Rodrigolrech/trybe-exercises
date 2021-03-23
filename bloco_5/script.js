function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysList = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let numericDay = document.createElement('li');
  numericDay.className = 'day'
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    numericDay.classList.add('holiday');
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    numericDay.classList.add('friday');
  }
  numericDay.innerHTML = dezDaysList[index];
  daysList.appendChild(numericDay);
}

// Exercicio 2

let stringFeriado = 'Feriado';
let holidayBtn = document.createElement('button');
holidayBtn.className = 'btn-holiday';
holidayBtn.innerHTML = stringFeriado;
let buttonContainer = document.querySelector('.buttons-container');
buttonContainer.appendChild(holidayBtn);

// Exercicio 3
function changeHolidaysColor() {
  let holidaysSet = document.getElementsByClassName('.holiday');
  console.log(holidaysSet);
  for(let index = 0; index < holidaysSet.length; index += 1) {
    holidaysSet[index].style.backgroundColor = 'rgb(238,238,238)'
  }

}
holidayBtn.addEventListener('click', changeHolidaysColor()); 
