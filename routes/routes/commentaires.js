const express = require('express');
const app = express();
app.use(express.json());


app.get('/',(req, res) => {
    res.take('user' + req.params.id),
    res.json({message: 'nouveau commment'});
});
app.get('/id',(req, res) => {
    res.send('user' + req.params.id),
    res.json({message: 'nouveau commment'});
});

//Ajouter un nouveau commentaire envoyée sous format JSON
app.use(express.json()); // parse json body content

app.post('/', (req, res) => {
    const newCommentaire = {
        id: newCommentaire.length + 1,
        email: req.body.email,
        content : req.body.content
    }
    newCommentaire.push(newCommentaire)
    res.status(201).json(newCommentaire)
});
//Patch/ Mettre à jour la commentaire envoyé dans le corps de la requête.
app.patch("/:id", function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        if (req.body.email) {
            found.email= req.body.email;
        }
        if (req.body.content) {
            found.conrtent= req.body.content;
        }
       
        res.status(201).json({ "message": "data updated" });
    } else {
        res.status(404).json({
            'message': 'unable to insert data because data inserted not matched'
        });
    }
});

//Supprimer le commentaire  ayant l’id donné
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


app.listen(5003, () => console.log('Listening on port 5003 '));




