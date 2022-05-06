/* let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false
}; */

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

/* let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", ''); */

/* appData.expenses.a1 = a2;
appData.expenses.a3 = a4; */

/* for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if ((typeof a) === 'string' && (typeof a) != null && (typeof b) != null &&
		a != '' && b != '' && a.length < 50) {
			console.log('Done!');
		appData.expenses[a] = b;
	}
} */

/* let i = 0;
while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if ((typeof a) === 'string' && (typeof a) != null && (typeof b) != null &&
		a != '' && b != '' && a.length < 50) {
			console.log('Done!');
		appData.expenses[a] = b;
	}

	i++;
} */

/* let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if ((typeof a) === 'string' && (typeof a) != null && (typeof b) != null &&
		a != '' && b != '' && a.length < 50) {
			console.log('Done!');
		appData.expenses[a] = b;
	}
	
	i++;
} while (i < 2); */

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		
		if ((typeof a) === 'string' && (typeof a) != null && (typeof b) != null &&
			a != '' && b != '' && a.length < 50) {
				console.log('Done!');
			appData.expenses[a] = b;
		}
	}
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);

if(appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', ''),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = save/100/12*percent;
		alert(`Доход в месяц с вашего деппозита: ${appData.monthIncome}`);
	}
}
checkSavings();