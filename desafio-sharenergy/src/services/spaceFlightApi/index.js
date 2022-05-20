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