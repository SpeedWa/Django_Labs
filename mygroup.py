groupmates = [
    {
        "name": "Андрей",
        "surname": "Кондратов",
        "exams": ["Web", "ОИБ", "МОБД"],
        "marks": [5, 4, 4]
    },
    {
        "name": "Степан",
        "surname": "Крутиков",
        "exams": ["Системное программирование", "Введение в ИТ", "Мат. анализ"],
        "marks": [5, 5, 5]
    },
    {
        "name": "Дмитрий",
        "surname": "Гетман",
        "exams": ["Философия", "Английский язык", "История"],
        "marks": [4, 4, 4]
    },
    {
        "name": "Ефим",
        "surname": "Мушаков",
        "exams": ["Компьютерные сети", "Сетевые технологии", "ОИБ"],
        "marks": [3, 3, 4]
    },
    {
        "name": "Сергей",
        "surname": "Копытько",
        "exams": ["Мат. анализ", "Системное программирование", "Философия"],
        "marks": [5, 4, 5]
    }
]

grade = input("Введите среднюю оценку:")

def print_students(students):
    print(u"Имя".ljust(15), u"Фамилия".ljust(10), u"Экзамены".ljust(30), u"Оценки".ljust(20))
    for student in students:
        if sum(student["marks"])/len(student["marks"]) > float(grade):
            print(student["name"].ljust(15), student['surname'].ljust(10), str(student["exams"]).ljust(30), str(student["marks"]).ljust(20))

print_students(groupmates)