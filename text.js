1
//как расшифровывается JSON?

//JSON расшифровывается, как JavaScript Object Notation 

2
//для чего используется JSON?

//JSON часто используется, когда данные отправляются с сервера на веб-страницу.

3
//в каком виде данные записываются в JSON?

//В виде текста

4
//создайте JSON файл
data.json()

5
//внутри созданного вами JSON файла создайте массив из 3 обьектов и поместите в эти обьекты какую либо информацию
let text1 = '{"employees" : ['
{'"firstName: "John" , "lastName: "Cena" '}
{'"firstName: "Brock" , "lastName: "Lesnar"'}
{'"firstName: "Roman" , "lastName: "Reigns"' }

6
//ниже создайте переменную и присвойте ей JSON обьект затем преобразуйте его в строку и выведите в консоли
let text = '{"employees" : ['
'{"firstName: "John" , "lastName: "Cena" },'
'{"firstName: "Brock" , "lastName: "Lesnar" },'
'{"firstName: "Roman" , "lastName: "Reigns" },'

7
//для чего нужен debugger?

//Ключевое слово debugger останавливает выполнение JavaScript и вызывает (если доступно) функцию отладки