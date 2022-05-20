import { Divider, Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import React from "react";
import IoniconsCalendarIcon from "../../components/CustomIcons/IoniconsCalendarIcon";
import { Link as RouterLink } from "react-router-dom";

import RocketIcon from "../../components/CustomIcons/RocketIcon";
import LinkButton from "../../components/LinkButton";


function RelatedArticles({articleId, events = [], launches = [] }) {
  return (
    <>
      {(events.length > 0 || launches.length > 0) && (
        <Flex
          // bg="green.300"
          w="full"
          justify="space-between"
          minH="80px"
          // pt="1em"
          alignItems="center"
          marginTop="4em"
        >
          {events.length > 0 && (
            <LinkButton
              to={`/articles/${articleId}/events`}
              display="flex"
              direction="column"
              alignItems="start"
              border="2px solid #2E90FF"
              p="1.5em"
              role="group"
              _hover={{bg:"#2E90FF", color:"#fff"}}
            >
              <Heading
                as="h2"
                size="md"
                mb=".5em"
                display="flex"
                alignItems="center"
                color="#2E90FF"
                _groupHover={{ color:"#fff" }}
              >
                <IoniconsCalendarIcon fill="#2E90FF"   _groupHover={{ fill:"#fff" }}/>
                <Text ml=".5em">Eventos relacionados</Text>
              </Heading>
              <Text color="gray.500" fontWeight="500"  _groupHover={{ color:"#fff" }}> Veja os eventos relacionados a esse artigo</Text>
            </LinkButton>
            
          )}

          {events.length > 0 && launches.length > 0 && (
            <Divider orientation="vertical" h="90px" bg="gray.300" w="1px" />
          )}

          {launches.length > 0 && (
            <LinkButton
              to={`/articles/${articleId}/launches`}
              display="flex"
              alignItems="start"
              border="2px solid #ff732E"
              direction="column"
              p="1.5em"
              role="group"
              _hover={{bg:"#ff732E", color:"#fff"}}
            >
              <Heading
                as="h2"
                size="md"
                mb=".5em"
                display="flex"
                alignItems="center"
                color="#FF732E"
                _groupHover={{ color:"#fff" }}
                
              >
                <RocketIcon fill="#FF732E" _groupHover={{fill:"#fff"}}/>
                <Text ml=".5em">
                  Lançamentos relacionados
                </Text>
              </Heading>
              <Text color="gray.500" fontWeight="500"  _groupHover={{ color:"#fff" }}> Veja os lançamentos relacionados a esse artigo</Text>
            </LinkButton>
          )}
        </Flex>
      )}
    </>
  );
}

export default RelatedArticles;
