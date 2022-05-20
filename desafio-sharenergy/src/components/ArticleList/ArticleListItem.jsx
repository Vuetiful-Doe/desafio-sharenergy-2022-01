import React from "react";
import { Flex, Image, VStack, Text, Link, Box, Heading } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

import { MAX_WIDTH } from "../../utils/constants";


const listItem = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity:1, x:0}
}

function ListItem({ article, to = "/" }) {
  return (
    <Link to={to} as={RouterLink} w="full">
      <Flex
        direction="row"
        p="1.5em"
        borderRadius=".5em"
        border="2px solid #ececec"
        // h="180px"
        spacing="2em"
        bg="#fff"
        as={motion.div}
        // whileInView={{ opacity: 1, x:0 }}
        variants={listItem}
        whileHover={{scale:1.04}}
      >
        <Box >
          <img
            src={article.imageUrl}
            width="300"
            height="200"
            className="list-image"
            // loading="lazy"
            alt={article.title}
          />
        </Box>
        <VStack align="start" ml="1.25em" w="100%">
          <Heading fontSize="2xl" as="h2" fontWeight="600" lineHeight={1.25}>
            {article.title}
          </Heading>
          <Text>
            <CalendarIcon mr=".25em" />
            {new Date(article.publishedAt).toLocaleDateString("pt-bt")}
          </Text>
        </VStack>
      </Flex>
    </Link>
  );
}

export default ListItem;
