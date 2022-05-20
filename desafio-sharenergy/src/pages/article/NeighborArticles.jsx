import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LinkButton from "../../components/LinkButton";

function NeighborArticles({ previousArticleId, nextArticleId }) {

  const goToTop = () => window.scrollTo(0, 0);

  return (
    <Flex w="full" justify="space-between" mt="2em" borderRadius=".25em">
      <Box onClick={goToTop} role="group" minW="120px">
        {previousArticleId && (
          <LinkButton
            to={`/articles/${previousArticleId}`}
            boxShadow="0px 4px 6px -3px rgba(0,0,0,.2)"
            _hover={{ bg: "gray.50" }}
          >
            <ChevronLeftIcon
              h="7 "
              w="7"
              transition="all 100ms ease-in-out"
              ml="-0.5em"
              _groupHover={{ ml: "-.25em", mr: ".5em" }}
            />
            <Text>Artigo anterior</Text>
          </LinkButton>
        )}
      </Box>

      <Box onClick={goToTop} minW="120px" role="group">
        {nextArticleId && (
          <LinkButton
            to={`/articles/${nextArticleId}`}
            boxShadow="0px 4px 6px -3px rgba(0,0,0,.2)"
            _hover={{ bg: "gray.50" }}
          >
            <Text>Próximo artigo</Text>
            <ChevronRightIcon
              h="7"
              w="7"
              transition="all 100ms ease-in-out"
              mr="-0.5em"
              _groupHover={{ ml: "0.5em", mr: "-.25em" }}
            />
          </LinkButton>
        )}
      </Box>
    </Flex>
  );
}

export default NeighborArticles;
