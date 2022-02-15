document.addEventListener("DOMContentLoaded", function () {
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);

    document.getElementById(btn.id).onclick = function () {
        listFriends();
    }


    let friendArray = ["Jovanna", "Jarita", "Grace", "Onyx", "Bri"];


    function listFriends() {
        for (let i = 0; i < friendArray.length; i++) {
            let friendsDiv = document.createElement("div");
            friendsDiv.className = "friend"
            let friendsName = document.createElement("h3");
            friendsName.innerHTML = friendArray[i];
            document.body.appendChild(friendsDiv);
            friendsDiv.appendChild(friendsName);

            for (let n = 99; n >= 1; n--) {
                let words = document.createElement("p");
                friendsDiv.appendChild(words);

                if (n == 2) {
                    words.innerHTML = n + ' lines of code in the file, ' + n + ' lines of code; ' + friendArray[i] + ' strikes one out, clears it all out, ' + (n - 1) + ' lines of code in the file.'

                } else if (n > 2) {
                    words.innerHTML = n + ' lines of code in the file, ' + n + ' lines of code; ' + friendArray[i] + ' strikes one out, clears it all out, ' + (n - 1) + ' lines of code in the file.'

                } else {
                    words.innerHTML = n + ' line of code in the file, ' + n + ' line of code; ' + friendArray[i] + ' strikes one out, clears it all out, no more lines of code in the file.'
                }

            }
        }
    }
});


