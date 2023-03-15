"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages
    },
    sendMessage() {

    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then(function (response) {
                return response.json();
            })

            .then(function (json) {
                console.log(json);
                const msg = json[0];
                console.log(msg.author);
                console.log(msg.message);

                let htmlString = `<div class="messageItem">
                <div class="header">
                    <span class="author">${msg.author}</span>
                    <span class="time">00:00</span>
                </div>
                    <p>
                        ${msg.message}
                    </p>
                </div>
                `;

                document.querySelector('#messageContainer').insertAdjacentHTML('beforeend',htmlString);
            })
    },
    renderMessage(message) {
    }

}

chat.init();