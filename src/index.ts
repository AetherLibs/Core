import API from "./api/API";

const api = new API("https://google.com");

api.get("/").then(response => {
    console.log(response);
});


