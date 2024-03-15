let userData = {
  name: "Aimon",
};

userData.age = prompt("напишите свой возвраст: ", 18);

userData.underage = confirm("вы несовершеннолетний ?");

let keyToDelete = prompt(
  "Введите ключ объекта, который хотите удалить",
  "name или age"
);
delete userData[keyToDelete];

userData.address = {
  country: prompt("Введите вашу страну:"),
  city: prompt("Введите ваш город:"),
  street: prompt("Введите вашу улицу:"),
};

console.log(userData);
