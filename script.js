document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        Name: document.getElementById("name").value,
        Attendance: document.getElementById("attending").value,
        Guests: document.getElementById("guests").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbyPjM05cOcsGR88FRZ0TRJS-ienA_rttO19OAf6R8gDeffVGzzJIhX3Fv8YZnJKl1XJ4Q/exec", {
        method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => console.log("Response from server:", data))
        .catch(error => console.error("Fetch error:", error));
});

const translations = {
  en: {
    invited: "You're Invited to celebrate the wedding of Suzy and Nikita!",
    date: "Date: June 7, 2025",
    schedule: "Wedding Day Schedule",
    arrival: "Church Arrival",
    ceremony: "Ceremony",
    reception: "Reception & Dinner",
    venue: "Venue Locations",
    church: "Church",
    reception_location: "Reception",
    directions: "Get Directions",
    your_name: "Your Name:",
    will_attend: "Will you attend?",
    yes: "Yes!",
    no: "No.",
    num_guests: "Number of Guests:",
    submit: "Submit"
  },
  ru: {
    invited: "Вы приглашены на свадьбу Сюзи и Никиты!",
    date: "Дата: 7 июня 2025 г.",
    schedule: "Расписание свадебного дня",
    arrival: "Прибытие в церковь",
    ceremony: "Церемония",
    reception: "Прием и ужин",
    venue: "Места проведения",
    church: "Церковь",
    reception_location: "Ресторан",
    directions: "Проложить маршрут",
    your_name: "Ваше имя:",
    will_attend: "Вы придете?",
    yes: "Да!",
    no: "Нет!",
    num_guests: "Количество гостей:",
    submit: "Отправить"
  },
  hy: {
    invited: "Դուք հրավիրված եք Սյուզիի և Նիկիտայի հարսանիքին",
    date: "Ամսաթիվ՝ Հունիսի 7, 2025",
    schedule: "Հարսանիքի ժամանակացույց",
    arrival: "Եկեղեցու մոտ",
    ceremony: "Արարողություն",
    reception: "Ընդունելություն և ընթրիք",
    venue: "Վայրեր",
    church: "Եկեղեցի",
    reception_location: "Ռեստորան",
    directions: "Ստանալ ուղղություն",
    your_name: "Ձեր անունը՝",
    will_attend: "Կգա՞ք",
    yes: "Այո՛",
    no: "Ո՛չ",
    num_guests: "Քանի՞ հոգով եք գալու",
    submit: "Ուղարկել"
  }
};

document.querySelectorAll('.language-icon').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key];
    });
  });
});
