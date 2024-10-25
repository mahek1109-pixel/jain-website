let slideIndex = 0;
showSlides();

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }
    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slides[slideIndex].style.display = "block"; // Show the current slide
}


function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        // User's message
        var userMessageContainer = document.createElement('div');
        userMessageContainer.classList.add('message', 'message-user');

        var userMessageParagraph = document.createElement('p');
        userMessageParagraph.textContent = messageText;

        userMessageContainer.appendChild(userMessageParagraph);
        document.getElementById('chatboxMessages').appendChild(userMessageContainer);

        // Clear input field and scroll chatbox to the latest message
        messageInput.value = '';
        document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;

        // Bot response after a brief delay
        setTimeout(function() {
            botReply(messageText);
        }, 1000); // 1 second delay for the reply
    }
}

function botReply(userMessage) {
    var botMessageContainer = document.createElement('div');
    botMessageContainer.classList.add('message', 'message-bot');

    var botMessageParagraph = document.createElement('p');

    // Simple predefined responses based on user's input
    if (userMessage.toLowerCase().includes('hello')) {
        botMessageParagraph.textContent = "Hello! How can I help you with Jainism today?";
    } else if (userMessage.toLowerCase().includes('jainism')) {
        botMessageParagraph.textContent = "Jainism is a beautiful way of life, focusing on non-violence and truth.";
    } else if (userMessage.toLowerCase().includes('principles')) {
        botMessageParagraph.textContent = "Some key principles of Jainism include Ahimsa (non-violence), Aparigraha (non-possessiveness), and Satya (truthfulness).";
    } else {
        botMessageParagraph.textContent = "That's interesting! Feel free to ask more questions about Jainism.";
    }

    botMessageContainer.appendChild(botMessageParagraph);
    document.getElementById('chatboxMessages').appendChild(botMessageContainer);

    // Scroll to the bottom to show the latest reply
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;
}

// Send message when pressing "Enter" key
document.getElementById('messageInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent newline in textarea
        sendMessage();
    }
});