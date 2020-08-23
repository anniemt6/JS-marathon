const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	healthCharacter: document.getElementById('health-character'),
	progressBar: document.getElementById('progressbar-character'),
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	healthCharacter: document.getElementById('health-enemy'),
	progressBar: document.getElementById('progressbar-enemy'),
}

//функция инициализации проекта
function init(){
	console.log('start game');
	changeHealthe(character);
	changeHealthe(enemy);
}	
init();


//функция изменения параметров персонажей
function changeHealthe(person){
	changeHPLife(person);
	changeProgressbarHP(person);
}

//меняем текстовое поле жизни персонажа
function changeHPLife(person){
	person.healthCharacter.innerText = person.damageHP + '/' + person.defaultHP;
	
}

//меняем прогресс бар персонажа
function changeProgressbarHP(person){
	person.progressBar.style.width = person.damageHP + '%';
}

//функция нанесения удара: кому и сколько
function attack (person, count, button){
	
	if(person.damageHP < count){ person.damageHP = 0;  button.disabled = true; alert(person.name + ' проиграл бой!!');}
	else { person.damageHP -= count; }
	changeHealthe(person);
}

//генерация рандомного удара
function randomCountAttack(num){
	return Math.ceil(Math.random()*num);
}



//из дом берем айди кнопок, для дальнейшей работы
const klick = document.getElementById('btn-kick');
const klickAttackEnemy = document.getElementById('btn-kick-electro');



//"оживляем" кнопки
klick.addEventListener('click', function () {attack(character, randomCountAttack(10), klick); attack(enemy, randomCountAttack(10), klick);} );
klickAttackEnemy.addEventListener('click', function() { attack(enemy, 10, klickAttackEnemy);} );





