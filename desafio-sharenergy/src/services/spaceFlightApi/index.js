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