// DECLARATIONS

let unreadAll = document.querySelector("#unreadAll");
let unreadCounter = document.querySelector("#unreadNotifications");
let allUnreadMessages = document.querySelectorAll(".unreadNotification");

// FUNCTION TO UNREAD ALL MESSAGES

let unreadCounterToZero = () => {
    counter = 0;
    unreadCounter.innerText = counter;
};

let unreadAllMessages = (e) => {
    [].forEach.call(allUnreadMessages, function(item) {
        item.classList.remove("unreadNotification");
        item.classList.add("readNotification")
    });
}

// EVENTLISTENER / CALL FUNCTIONS

unreadAll.addEventListener('click', (e) => {
    e.preventDefault();
    unreadCounterToZero();
    unreadAllMessages();
});