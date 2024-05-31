import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/articles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Mock data for demonstration
interface Article{
    id: number;
    title: string;
    content:string;
}

//interface categorie
interface Category {
    id: number;
    name: string;
    articles: number;
    image: string;
   
}
const categories: Category[] =  [
    { id: 1, name: 'Developement_web', articles: 10, image:"dev.jpg" },
    { id: 2, name: 'Big_data', articles: 8, image: "big.jpg"},
    { id: 3, name: 'Intelligence_artificielle', articles: 12 ,image:"AI.jpg"},
    {id: 4, name: 'Cyber_security', articles: 24,image: "cyb.jpg"},
    {id: 5, name: 'Graphic_design', articles: 20,image: "graphic.jpeg"},
    {id: 6, name: 'Python', articles: 24,image: "python.jpg"},
    {id: 7, name: 'Cloud_computing', articles: 24,image: "cloud.jpeg"},
    {id: 8, name: 'Java', articles: 24,image: "java.png"},
    {id: 8, name: 'Data_analytics', articles: 24,image: "data.jpg"}
];
//Article data 
const articlesData: Record<string, Article[]> = {
    Developement_web: [
        { id: 1, title: 'Introduction to Next.js', image:'next.jpg', content :'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. With its intuitive API and built-in features, Next.js simplifies the process of building robust and performant web applications.'},
        { id: 2, title: 'Building React Apps', image:'devv.jpeg',content :'Building React apps has become increasingly popular due to its component-based architecture, which promotes reusability and modularity. By leveraging tools like Create React App and React Router, developers can streamline the development process and create powerful, interactive user interfaces.'},
        { id: 3, title: 'Mastering CSS Grid Layout', image:'cssgrid.png', content: 'CSS Grid Layout is a powerful tool for creating complex grid-based layouts in CSS. By understanding concepts like grid lines, grid tracks, and grid areas, developers can create responsive and visually appealing designs that adapt to different screen sizes and devices.' },
        { id: 4, title: 'Responsive Web Design Best Practices', image:'responsivedesign.jpg', content: 'Responsive web design is essential for ensuring that websites look and perform well on various devices, including desktops, tablets, and smartphones. By following best practices such as using flexible grids and media queries, developers can create websites that provide a seamless user experience across different devices.' },
        { id: 5, title: 'Optimizing Web Performance with Webpack', image:'wabpack.jpg', content: 'Webpack is a popular module bundler for JavaScript applications, known for its ability to bundle assets, optimize code, and manage dependencies. By configuring Webpack plugins like HtmlWebpackPlugin and MiniCssExtractPlugin, developers can optimize the performance of their web applications and improve load times.' },
    ],

    Big_data: [
        { id: 1, title: 'Comment devenir ingénieur big data', image:'bigg.jpg', content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'les compétences demandées pour un profil du big data', image:'biggg.jpg', content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'Big Data and Machine Learning', image:'spark.png', content: 'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 4, title: 'The Role of Data Engineers in Big Data', image:'Hadoop.jpg', content: 'Data engineers play a crucial role in the Big Data ecosystem by designing, building, and maintaining data pipelines and infrastructure. By ensuring that data is collected, stored, and processed efficiently, data engineers enable organizations to derive insights and value from their data.' },
        { id: 5, title: 'Big Data Security and Privacy Challenges', image:'NoSQL.png', content: 'As organizations collect and analyze increasingly large amounts of data, they face significant security and privacy challenges. Ensuring the confidentiality, integrity, and availability of data is essential for maintaining customer trust and regulatory compliance.' },
        
    ],
    Intelligence_artificielle : [
        { id: 1, title: 'Est_ce que AI va nous remplacer', image:'ia.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'Chat gpt 4 : une nouvelle ére', image:'AI.jpg', content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'L’éthique de l’intelligence artificielle', image:'mlalgorithms.png', content: 'L’éthique de l’intelligence artificielle (IA) soulève des questions complexes et éthiques concernant la manière dont les systèmes d’IA sont conçus, déployés et utilisés. Alors que l’IA offre de nombreuses possibilités d’améliorer nos vies, elle comporte également des risques potentiels en matière de biais, de confidentialité et de sécurité.' },
        { id: 4, title: 'Applications de l’intelligence artificielle dans les soins de santé', image:'aihealth.png', content: 'L’intelligence artificielle (IA) est de plus en plus utilisée dans les soins de santé pour aider à diagnostiquer les maladies, à élaborer des plans de traitement personnalisés et à améliorer la gestion des dossiers médicaux. Grâce à des techniques telles que l’apprentissage automatique et l’analyse de données, les systèmes d’IA peuvent fournir des insights précieux pour améliorer les résultats des patients et réduire les coûts des soins de santé.' },
        { id: 5, title: 'Développement de l’intelligence artificielle éthique', image:'ethicilai.jpg', content: 'Le développement de l’intelligence artificielle éthique vise à garantir que les systèmes d’IA sont conçus et utilisés de manière responsable, équitable et transparente. Cela comprend la prise en compte des impacts sociaux, économiques et éthiques potentiels de l’IA, ainsi que la promotion de la diversité et de l’inclusion dans la conception et le développement des systèmes d’IA.' },
    ],
    Cyber_security : [
        { id: 1, title: 'IOT et vie privée', image:'cyb.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'les bases de Cyber security', image:'cybe.jpeg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'Stratégies de défense contre les cyberattaques', image:'zerotrust.png', content: 'Les cyberattaques sont de plus en plus sophistiquées et fréquentes, ce qui rend essentiel pour les organisations de mettre en œuvre des stratégies de défense efficaces. Cela comprend la surveillance continue des réseaux, la détection des menaces en temps réel et la réponse rapide aux incidents de sécurité.' },
        { id: 4, title: 'Formation en cybersécurité pour les professionnels de l’informatique', image:'remotework.jpg', content: 'La formation en cybersécurité est essentielle pour permettre aux professionnels de l’informatique de comprendre les menaces de sécurité actuelles et de développer les compétences nécessaires pour protéger efficacement les systèmes et les données. Cela comprend l’apprentissage des techniques de piratage éthique, des méthodes d’investigation numérique et des meilleures pratiques en matière de sécurité des applications.' },
        { id: 5, title: 'Les défis émergents en matière de cybersécurité', image:'cyb.jpg', content: 'La cybersécurité est un domaine en constante évolution qui fait face à de nouveaux défis et menaces émergentes. Cela comprend l’augmentation des attaques de ransomware, des cyberattaques ciblées et des violations de données, ainsi que l’évolution des réglementations en matière de protection de la vie privée et de la sécurité des données.' },
    ],
    
    Cloud_computing : [
        { id: 1, title: 'Cloud computing competitions', image:'cl.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'les bases du cloud computing ', image:'clo.jpeg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'Sécurité dans le cloud', image:'serverless.jpg', content: 'La sécurité dans le cloud est une préoccupation majeure pour les organisations qui déplacent leurs charges de travail et leurs données vers des environnements cloud. En adoptant des pratiques de sécurité telles que le chiffrement des données, la gestion des accès et la surveillance des menaces, les entreprises peuvent renforcer leur posture de sécurité et protéger leurs actifs dans le cloud.' },
        { id: 4, title: 'Migration vers le cloud', image:'kubernetes.png', content: 'La migration vers le cloud offre de nombreux avantages, notamment une agilité accrue, une réduction des coûts et une évolutivité illimitée. En planifiant soigneusement leur migration, en évaluant les applications existantes et en choisissant les services cloud appropriés, les organisations peuvent maximiser les avantages du cloud computing tout en minimisant les risques et les perturbations.' },
        { id: 5, title: 'Gestion des coûts dans le cloud', image:'cyber.jpg', content: 'La gestion des coûts dans le cloud est un défi majeur pour les organisations qui cherchent à optimiser leurs dépenses informatiques. En utilisant des outils de surveillance des coûts et des stratégies d’optimisation des ressources, les entreprises peuvent réduire leurs coûts cloud, prévenir les gaspillages et maximiser la valeur de leurs investissements dans le cloud.' },
    ],
    
    Python : [
        { id: 1, title: 'Utilisation du python dans le domaine du AI', image:'pp.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'Python VS R dan sla Data science' , image:'developpeur-python.png',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.'},
        { id: 3, title: 'Automatisation des tâches avec Python', image:'python.jpg', content: 'Python est un excellent choix pour l’automatisation des tâches informatiques, offrant une syntaxe simple et expressive ainsi que de nombreuses bibliothèques pour interagir avec les systèmes d’exploitation, les applications web et les bases de données. En utilisant des modules tels que os, subprocess et requests, les développeurs peuvent automatiser efficacement des tâches telles que le traitement des fichiers, le déploiement d’applications et la récupération de données.' },
        { id: 4, title: 'Développement web avec Django', image:'django.png', content: 'Django est un framework web Python populaire qui facilite le développement d’applications web robustes et évolutives. En fournissant des fonctionnalités telles que l’ORM intégré, l’administration automatique et la sécurité intégrée, Django permet aux développeurs de se concentrer sur la création de fonctionnalités uniques plutôt que de réinventer la roue.' },
        { id: 5, title: 'Analyse de données avec Pandas', image:'pandas.png', content: 'Pandas est une bibliothèque Python puissante et flexible pour l’analyse et la manipulation de données. En utilisant des structures de données telles que les DataFrame et les Series, ainsi que des fonctionnalités avancées telles que les opérations de groupe et de fusion, Pandas permet aux analystes de données de nettoyer, explorer et visualiser efficacement leurs données.' },
    ],
    
    Graphic_design : [
        { id: 1, title: 'salaire des graphic designers', image:'gr.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'outils pour les graphics designers', image:'gra.jpeg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'Tendances en design graphique', image:'logodesign.jpg', content: 'Les tendances en design graphique évoluent constamment, reflétant les changements culturels, technologiques et esthétiques dans la société. Actuellement, certaines tendances populaires incluent le minimalisme, les couleurs vives et audacieuses, et les motifs géométriques.' },
        { id: 4, title: 'Psychologie du design graphique', image:'colortheory.jpg', content: 'La psychologie du design graphique étudie l’impact des éléments visuels sur les émotions, les attitudes et les comportements des spectateurs. En comprenant les principes de la couleur, de la typographie et de la composition, les graphistes peuvent créer des designs persuasifs et mémorables qui captivent leur public.' },
        { id: 5, title: 'Portfolio de design graphique', image:'typographie.jpg', content: 'Le portfolio de design graphique est un outil essentiel pour les graphistes professionnels pour présenter leur travail et attirer de nouveaux clients. En sélectionnant et en organisant judicieusement leurs projets, les graphistes peuvent démontrer leurs compétences, leur créativité et leur style unique.' },
    ],

    Java: [
        { id: 1, title: 'Applications java les plus utilisées', image:'ja.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'utilisations du java dans le domaine du mobile', image:'jav.jpg' ,content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.'},
        { id: 3, title: 'Sécurité Java', image:'javasecurity.png', content: 'La sécurité Java est une préoccupation majeure pour les développeurs et les entreprises qui utilisent des applications Java dans des environnements sensibles. En suivant des bonnes pratiques de sécurité telles que la validation des entrées utilisateur, la gestion des identifiants et la mise à jour régulière des logiciels, les organisations peuvent réduire les risques de failles de sécurité et de cyberattaques.' },
        { id: 4, title: 'Frameworks Java populaires', image:'springboot.png', content: 'Les frameworks Java sont des outils puissants qui simplifient le développement d’applications en fournissant des fonctionnalités et des bibliothèques prêtes à l’emploi. Parmi les frameworks Java populaires, on trouve Spring, Hibernate et Struts, qui sont largement utilisés dans le développement d’applications web, d’applications d’entreprise et de microservices.' },
        { id: 5, title: 'Développement Java pour l’IoT', image:'jvm.jpg', content: 'Java est largement utilisé dans le développement d’applications pour l’Internet des objets (IoT), offrant une compatibilité multiplateforme, une sécurité robuste '}
    ],
    Data_analytics: [
        { id: 1, title: 'pourquoi analyser les données', image:'dA.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 2, title: 'les étapes de data analytics', image:'data.jpg',content:'Big Data and Machine Learning are closely related fields that are revolutionizing industries ranging from healthcare to finance. By analyzing large datasets and training predictive models, organizations can uncover valuable insights and make data-driven decisions.' },
        { id: 3, title: 'Outils d’analyse de données', image:'datavisualization.jpg', content: 'Les outils d’analyse de données jouent un rôle essentiel dans le processus d’analyse des données, en fournissant des fonctionnalités pour explorer, nettoyer, transformer et visualiser les données. Parmi les outils d’analyse de données populaires, on trouve Tableau, Power BI, Python et R, qui offrent des capacités avancées pour l’analyse statistique et la visualisation de données.' },
        { id: 4, title: 'Analyse des données non structurées', image:'datamining.jpg', content: 'L’analyse des données non structurées implique l’extraction d’informations à partir de sources de données telles que les documents texte, les images et les médias sociaux. En utilisant des techniques telles que le traitement du langage naturel (NLP) et la vision par ordinateur, les entreprises peuvent extraire des insights précieux à partir de données non structurées pour prendre des décisions éclairées.' },
        { id: 5, title: 'Visualisation des données', image:'mlalgorithms.png', content: 'La visualisation des données est un moyen puissant de communiquer des insights et des résultats d’analyse de manière claire et intuitive. En utilisant des outils de visualisation tels que des graphiques, des tableaux de bord interactifs et des infographies, les analystes de données peuvent présenter leurs conclusions de manière convaincante et faciliter la prise de décision.' },
    ],


};

// Header component
import { faHome, faNewspaper, faList, faSearch, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Header = () => {
    return (
        <header className={styles.header}>
            {/* Logo component */}
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
            </div>
            {/* Search bar */}
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {/* Navigation */}
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHome} /> Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                            <FontAwesomeIcon icon={faNewspaper} /> Articles
                        </Link>
                    </li>
                    <li>
                        <Link href="/categories">
                            <FontAwesomeIcon icon={faList} /> Categories
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <FontAwesomeIcon icon={faSignInAlt} /> Connexion
                        </Link>
                    </li>
                </ul>
            </nav>
        
        </header>
    );
};





//Intro 
const HeroBanner = () => {
    return (
        <div className={styles.heroBanner}>
            <img src="/introo.jpeg" className={styles.heroImage} alt="Hero Image" />
            <div className={styles.overlay}>
                <h1 className={styles.overlayText}> Comment ne pas se dépasser par l'IA ?</h1>
                <button className={styles.overlayButton}>Continuer la lecture</button>
            </div>
        </div>
    );
};


//best article block


interface Article {
    id: number;
    title: string;
    image: string;
}

interface Props {
    article?: Article; // Make the article prop optional
}

const BestArticleBlock: React.FC<Props> = ({ article }) => {
    // Provide a default value in case article is not provided
    const defaultArticle: Article = {
        id: 0,
        title: "Est ce que chatgpt 4 est dangereux ?",
        image: "chatgpt.jpg",
        content:"",
    };

    
    const currentArticle = article || defaultArticle;

    return (
        <div className={styles.bestArticleBlock}>
            <img src={currentArticle.image} alt={currentArticle.title} className={styles.bestArticleImage} />
            <p>Vous avez certainement déjà entendu parler de ChatGPT, le chatbot alimenté par intelligence artificielle
                 d’OpenAI qui a récemment bouleversé le monde de la technologie.À sa sortie en novembre 2022, cet agent 
                 conversationnel était basé sur le grand modèle de langage GPT-3 (GPT-3.5 pour être précis). 
                Le même modèle alimente encore aujourd’hui la version gratuite de ChatGPT.Alors comment obtenir la version gratuite du chatgpt 4 , Pourquoi Microsoft propose-t-il GPT-4 gratuitement ?
Vous le savez peut-être, Microsoft est devenu un investisseur majeur de OpenAI. Il est vrai que l'éditeur 
de Windows a tout à y gagner. Longtemps n° 1 incontesté de son domaine, Microsoft s'est fait voler la vedette 
par Google au début des années 2000. Pour l'immense majorité des internautes,
 la voie d'accès au Web rime avec le moteur de recherche Google et son navigateur Chrome. </p>
            <button className={styles.readMoreButton}>Lire plus</button>
        </div>

        
    );
};



//meilleurs auteurs du mois 
interface Author {
    id: number;
    name: string;
    profile: string;
    description: string;
}

interface Props {
    author?: Author; 
}

const BestAuthorBlock: React.FC<Props> = ({ author }) => {
    const defaultAuthor: Author = {
        id: 1,
        name: "Laila ElAmrani",
        profile: "Laila.jpeg",
        description: "Graphic designer expert",
    };

    const currentAuthor = author || defaultAuthor;

    return (
        <div className={styles.bestAuthorBlock}>
            <div className= {styles.Art}> <h1> Première place   </h1> </div>
            <img src={currentAuthor.profile} alt={currentAuthor.name} className={styles.bestAuthorProfile} />
            <p className={styles.description}>{currentAuthor.description}</p>
            <button className={styles.readMoreButton}>Découvrez mes articles</button>
        </div>
    );
};


const BestAuthorBlock2: React.FC<Props> = ({ author }) => {

    const defaultAuthor: Author = {
        id: 0,
        name: "Ahmad Berrada",
        profile: "ahmad.jpg",
        description:"Ingénieur big data sénieur, plus de 10 ans d'éxprérience chez oracle, Big data consultant",
    };

    // Use article prop if provided, otherwise use the default article
    const currentAuthor = author || defaultAuthor;

    return (
        <div className={styles.BestAuthorBlock2}>
            <div className= {styles.Art}> <h1> Deuxième place  </h1> </div>
            <img src={currentAuthor.profile} alt={currentAuthor.name} className={styles.bestAuthorProfile} />
            <p> Big data consultant</p>
            <button className={styles.readMoreButton}>Découvrez mes articles</button>
        </div>

        
    );
};

const BestAuthorBlock3: React.FC<Props> = ({ author }) => {
    // Provide a default value in case article is not provided
    const defaultAuthor: Author = {
        id: 0,
        name: "Sara Benchekroun",
        profile: "sara.jpg",
        description:"Backend developer",
    };

    // Use article prop if provided, otherwise use the default article
    const currentAuthor = author || defaultAuthor;

    return (
        <div className={styles.BestAuthorBlock3}>
            <div className= {styles.Art}> <h1> Quatrième place  </h1> </div>
            <img src={currentAuthor.profile} alt={currentAuthor.name} className={styles.bestAuthorProfile} />
            <p> Backend developer </p>
            <button className={styles.readMoreButton}>Découvrez mes articles</button>
        </div>

        
    );
};



//another article 

const BestArticleBlock2: React.FC<Props> = ({ article }) => {
    // Provide a default value in case article is not provided
    const defaultArticle: Article = {
        id: 0,
        title: "Pourquoi google a viré l'équipe du pyhton ?",
        image: "developpeur-python.png",
        content:"",
    };

    // Use article prop if provided, otherwise use the default article
    const currentArticle = article || defaultArticle;

    return (
        <div className={styles.bestArticleBlock2}>
            <img src={currentArticle.image} alt={currentArticle.title} className={styles.bestArticleImage} />
            <p>Plusieurs médias et forum (Reddit, Hacker News et social.coop) rapportent que Google a licencié toute son 
                équipe chargée du langage Python. Interrogé sur son sort, la firme de Mountain View a toutefois nié que ces licenciements o
                nt concerné toute l'entreprise. "L'équipe Python de Google était une petite équipe, dont la plupart des membres faisaient 
                également partie du comité de pilotage Python ou étaient des développeurs Python de base", a déclaré une source proche du dossier sur Hacker News. "Ces personnes avaient des dizaines d'années d'expérience en Python. Leurs connaissances et leurs relations avec la communauté sont irremplaçables". Ce langage est de plus en plus populaire ces dernières années, l'IA devenant un usage particulièrement critique.

En réponse à une question posée par InfoWorld le 29 avril, Google a déclaré que les mesures prises n'étaient
 pas des licenciements à l'échelle de la société. "Nous investissons de manière responsable dans 
 les grandes priorités de notre entreprise et dans les opportunités significatives qui s'offrent à nous. 
 Afin de nous positionner au mieux sur ces points, tout au long du second semestre 2023 et en 2024, un certain nombre 
 de nos équipes ont procédé à des changements pour devenir plus efficaces et mieux travailler, supprimer des couches et aligner leurs 
 ressources sur leurs priorités en matière de produits", a déclaré un porte-parole de Google. "Grâce à cela, nous simplifions nos structures 
 pour donner aux employés 
plus de possibilités de travailler sur nos avancées les plus innovantes et les plus importantes." </p>
            <button className={styles.readMoreButton}>Lire plus</button>
        </div>

        
    );
};

// Footer component

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.flexContainer}>
                <div className={styles.content}>
                    <div className={styles.footheaders}>
                    <h1>A propos de nous</h1></div>
                    <p>Bek technologies est le blog dont vous trouverez toutes les informations sur les nouvelles technologies, des articles rédigées par des spécialistes , en une seule page vous pouvez vous informez sur le big data , cyber security ou n'importe quel domaine qui vous interesse.</p>
                </div>
                <div className={styles.content}>
                <div className={styles.footheaders}>
                    <h1>Nos réseaux sociaux</h1></div>
                    <ul className={styles.link}>
                        <li className={styles.twitter}>
                            <a href="https://twitter.com/example" className="twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li className={styles.facebook}>
                            <a href="https://facebook.com/example" className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li className={styles.instagram}>
                            <a href="https://instagram.com/example" className="instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                <div className={styles.footheaders}>
                   <h1>S'inscrire</h1></div>
               <form className={styles.form}>
                <div className={styles.inputGroup}>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" placeholder="Enter your name" />
              </div>
            <div className={styles.inputGroup}>
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" placeholder="Enter your email" />
             </div>
             <button type="submit">Envoyer</button>
              </form>
</div>

               <div className={styles.copyright}> <h3>© 2024 BEK Technologies. All rights reserved.</h3>
               </div>
            </div>
        </footer>
    );
};






const ArticlesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
    };

    return (
        <div>
        <Header />
        <HeroBanner />
        <div className={styles.categoryTitleContainer}>
                <div className={styles.categoryLine}></div> {/* Left line */}
                <div className={styles.categoryTitle}>
                    <h2><strong>Categories</strong></h2>
                </div>
                <div className={styles.categoryLine}></div> {/* Right line */}
            </div>
        <div className={styles.categoryList}>
        
            {categories.map(category => (
                <div key={category.id} className={styles.categoryItem}>
                    <Link href="#">
                        <div
                            className={styles.categoryContent}
                            onClick={() => handleCategoryClick(category.name)}
                            style={{ backgroundImage: `url(${category.image})` }}
                        >
                            <button className={styles.categoryButton}>{category.name}</button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        
        {selectedCategory && (
            <div className={styles.secondary}>
                <h2>{selectedCategory}</h2>
                <div className={styles.articlesContainer}>
                        {articlesData[selectedCategory].map(article => (
                            <div key={article.id} className={styles.article}>
                                <img src={article.image} alt={article.title} />
                                <h3>{article.title}</h3>
                                <p> {article.content}</p>
                            </div>
                        ))}
                    </div> 
            </div>
        )}

<div className={styles.categoryTitleContainer}>
                <div className={styles.categoryLine}></div> {/* Left line */}
                <div className={styles.categoryTitle}>
                    <h2><strong>Meilleurs articles du mois</strong></h2>
                </div>
                <div className={styles.categoryLine}></div> {/* Right line */}
            </div>
            <div className= {styles.Art}> <h1> Comment obtenir Chatgpt 4 gratuitement </h1> </div>
            <BestArticleBlock />
            <div className={styles.categoryTitleContainer}>
                <div className={styles.categoryLine}></div> {/* Left line */}
                <div className={styles.categoryTitle}>
                    <h2><strong>Meilleurs articles du mois</strong></h2>
                </div>
                <div className={styles.categoryLine}></div> {/* Right line */}
            </div>
            <div className= {styles.Art}> <h1> Google dépasse son équipe python </h1> </div>
            <BestArticleBlock2 />
            <div className={styles.categoryTitleContainer}>
                <div className={styles.categoryLine}></div> {/* Left line */}
                <div className={styles.categoryTitle}>
                    <h2><strong>Meilleurs autheur du mois</strong></h2>
                </div>
                <div className={styles.categoryLine}></div> {/* Right line */}
            </div>
            <div className={styles.authorBlocksContainer}>
            
            <BestAuthorBlock /> 
            
            <BestAuthorBlock2 />
            
            <BestAuthorBlock3 />
            </div>
        <Footer />
    </div>
    );
};

export default ArticlesPage;