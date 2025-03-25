document.getElementById("rsvpForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new URLSearchParams();
   formData.append("name", document.getElementById("name").value);
   formData.append("attendance", document.getElementById("attending").value);
   formData.append("guests", document.getElementById("guests").value);

   console.log("Sending Form Data:", formData.toString()); // Add this line for debugging

  fetch("https://script.google.com/macros/s/AKfycby1OvusDYHMYlDDer-x55WQ2U5y89J7neJwSF76v0OFB3RjxDuVGW80G-bCSi4-5OJ2cQ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  })
    .then(response => response.text())
        .then(data => {
          console.log("Response from server:", data);
          showPopup("🎉 RSVP submitted successfully!");
          document.getElementById("rsvpForm").reset();
        })
        .catch(error => {
          console.error("Error:", error);
          showPopup("❌ There was an error submitting the form.");
        });
});

function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMsg = document.getElementById("popupMessage");
  popupMsg.textContent = message;
  popup.classList.remove("hidden");
}

// Close popup on X click
document.getElementById("popupClose").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
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
