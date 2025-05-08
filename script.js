// Add event listener to the RSVP form
document.getElementById("rsvpForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new URLSearchParams();
  formData.append("name", document.getElementById("name").value);
  formData.append("attendance", document.getElementById("attending").value);
  formData.append("guests", document.getElementById("guests").value);

  console.log("Sending Form Data:", formData.toString());

  fetch("https://script.google.com/macros/s/AKfycby1OvusDYHMYlDDer-x55WQ2U5y89J7neJwSF76v0OFB3RjxDuVGW80G-bCSi4-5OJ2cQ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  })
    .then(response => response.text())
        .then(data => {
          console.log("Response from server:", data);
          showPopup("🎉 Your response submitted successfully!");
          document.getElementById("rsvpForm").reset();
        })
        .catch(error => {
          console.error("Error:", error);
          showPopup("❌ There was an error submitting the form.");
        });
});

// Function to show popup messages
function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");

  popupMessage.innerHTML = message;
  popup.classList.remove("hidden");

  // Close popup after 3 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}

// Close popup on X click
document.getElementById("popupClose").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

// Language data
const translations = {
    en: {
      rsvp: "RSVP",
      name: "Your Name",
      attending: "Will you attend?",
      yes: "Yes",
      no: "No",
      guests: "Number of Guests",
      submit: "Submit",
      invitation: "INVITE YOU TO JOIN THEM<br>IN CELEBRATING THEIR WEDDING",
      church: "ST. SARKIS CATHEDRAL",
      reception: "OHANA YVN RESTAURANT",
      churchAddress: "21 ISRAYELYAN ST, YEREVAN",
      restaurantAddress: "JRVEZH 3RD AREA 7/30 BLD., KOTAYK MARZ",
      response: "Your response submitted successfully!"
    },
    ru: {
      rsvp: "Oпрос",
      name: "Ваше имя",
      attending: "Вы придете?",
      yes: "Да",
      no: "Нет",
      guests: "Количество гостей",
      submit: "Отправить",
      invitation: "ПРИГЛАШАЮТ ВАС<br>НА ИХ СВАДЬБУ",
      church: "ЦЕРКОВЬ СВ. САРГИСА",
      reception: "ОХАНА РЕСТОРАН (OHANA YVN)",
      churchAddress: "ИСРАЕЛЯН 21, ЕРЕВАН",
      restaurantAddress: "ДЖРВЕЖ 3-Й УЧАСТОК 7/30 ДОМ, КОТАЙКСКИЙ МАРЗ",
      response: "Ваш ответ успешно отправлен!"
    },
    am: {
      rsvp: "Հարցում",
      name: "Ձեր անունը",
      attending: "Կգա՞ք",
      yes: "Այո",
      no: "ՈՉ",
      guests: "Հյուրերի քանակը",
      submit: "Ուղարկել",
      invitation: "ՀՐԱՎԻՐՈՒՄ ԵՆ ՁԵԶ ՄԻԱՍԻՆ ՆՇԵԼՈՒ ԻՐԵՆՑ ՀԱՐՍԱՆԻՔԸ",
      church: "ՍԲ․ ՍԱՐԳԻՍ ԵԿԵՂԵՑԻ",
      reception: "ՕՀԱՆԱ ՌԵՍՏՈՐԱՆ (ОHANA YVN)",
      churchAddress: "ԻՍՐԱՅԵԼՅԱՆ 21, Երևան",
      restaurantAddress: "Ջրվեժ 3-ՐԴ ՀԱՏՎԱԾ 7/30 ՇԵՆՔ, ԿՈՏԱՅՔԻ ՄԱՐԶ",
      response: "Ձեր պատասխանը հաջողությամբ ուղարկվեց:"
    },
  };
  
  // Function to change language
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

// Add event listeners to language icons
document.querySelectorAll(".lang-btn").forEach((icon) => {
  icon.addEventListener("click", () => {
    const lang = icon.getAttribute("data-lang");
    changeLanguage(lang);
  });
});

// Set default language to English
changeLanguage("en");
  