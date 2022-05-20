import React from "react";
import { VStack } from "@chakra-ui/react";

import ArticleListItem from "./ArticleListItem";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .25
    },
  },
};

function ArticleList({ articles }) {

 
  return (
    <>
      {Array.isArray(articles) && articles.length > 0 ? (
        <VStack
          as={motion.div}
          spacing={4}
          mt="8"
          bg=""
          align={"start"}
          // whileHover={{ background: "red" }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {articles.map((article) => (
            <ArticleListItem
              key={article.id}
              article={article}
              to={`/articles/${article.id}`}
            />
          ))}
        </VStack>
      ) : (
        <h1> Nenhum artigo disponível</h1>
      )}
    </>
  );
}

export default ArticleList;
