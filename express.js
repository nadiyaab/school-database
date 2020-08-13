import express from "express";
import dbClient from './database.js';

const app = express();
const port = 3000;

app.get("/student/:name", async(request, response) => {
    const name = request.params.name
    const sqlResult = await dbClient.getStudentName(name)
    response.json(sqlResult)
})

const getData = (firstName)=> {
    return{
        firstName: firstName,
        lastName:"Abdi"
    };
}

app.get ('test/:firstName', (request, response)=> {
    const firstName = request.params.firstName;

    const jsonToReturn = getData(firstName);
    response.json(jsonToReturn);
})

app.listen(port, () => console.log(`App started on port ${port}`));
