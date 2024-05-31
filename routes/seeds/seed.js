
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const{ faker } = require('@faker-js/faker');
const fs = require("fs");
const axios = require("axios");
const seedDatabase = async () => {
    try {
        // Create 10 users with role "AUTHOR"
        const authors = await Promise.all([...Array(10)].map(async (_, index) => {
            return prisma.utilisateur.create({
                data: {
                    name: faker.internet.userName(),
                    email: faker.internet.email(),
                    status: "Author",
                    password : faker.string.alpha({ length: { min: 5, max: 10 } })
              
                   
                }
            });
        }));

        // Create 1 user with role "ADMIN"
        const admin = await prisma.utilisateur.create({
            data: {
                    
                    name: faker.internet.userName(),
                    email: faker.internet.email(),
                    status: "Admin",
                    password : faker.string.alpha({ length: { min: 5, max: 10 } })
                
            }
        });

        // Create 10 categories
        const categories = await Promise.all([...Array(10)].map(async () => {
            return prisma.categorie.create({
                data: { 
                    name: faker.string.uuid()
                    
                }
            });
        }));





        //create 100 articles 


        const articles = await Promise.all([...Array(100)].map(async () => {
            const categoryIds = faker.helpers.shuffle(categories.map(cat => cat.name)).slice(0, 3);
            const user = faker.helpers.arrayElement(authors);
            
            return prisma.article.create({
                data: {
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraph(),
                    createdAt: faker.date.past(),
                    publishedAt: faker.date.past(),
                    updatedAt: faker.date.recent(),
                    utilisateur: {
                        connect: { email: user.email }
                    },
                    categories: {
                        connect: categoryIds.map(name => ({ name }))
                    }
                }
            });
        }));

        // Create comments for each article
        await Promise.all(articles.map(async (article) => {
            const numComments = faker.number.bigInt({ min: 0, max: 20 });
            await Promise.all([...Array(numComments)].map(async () => {
                
                return prisma.commentaires.create({
                    data: {
                        name:faker.string.uuid(),
                        articles: { connect: { title: article.title } },
                        
                    }
                });
            }));
        }));

        

        console.log("Seed completed successfully.");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
