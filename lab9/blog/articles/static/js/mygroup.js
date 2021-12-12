groupmates = [
    {
        "name": "Андрей",
        "surname": "Кондратов",
        "group": "БФИ1901",
        "marks": [5, 4, 4]
    },
    {
        "name": "Алексей",
        "surname": "Миронов",
        "group": "БВТ1902",
        "marks": [5, 5, 5]
    },
    {
        "name": "Михаил",
        "surname": "Бельман",
        "group": "БФИ1901",
        "marks": [4, 4, 4]
    },
    {
        "name": "Артем",
        "surname": "Прохоров",
        "group": "БАП1701",
        "marks": [3, 3, 4]
    },
    {
        "name": "Сергей",
        "surname": "Нерзонов",
        "group": "БСТ1801",
        "marks": [5, 4, 5]
    }
];

var option, option_input;

var rpad = function(str, length) {
	str = str.toString();
	while (str.length < length)
		str = str + ' ';
	return str;
};

var printStudents = function(students){

	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
	);
	
	if (option == 0) 
	{
		for (var i = 0; i<=students.length-1; i++){
			
			var sum = 0;
			
			for (var j = 0; j < students[i]['marks'].length; j++) {
			
				sum = sum + students[i]['marks'][j];
			}
			

			if (sum/students[i]['marks'].length >= option_input)
			{
				console.log(
					rpad(students[i]['name'], 15),
					rpad(students[i]['surname'], 15),
					rpad(students[i]['group'], 8),
					rpad(students[i]['marks'], 20)
				);
			}

		}
	}
	else 
	{
		for (var i = 0; i<=students.length-1; i++){
			
			if (students[i]["group"] == option_input)
			{
				console.log(
					rpad(students[i]['name'], 15),
					rpad(students[i]['surname'], 15),
					rpad(students[i]['group'], 8),
					rpad(students[i]['marks'], 20)
				);
			}
		}
	}

	console.log('\n');

};

option = prompt("Отфильтровать студентов по оценке (0) или по группе (1)?:");

if (option == 0)
{
	option_input = prompt("Введите оценку:");
	printStudents(groupmates);
}
else if (option == 1)
{
	option_input = prompt("Введите группу:");
	printStudents(groupmates);
}
else
	console.log('Сортировка не была произведена');


