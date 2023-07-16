// Cambio de modo oscuro a claro
var elements = [
    "container2",
    "mision", "vision","card1", "a1", "a2","a3","a4","a5","a6","a7","a8","a9", "question1", "answer1",
    , "question2", "answer2", "question3", "answer3",  "question4", "answer4",
    "body"
  ];
  
  var darkModeBtn = document.getElementById("dark-mode-btn");
  var icon = document.getElementById("icon");
  
  darkModeBtn.addEventListener("click", function() {
    elements.forEach(function(elementId) {
      var element = document.getElementById(elementId);
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-light");
    });
  
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });




//traducccion
var menuAbierto = false;

function cambiarIdioma(idioma) {
  var elementos = {
    // ... tus elementos y traducciones aquí ...
    "inicio": ["Inicio", "Home"],
    "Servicios": ["Servicios", "Services"],
    "Especialidades": ["Especialidades", "Specialties"],
    "Contacto": ["Contacto", "Contact"],
    "Misión": ["Misión", "Mission"],
    "txtMision": ["Brindar cuidado integral y compasivo a todas las mascotas, siendo la esperanza y el apoyo de sus dueños, garantizando su bienestar y promoviendo la salud animal en nuestra comunidad.", "Provide comprehensive and compassionate care to all pets, being the hope and support of their owners, guaranteeing their well-being and promoting animal health in our community."],
    "Visión": ["Visión", "Vision"],
    "serReconocidos": ["Ser reconocidos como la principal referencia en el cuidado de mascotas en Santo Domingo, Ecuador, destacándonos por nuestra excelencia médica y enfoque centrado en el bienestar animal.", "To be recognized as the main reference in pet care in Santo Domingo, Ecuador, standing out for our medical excellence and focus on animal welfare."],
    "comida": ["Comida Saludable", "Healthy food"],
    "txt1": ["Una alimentación saludable es esencial para mantener a nuestros perros y gatos en óptimas condiciones. Es importante proporcionarles una dieta balanceada y adecuada a sus necesidades nutricionales.", "A healthy diet is essential to keep our dogs and cats in optimal condition. It is important to provide them with a balanced diet adequate to their nutritional needs."],
    "txt2": ["Es recomendable incluir alimentos ricos en proteínas de calidad, como carnes magras y pescado, así como carbohidratos provenientes de fuentes saludables como el arroz integral o la batata. También es fundamental incorporar vegetales y frutas que aporten vitaminas y minerales.", "It is advisable to include foods rich in quality protein, such as lean meats and fish, as well as carbohydrates from healthy sources such as brown rice or sweet potatoes. It is also essential to incorporate vegetables and fruits that provide vitamins and minerals."],
    "txt3": ["Rutinas y Consejos", "Routines and Tips"],
    "txt4": ["Realiza paseos diarios con tu mascota para mantenerla activa y socializada.", "Take daily walks with your pet to keep it active and socialized."],
    "txt5": ["Proporciona a tu mascota una dieta equilibrada y adecuada a sus necesidades nutricionales.", "Provide your pet with a balanced diet appropriate to its nutritional needs."],
    "txt6": ["Asegúrate de que tu mascota tenga acceso a agua fresca y limpia en todo momento.", "Make sure your pet has access to fresh and clean water at all times."],
    "txt7": ["Programa visitas regulares al veterinario para chequeos de salud y vacunaciones.", "Schedule regular visits to the veterinarian for health check-ups and vaccinations."],
    "txt8": ["Brinda a tu mascota suficiente tiempo de juego y ejercicio para mantener su mente y cuerpo activos.", "Provide your pet with enough playtime and exercise to keep their mind and body active."],
    "txt9": ["Proporciona a tu mascota un lugar cómodo y seguro para descansar y dormir.", "Provide your pet with a comfortable and safe place to rest and sleep."],
    "txt10": ["Dedica tiempo para el cepillado regular de su pelaje y para mantener su higiene dental.", "Take time for regular brushing of their fur and maintaining their dental hygiene."],
    "txt11": ["Evita dejar alimentos peligrosos al alcance de tu mascota, como chocolate, uvas o alimentos con huesos.", "Avoid leaving dangerous foods within reach of your pet, such as chocolate, grapes, or foods with bones."],
    "h1-text": ["Nuestros Pacientes", "Our Patients"],
    "carousel-h5-1": ["Don Frankesco", "Mr. Frankesco"],
    "carousel-h5-2": ["Señor Don Cachondito", "Mr. Naughty"],
    "carousel-h5-3": ["Lobito", "Little Wolf"],
    "carousel-p1": ["La calidad del servicio es calidad, me encanta venirme a visitarlos. Woff Woff!!", "The quality of service is excellent, I love coming to visit them. Woof Woof!!"],
    "carousel-p2": ["\"Estoy muy emocionado de estar aqui, son los mejores!\"", "\"I'm very excited to be here, they are the best!\""],
    "carousel-p3": ["Es la mejor veterinaria del mundo mundial, deje de ser salvaje con ellos.", "It's the best veterinary clinic in the world, I stopped being wild with them."],
    "question1-text": ["¿Dónde está ubicada la veterinaria?", "Where is the veterinary clinic located?"],
      "question2-text": ["¿Cuáles son sus horarios de atención?", "What are your hours of operation?"],
      "question3-text": ["¿Son económicos los servicios veterinarios que ofrecen?", "Are your veterinary services affordable?"],
      "question4-text": ["¿Son responsables en el cuidado de las mascotas?", "Are you responsible in pet care?"],
      "answer1-text": ["Nuestra veterinaria está ubicada en Santo Domingo, Ecuador. Puedes encontrarnos en la siguiente dirección: Av. Quevedo km 5.", "Our veterinary clinic is located in Santo Domingo, Ecuador. You can find us at the following address: Av. Quevedo km 5."],
      "answer2-text": ["Nuestro horario de atención es de 9am a 6pm, de lunes a viernes. Estamos disponibles para atender a tus mascotas durante esos horarios.", "Our hours of operation are from 9am to 6pm, Monday to Friday. We are available to attend to your pets during those hours."],
      "answer3-text": ["Sí, nos esforzamos por ofrecer servicios veterinarios de calidad a precios accesibles. Nuestro objetivo es brindar atención veterinaria asequible sin comprometer la calidad de los servicios que ofrecemos.", "Yes, we strive to provide quality veterinary services at affordable prices. Our goal is to provide affordable veterinary care without compromising the quality of the services we offer."],
      "answer4-text": ["Sí, somos responsables y nos preocupamos por el bienestar de las mascotas. Nuestro equipo de profesionales veterinarios está comprometido en brindar el mejor cuidado posible a cada animal que nos visita.", "Yes, we are responsible and care about the well-being of pets. Our team of veterinary professionals is committed to providing the best possible care to every animal that visits us."],
      "pre": ["Preguntas Frecuentes", "Frequent questions"],
      "facebook-text": ["Facebook", "Facebook"],
      "instagram-text": ["Instagram", "Instagram"],
      "whatsapp-text": ["Whatsapp Web", "Whatsapp Web"],
      "vet-name": ["Veterinaria la Esperanza de tu mascota", "Veterinary Hope for Your Pet"],
      "ecuador-text": ["Ecuador", "Ecuador"],
      "santo-domingo-text": ["Santo Domingo", "Santo Domingo"],
      "phone-number": ["+(593) 975 999 999", "+(593) 975 999 999"],
      "neighborhood": ["Barrio: Luz de America", "Neighborhood: Luz de America"],
      "Veterinaria": ["Veterinaria", "Veterinary"],
      "rights-reserved-text": ["© 2023 Todos los derechos reservados", "© 2023 All rights reserved"]
    

  };
  
  var idiomaIndex = idioma === "espanol" ? 0 : 1;
  var dropdownButton = document.getElementById("languageDropdown");
  var flagIcon = document.getElementById("flagIcon");


  Object.keys(elementos).forEach(function(elementoId) {
    var elemento = document.getElementById(elementoId);
    elemento.textContent = elementos[elementoId][idiomaIndex];
  });
  dropdownButton.innerHTML = '<span class="flag-icon flag-icon-' + (idioma === "espanol" ? "es" : "gb") + '"></span>';

  if (menuAbierto) {
    toggleMenu();
  }
}

function toggleMenu() {
  var menu = document.getElementById("dropdown-content");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  menuAbierto = !menuAbierto;
}





//carusel infinitop
$(document).ready(function () {
  $('.carousel').carousel({
    pause: "false",
    interval: 2000 // Intervalo de tiempo en milisegundos entre cada imagen
  });
});


                
             



$(window).scroll(function() {
  var scrollTop = $(document).scrollTop();
  var scrollHeight = $(document).height();
  var clientHeight = $(window).height();

  var progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  $('#progress-bar').css('width', progress + '%');
});




$(document).ready(function() {
  $('#carouselExampleCaptions').carousel({
    interval: 5000,
    PaymentRequestUpdateEvent
    
  });
});