import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList/ArticleList";

import MainContainer from "../components/MainContainer";
import {
  getAllRelatedArticles,
  getArticlesByLaunchId
} from "../services/spaceFlightApi";

function Launches() {
  const [articles, setArticles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticlesRelatedToLaunch = async () => {
     const relatedArticles = await getAllRelatedArticles(id,"launches",getArticlesByLaunchId);
      setArticles(relatedArticles);
      console.log("related articles",relatedArticles)
    };

    fetchArticlesRelatedToLaunch();
  }, [id]);

  return (
    <MainContainer p="0" bg="transparent">
      <Heading as="h1" fontSize="2rem" mb="0px">
        Eventos
      </Heading>
      <ArticleList articles={articles} />
    </MainContainer>
  );
}

export default Launches;
