// Function to add a message to the list
function addMessage(message) {
    const li = document.createElement('li')
    li.classList.add('message')
    const senderText = document.createElement('span')
    senderText.classList.add('sender')
    senderText.textContent = message.sender + ': '
    li.appendChild(senderText)
    li.appendChild(document.createTextNode(message.text))
    messagesList.appendChild(li)
}

// Function to send a message
function sendMessage() {
    const messageText = chatInput.value.trim()
    if (messageText) {
        addMessage({ text: messageText, sender: 'user' })
        // Add code here to process the user's message and generate a response
        // For example, you could use a simple rule-based system or a more advanced AI model
        // Once you have the bot's response, call addMessage() to display it
        const botResponse = { text: 'This is a sample bot response.', sender: 'bot' }
        addMessage(botResponse)
        chatInput.value = ''
    }
}

// Sample messages
const messages = [
    { text: 'Hello, welcome to the Tridosha chatbot!', sender: 'bot' },
    { text: 'Can you tell me a little bit about your diet, exercise habits, and stress levels?', sender: 'bot' },
    // Add more messages here
]

const vataInfo = {
    diet: [
      "Vata people should favor warm, cooked, and well-spiced foods.",
      "Some good food options for Vata dosha include soups, stews, and roasted vegetables.",
      "Avoid raw, cold, and dry foods, as well as caffeine and alcohol."
    ],
    exercise: [
      "Vata people should engage in gentle and calming exercises.",
      "Some good exercise options for Vata dosha include yoga, tai chi, and walking.",
      "Avoid high-impact and strenuous exercises, as well as activities that are overly stimulating."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Vata dosha include ashwagandha, turmeric, and ginger.",
      "Vata people may also benefit from taking triphala to support digestion and elimination.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const pittaInfo = {
    diet: [
      "Pitta people should favor cool, refreshing, and slightly dry foods.",
      "Some good food options for Pitta dosha include cucumber, mint, and cilantro.",
      "Avoid spicy, oily, and fried foods, as well as alcohol and caffeine."
    ],
    exercise: [
      "Pitta people should engage in cooling and calming exercises.",
      "Some good exercise options for Pitta dosha include swimming, cycling, and yoga.",
      "Avoid hot and strenuous exercises, as well as activities that are overly competitive."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Pitta dosha include brahmi, shatavari, and neem.",
      "Pitta people may also benefit from taking manjistha to support liver function and digestion.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const kaphaInfo = {
    diet: [
      "Kapha people should favor light, warm, and dry foods.",
      "Some good food options for Kapha dosha include leafy greens, legumes, and spices like black pepper and ginger.",
      "Avoid heavy, oily, and sweet foods, as well as dairy and iced drinks."
    ],
    exercise: [
      "Kapha people should engage in invigorating and energizing exercises.",
      "Some good exercise options for Kapha dosha include running, hiking, and high-intensity interval training.",
      "Avoid sedentary activities and exercises that are overly slow or gentle."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Kapha dosha include triphala, turmeric, and ginger.",
      "Kapha people may also benefit from taking trikatu to support metabolism and weight management.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const vataPittaInfo = {
    diet: [
      "Vata-Pitta people should favor warm, cooked, and well-spiced foods that are easy to digest.",
      "Some good food options for Vata-Pitta dosha include cooked vegetables, grains, and legumes.",
      "Avoid raw, cold, spicy, and oily foods, as well as caffeine and alcohol."
    ],
    exercise: [
      "Vata-Pitta people should engage in moderate and balancing exercises.",
      "Some good exercise options for Vata-Pitta dosha include swimming, tai chi, and yoga.",
      "Avoid high-impact and strenuous exercises, as well as activities that are overly competitive or stimulating."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Vata-Pitta dosha include ashwagandha, turmeric, and brahmi.",
      "Vata-Pitta people may also benefit from taking triphala to support digestion and elimination.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const vataKaphaInfo = {
    diet: [
      "Vata-Kapha people should favor warm, cooked, and well-spiced foods that are easy to digest.",
      "Some good food options for Vata-Kapha dosha include cooked vegetables, grains, and legumes.",
      "Avoid raw, cold, and dry foods, as well as heavy, oily, and sweet foods."
    ],
    exercise: [
      "Vata-Kapha people should engage in moderate and balancing exercises.",
      "Some good exercise options for Vata-Kapha dosha include swimming, tai chi, and walking.",
      "Avoid high-impact and strenuous exercises, as well as activities that are overly sedentary or boring."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Vata-Kapha dosha include ashwagandha, turmeric, and triphala.",
      "Vata-Kapha people may also benefit from taking guggulu to support respiratory and joint health.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const pittaKaphaInfo = {
    diet: [
      "Pitta-Kapha people should favor cool, refreshing, and slightly dry foods that are easy to digest.",
      "Some good food options for Pitta-Kapha dosha include cooked vegetables, grains, and legumes.",
      "Avoid spicy, oily, and fried foods, as well as heavy, sweet, and cold foods."
    ],
    exercise: [
      "Pitta-Kapha people should engage in moderate and balancing exercises.",
      "Some good exercise options for Pitta-Kapha dosha include swimming, tai chi, and walking.",
      "Avoid hot and strenuous exercises, as well as activities that are overly sedentary or boring."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Pitta-Kapha dosha include triphala, ginger, and turmeric.",
      "Pitta-Kapha people may also benefit from taking guggulu to support respiratory and joint health.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  const vataPittaKaphaInfo = {
    diet: [
      "Vata-Pitta-Kapha people should favor warm, cooked, and well-spiced foods that are easy to digest.",
      "Some good food options for Vata-Pitta-Kapha dosha include cooked vegetables, grains, and legumes.",
      "Avoid raw, cold, spicy, oily, and heavy foods, as well as caffeine and alcohol."
    ],
    exercise: [
      "Vata-Pitta-Kapha people should engage in moderate and balancing exercises.",
      "Some good exercise options for Vata-Pitta-Kapha dosha include swimming, tai chi, and walking.",
      "Avoid hot, strenuous, and overly competitive exercises, as well as activities that are overly sedentary or boring."
    ],
    medicine: [
      "Ayurvedic herbs and spices that are beneficial for Vata-Pitta-Kapha dosha include triphala, ginger, turmeric, brahmi, and shatavari.",
      "Vata-Pitta-Kapha people may also benefit from taking guggulu to support respiratory and joint health.",
      "It's important to consult with a qualified Ayurvedic practitioner before starting any new herbal regimen."
    ]
  }
  function getRandomResponse(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  function sendMessage() {
    const input = document.getElementById("chatInput")
    const message = input.value.toLowerCase()
    const messagesList = document.getElementById("messagesList")
    const listItem = document.createElement("li")
    listItem.classList.add("message")

    if (message.includes("vata pitta kapha diet")) {
        listItem.textContent = getRandomResponse(vataPittaKaphaInfo.diet)
    } else if (message.includes("vata pitta kapha exercise")) {
        listItem.textContent = getRandomResponse(vataPittaKaphaInfo.exercise)
    } else if (message.includes("vata pitta kapha medicine")) {
        listItem.textContent = getRandomResponse(vataPittaKaphaInfo.medicine)
    } else if (message.includes("pitta kapha diet")) {
        listItem.textContent = getRandomResponse(pittaKaphaInfo.diet)
    } else if (message.includes("pitta kapha exercise")) {
        listItem.textContent = getRandomResponse(pittaKaphaInfo.exercise)
    } else if (message.includes("pitta kapha medicine")) {
        listItem.textContent = getRandomResponse(pittaKaphaInfo.medicine)
    } else if (message.includes("pitta diet")) {
        listItem.textContent = getRandomResponse(pittaInfo.diet)
    } else if (message.includes("pitta exercise")) {
        listItem.textContent = getRandomResponse(pittaInfo.exercise)
    } else if (message.includes("pitta medicine")) {
        listItem.textContent = getRandomResponse(pittaInfo.medicine)
    } else if (message.includes("vata diet")) {
        listItem.textContent = getRandomResponse(vataInfo.diet)
    } else if (message.includes("vata exercise")) {
        listItem.textContent = getRandomResponse(vataInfo.exercise)
    } else if (message.includes("vata medicine")) {
        listItem.textContent = getRandomResponse(vataInfo.medicine)
    } else if (message.includes("kapha diet")) {
        listItem.textContent = getRandomResponse(kaphaInfo.diet)
    } else if (message.includes("kapha exercise")) {
        listItem.textContent = getRandomResponse(kaphaInfo.exercise)
    } else if (message.includes("kapha medicine")) {
        listItem.textContent = getRandomResponse(kaphaInfo.medicine)
    }  else if (message.includes("vata pitta diet")) {
      listItem.textContent = getRandomResponse(vataPittaInfo.diet);
  } else if (message.includes("vata pitta exercise")) {
      listItem.textContent = getRandomResponse(vataPittaInfo.exercise);
  } else if (message.includes("vata pitta medicine")) {
      listItem.textContent = getRandomResponse(vataPittaInfo.medicine);
  } else if (message.includes("vata kapha diet")) {
      listItem.textContent = getRandomResponse(vataKaphaInfo.diet);
  } else if (message.includes("vata kapha exercise")) {
      listItem.textContent = getRandomResponse(vataKaphaInfo.exercise);
  } else if (message.includes("vata kapha medicine")) {
      listItem.textContent = getRandomResponse(vataKaphaInfo.medicine);
  } else if (message.includes("pitta kapha diet")) {
      listItem.textContent = getRandomResponse(pittaKaphaInfo.diet);
  } else if (message.includes("pitta kapha exercise")) {
      listItem.textContent = getRandomResponse(pittaKaphaInfo.exercise);
  } else if (message.includes("pitta kapha medicine")) {
      listItem.textContent = getRandomResponse(pittaKaphaInfo.medicine);
  } else if (message.includes("vata pitta kapha diet")) {
      listItem.textContent = getRandomResponse(vataPittaKaphaInfo.diet);
  } else if (message.includes("vata pitta kapha exercise")) {
      listItem.textContent = getRandomResponse(vataPittaKaphaInfo.exercise);
  } else if (message.includes("vata pitta kapha medicine")) {
      listItem.textContent = getRandomResponse(vataPittaKaphaInfo.medicine);
  }else if (message.includes("i don't want")) {
        const dosha = message.split(" ")[3]
        if (dosha === "vata") {
            listItem.textContent = "No problem, we can explore other options for you."
        } else if (dosha === "pitta") {
            listItem.textContent = "Sure, let's look at other options for you."
        } else if (dosha === "kapha") {
            listItem.textContent = "I understand, we can consider other options for you."
        } else {
            listItem.textContent = "I'm sorry, I didn't understand. Can you please clarify?"
        }
    } else {
        listItem.textContent = "I'm sorry, I don't have information about that."
    }

    messagesList.appendChild(listItem)
    input.value = ""
}
// Add sample messages to the list
messages.forEach(addMessage)

function translateText() {
  const inputText = document.getElementById('chatInput').value;
  const translatedText = yandexTranslate.translate(inputText, { to: 'hi' });
  const messagesList = document.getElementById('messagesList');
  const message = document.createElement('li');
  message.classList.add('message');
  message.innerHTML = `<span class="sender">You:</span> ${translatedText.text}`;
  messagesList.appendChild(message);
}
