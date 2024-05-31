const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());


router.get('/',(req, res) => {
    res.json({message: "article "})
});



app.get('/api/entity/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Utilisez Prisma pour récupérer une entité par son ID
      const entity = await prisma.entity.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!entity) {
        return res.status(404).json({ error: 'Entity not found' });
      }
      res.json(entity);
    } catch (error) {
      console.error('Error fetching entity by ID:', error);
      res.status(500).json({ error: 'An error occurred while fetching the entity' });
    }
  });
//Ajouter un nouveau article envoyé sous format JSON
app.use(express.json()) // parse json body content

app.post('/', (req, res) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        createdAt: req.body.createdAt,
        published: req.body.publishedAt
    }
    articles.push(newArticle)
    res.status(201).json(newArticle)
})
//Patch/ Mettre à jour l’article envoyé dans le corps de la requête.
app.patch("/", function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        if (req.body.title) {
            found.title = req.body.title;
        }
        if (req.body.content) {
            found.content = req.body.content;
        }
        if (req.image) {
            found.image = req.body.image;
        }
        if (req.createdAt) {
            found.createdAt = req.body.createdAt;
        }
        if (req.publishedAt) {
            found.publishedAt = req.publishedAt;
        }
        res.status(201).json({ "message": "data updated" });
    } else {
        res.status(404).json({
            'message': 'unable to insert data because data inserted not matched'
        });
    }
});

//Supprimer l’article ayant l’id donné
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


module.exports = router;