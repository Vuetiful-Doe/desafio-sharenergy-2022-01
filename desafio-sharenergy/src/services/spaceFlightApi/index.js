import api from "./apiClient";

//Função para consultar os `articles` da Api. O retorno padrão da função sempre será um vetor vazio;
export async function getArticles(options = {}) {
  try {
    const articles = await api.get("/articles", options);

    //Verifica se `articles` não e um vetor ou se ele é um vetor vazio, caso verdadeiro, a função retorna `[]`;
    if (!Array.isArray(articles?.data) || articles?.data.length === 0)
      return [];

    return articles.data;
  } catch (error) {
    console.error("Erro ao tentar carregar os artigos: ", error);
  }

  return [];
}

export async function getArticleById(articleId) {
  if (!articleId) return;

  try {
    const article = await api.get(`/articles/${articleId}`);
    return article?.data;
  } catch (error) {
    console.error(
      `Erro ao tentar carregar o artigo de ID => (${articleId}): `,
      error
    );
  }

  return;
}

export async function getNextArticleId(articleId) {
  if (!articleId) return;

  const nextArticle = await getArticles({
    params: {
      _limit: 1,
      id_gt: articleId,
      _sort: "id:asc",
    },
  });

  if (nextArticle?.length === 0 || nextArticle[0]?.id == undefined) return;

  return nextArticle[0].id;
}

export async function getPreviousArticleId(articleId) {
  if (!articleId) return;

  const previousArticle = await getArticles({
    params: {
      _limit: 1,
      id_lt: articleId,
      _sort: "id:desc",
    },
  });

  if (previousArticle?.length === 0 || previousArticle[0].id == undefined)
    return;

  return previousArticle[0].id;
}

export async function getArticlesByEventById(eventId) {
  if (!eventId) return;

  try {
    const event = await api.get(`/articles/event/${eventId}`);
    return event?.data;
  } catch (error) {
    console.error(`Erro ao tentar carregar evento de ID:(${eventId}) =>`, error);
  }

  return;
}

export async function getArticlesByLaunchId(launchId) {
  if (!launchId) return;

  try {
    const launch = await api.get(`/articles/launch/${launchId}`);
    return launch?.data;
  } catch (error) {
    console.error(`Erro ao tentar carregar lançamento de ID:(${launchId}) `, error);
  }
}

export async function getAllRelatedArticles(
  articleId,
  topic,
  nestedFetchFn = getArticlesByEventById
) {
  topic = ["events", "launches"].includes(topic) ? topic : "events";

  try {
    const mainArticle = await getArticleById(articleId);
    if (mainArticle?.[topic]?.length > 0) {
      const topicRelatedArticlesRequest = mainArticle[topic].map((event) =>
        nestedFetchFn(event.id)
      );

      const settledRequests = await Promise.allSettled(
        topicRelatedArticlesRequest
      );

      const relatedArticles = settledRequests
        .filter((settledPromise) => settledPromise.status === "fulfilled")
        .map((fulfilledPromise) => fulfilledPromise.value)
        .reduce((allArticles, articlesRelatedToEvent) => {
          allArticles.push(...articlesRelatedToEvent);
          return allArticles;
        }, []);

      return relatedArticles;
    }
  } catch (error) {
    console.error(`Erro ao tentar consultar os artigos relacionados ao artido de ID:(${articleId}) =>`, error);
  }
}