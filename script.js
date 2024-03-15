let userData = {
  name: "Aimon",
};

userData.age = prompt("напишите свой возвраст: ", 18);

userData.underage = confirm("вы совершеннолетний ?");

userData.adress = {
  country: "Kyrgyzstan",
  city: "Osh",
  street: "manas prospect",
};

console.log(userData);
