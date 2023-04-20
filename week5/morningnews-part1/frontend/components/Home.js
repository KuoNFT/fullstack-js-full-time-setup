import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

function Home() {
  const [topArticle, setTopArticle] = useState({});

  const [articlesData, setArticlesData] = useState([])
  
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:3000/articles'); // Remplacez '/articles' par l'URL de votre route backend
      const data = await response.json();
  
      if (data.articles && data.articles.length > 0) {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.slice(1));
      }
    };
  
    fetchArticles();
  }, []);
  

  const articles = articlesData.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle} />

      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
