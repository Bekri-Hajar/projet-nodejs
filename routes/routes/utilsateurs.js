const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req, res) => {
    res.send('user' + req.params.id),
    res.json({message: 'nouveau commment'});
});

//Ajouter un nouveau utilisateur envoyée sous format JSON
app.use(express.json()) // parse json body content

app.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        password: req.body.password,
        role:req.body.role
    }
    articles.push(newUser)
    res.status(201).json(newUser)
    
})



//Patch/ Mettre à jour la catégorie envoyé dans le corps de la requête.
app.patch("/", function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        if (req.body.name) {
            found.name = req.body.name;
        }
       
        res.status(201).json({ "message": "data updated" });
    } else {
        res.status(404).json({
            'message': 'unable to insert data because data inserted not matched'
        });
    }
});

//Supprimer l'utilisateur ayant l’id donné
app.delete('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}); 

app.listen(5002, () => console.log('Listening on port 5002 '))
