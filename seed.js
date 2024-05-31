const faker = require('faker');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Création de 10 utilisateurs avec le rôle "AUTHOR"
    const authors = [];
    for (let i = 0; i < 10; i++) {
      const user = await prisma.user.create({
        data: {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          role: "AUTHOR"
        }
      });
      authors.push(user);
    }

    // Création de 1 utilisateur avec le rôle "ADMIN"
    const admin = await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        role: "ADMIN"
      }
    });

    // Création de 10 catégories
    const categories = [];
    for (let i = 0; i < 10; i++) {
      const category = await prisma.category.create({
        data: {
          name: faker.lorem.word()
        }
      });
      categories.push(category);
    }

    // Création de 100 articles
    for (let i = 0; i < 100; i++) {
      const randomUserIndex = Math.floor(Math.random() * 10);
      const author = authors[randomUserIndex];

      const article = await prisma.article.create({
        data: {
          title: faker.lorem.words(),
          content: faker.lorem.paragraphs(),
          authorId: author.id,
          categories: {
            connect: [
              { id: categories[Math.floor(Math.random() * 10)].id },
              { id: categories[Math.floor(Math.random() * 10)].id },
              { id: categories[Math.floor(Math.random() * 10)].id }
            ]
          }
        }
      });

      // Création de 0 à 20 commentaires pour chaque article
      const numComments = Math.floor(Math.random() * 21);
      for (let j = 0; j < numComments; j++) {
        await prisma.comment.create({
          data: {
            content: faker.lorem.sentences(),
            articleId: article.id,
            userId: authors[Math.floor(Math.random() * 10)].id
          }
        });
      }
    }

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
