const getButton = document.getElementById("getBtn");
const postButton = document.getElementById("postBtn");
const putButton = document.getElementById("putBtn");
const deleteButton = document.getElementById("deleteBtn");


getButton.addEventListener("click", fetchDataFunction);
postButton.addEventListener("click", postDataFunction);
putButton.addEventListener("click", putDataFunction);
deleteButton.addEventListener("click", deleteDataFunction);


// GET Method of Request
function fetchDataFunction() {
    const serverRequest = new XMLHttpRequest();

    serverRequest.onreadystatechange = function () {
        if (serverRequest.readyState == 4) {
            if (serverRequest.status == 200) {
                console.log(serverRequest.responseText)
                const endResultObject = JSON.parse(serverRequest.responseText)
                const endResultJSON = JSON.stringify(serverRequest.responseText);
                console.log(endResultObject);
                const myParagraph = document.getElementById("getPara");
                myParagraph.innerText = endResultJSON;
            }

            if (serverRequest.status == 404) {
                const myParagraph = document.getElementById("getPara");
                const errorMessage = "File or Resource not Found!";
                console.log(errorMessage);
                myParagraph.innerText = errorMessage;
            }
        }
    };


    // Alternative Code
    // serverRequest.onreadystatechange = function () {
    //     if (serverRequest.readyState == 4 && serverRequest.status == 200) {
    //         console.log(serverRequest.responseText)
    //         const endResultObject = JSON.parse(serverRequest.responseText)
    //         const endResultJSON = JSON.stringify(serverRequest.responseText);
    //         console.log(endResultObject);
    //         const myParagraph = document.getElementById("para");
    //         myParagraph.innerText = endResultJSON;

    //         if (serverRequest.status == 404) {
    //             const myParagraph = document.getElementById("para");
    //             const errorMessage = "File or Resource not Found!";
    //             console.log(errorMessage);
    //             myParagraph.innerText = errorMessage;
    //         }
    //     }
    // };

    serverRequest.open("GET", "https://reqres.in/api/users", true);
    serverRequest.send()

}


// POST Method of Request
function postDataFunction() {
    const postUser = {
        name: "Ahmad",
        profession: "Engineer",
    }

    const serverRequest = new XMLHttpRequest();

    serverRequest.open("POST", "https://reqres.in/api/users");

    serverRequest.setRequestHeader('Content-Type', 'application/json');


    serverRequest.onreadystatechange = function () {
        if (serverRequest.readyState == 4 && serverRequest.status == 201) {
            console.log(serverRequest.responseText)
            const endResultObject = JSON.parse(serverRequest.responseText)
            const endResultJSON = JSON.stringify(serverRequest.responseText);
            console.log(endResultObject);
            const myParagraph = document.getElementById("postPara");
            myParagraph.innerText = endResultJSON;

            if (serverRequest.status == 404) {
                const myParagraph = document.getElementById("postPara");
                const errorMessage = "Error Occured During POST Operation!";
                console.log(errorMessage);
                myParagraph.innerText = errorMessage;
            }
        }
    };

    serverRequest.send(JSON.stringify(postUser))
}




// PUT Method of Request
function putDataFunction() {
    const putUser = {
        name: "Mehmet",
        profession: "Programer",
    }

    const serverRequest = new XMLHttpRequest();

    serverRequest.open("PUT", "https://reqres.in/api/users/55");

    serverRequest.setRequestHeader('Content-Type', 'application/json');

    serverRequest.onreadystatechange = function () {
        if (serverRequest.readyState == 4 && serverRequest.status == 200) {
            console.log(serverRequest.responseText)
            const endResultObject = JSON.parse(serverRequest.responseText)
            const endResultJSON = JSON.stringify(serverRequest.responseText);
            console.log(endResultObject);
            const myParagraph = document.getElementById("putPara");
            myParagraph.innerText = endResultJSON;

            if (serverRequest.status == 404) {
                const myParagraph = document.getElementById("putPara");
                const errorMessage = "Error Occured During PUT Operation!";
                console.log(errorMessage);
                myParagraph.innerText = errorMessage;
            }
        }
    };

    serverRequest.send(JSON.stringify(putUser))
}


// DELETE Method of Request
function deleteDataFunction() {

    const serverRequest = new XMLHttpRequest();

    serverRequest.open("DELETE", "https://reqres.in/api/users/74");

    serverRequest.onreadystatechange = function () {
        if (serverRequest.readyState == 4 && serverRequest.status == 204) {
            const endResult = "User Data Deleted Successfully!"
            console.log(endResult);
            const myParagraph = document.getElementById("deletePara");
            myParagraph.innerText = endResult;

            if (serverRequest.status == 404) {
                const myParagraph = document.getElementById("deletePara");
                const errorMessage = "Error Occured During DELETE Operation!";
                console.log(errorMessage);
                myParagraph.innerText = errorMessage;
            }
        }
    };

    serverRequest.send()
}