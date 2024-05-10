"use strict";
const btn = document.getElementById("btn");

const API_URL = "https://api.voximplant.com/platform_api/";
const API_KEY = "23ca80c5-b69c-49c7-94d5-fd6fa5b5a02c";
const ACCOUN_ID = "9011675";
const ACCOUNT_NAME = "danil-markov-test-js";
const RULE_ID = "1231325";

// Создание CSV файла с контактами
const csvContacts = `phone;name;
699119939;Sofia`;

const formData = new FormData();
formData.append("file_content", csvContacts);

const apiUrl =
  API_URL +
  "CreateCallList/?" +
  "account_name=" +
  ACCOUNT_NAME +
  "&api_key=" +
  API_KEY +
  "&rule_id=" +
  RULE_ID +
  "&max_simultaneous=10" +
  "&num_attempts=2" +
  "&interval_seconds=60" +
  "&priority=1" +
  "&name=CallList";

btn.onclick = () => {
  // Отправка запроса к API Voximplant для создания списка для обзвона
  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Список для обзвона успешно создан:", data);
    })
    .catch((error) => {
      console.error("Ошибка при создании списка для обзвона:", error);
    });
};
