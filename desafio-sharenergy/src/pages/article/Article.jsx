import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Image, Text, Link, VStack } from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  CalendarIcon,
  TimeIcon,
  StarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowBackIcon
} from "@chakra-ui/icons";

import {
  getArticleById,
  getNextArticleId,
  getPreviousArticleId,
} from "../../services/spaceFlightApi";

import HeroImage from "../../components/HeroImage";
import { formatDate } from "../../utils/date";
import LinkButton from "../../components/LinkButton";
import IconText from "../../components/IconText";
import BulletSpacer from "../../components/BulletSpacer";
import NeighborArticles from "./NeighborArticles";
import RelatedArticles from "./RelatedArticles";
// import MainContainer from "../../../components/ToDeleteContainer";
import MainContainer from "../../components/MainContainer";
import GoToHomeButton from "../../components/GoToHomeButton";

function Article() {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [nextArticleId, setNextArticleId] = useState();
  const [previousArticleId, setPreviousArticleId] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const article = await getArticleById(id);
      if (article) {
        setArticle(article);
        const _previousArticleId = await getPreviousArticleId(article.id);
        const _nextArticleId = await getNextArticleId(article.id);

        setPreviousArticleId(_previousArticleId);
        setNextArticleId(_nextArticleId);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <MainContainer p="0 3em">
        
        {/* Go to Home */}
       <GoToHomeButton/>

        {/* Article Contaienr */}
        <Flex direction="column" borderRadius=".5em" p="3em" bg="#fff">
          <HeroImage src={article.imageUrl}  />
          {/* Article title */}
          <Text
            fontWeight="bold"
            textAlign="left"
            as="h1"
            fontSize="2xl"
            lineHeight={1.1}
            w="full"
            mt="1em"
          >
            {article.title}
          </Text>
          <Flex p="1em 0" w="full" bg="" wrap="wrap">
            <IconText
              icon={CalendarIcon}
              iconProps={{ mr: ".25em" }}
              color="#454"
            >
              Publicado em&nbsp;
              {formatDate(article.publishedAt)}
            </IconText>

            <BulletSpacer />

            <IconText icon={TimeIcon} iconProps={{ mr: ".25em" }}>
              Atualizado em&nbsp;
              {formatDate(article.publishedAt)}
              {/* Bullet spacer */}
            </IconText>

            <BulletSpacer />

            {/* Link to full article */}
            <IconText
              icon={ExternalLinkIcon}
              iconProps={{ mr: ".25em" }}
              textProps={{ color: "blue.500" }}
            >
              <Link href={article.url} isExternal>
                Ler artigo completo ({article.newsSite})
              </Link>
            </IconText>

            {article.featured && (
              <>
                <BulletSpacer />
                <IconText
                  icon={StarIcon}
                  iconProps={{ mr: ".25em" }}
                  textProps={{ color: "purple.400" }}
                >
                  Promovido
                </IconText>
              </>
            )}
          </Flex>
          {/* Article summary */}
          <Text fontSize="lg" mt="1em">
            {article.summary}
          </Text>

          <RelatedArticles
            articleId={article.id}
            events={article.events}
            launches={article.launches}
          />
        </Flex>

        <NeighborArticles
          previousArticleId={previousArticleId}
          nextArticleId={nextArticleId}
        />
        {/* </MainContainer> */}
      </MainContainer>
    </>
  );
}

export default Article;
