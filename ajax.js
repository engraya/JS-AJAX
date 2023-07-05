const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", renderResponseFunction);


function renderResponseFunction() {
    const serverRequest = new XMLHttpRequest();

    serverRequest.onreadystatechange = function () {
        if (serverRequest.readyState == 4) {
            if (serverRequest.status == 200) {
                console.log(serverRequest.responseText);
                const myParagraph = document.getElementById("para");
                myParagraph.innerText = serverRequest.responseText;
            }

            if (serverRequest.status == 404) {
                const myParagraph = document.getElementById("para");
                const errorMessage = "File or Resource not Found!";
                console.log(errorMessage);
                myParagraph.innerText = errorMessage;
            }
        }
    };

    serverRequest.open("GET", "run.txt", true);
    serverRequest.send()

}