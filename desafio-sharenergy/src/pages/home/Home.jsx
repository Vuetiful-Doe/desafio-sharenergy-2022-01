import React, { useEffect, useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import ArticleList from "../../components/ArticleList/ArticleList";
import MainContainer from "../../components/MainContainer";
import BaseInput from "../../components/BaseInput";
import BaseSelect from "../../components/BaseSelect";

import api from "../../services/spaceFlightApi/apiClient";
import { getArticles } from "../../services/spaceFlightApi";
import { articleParamsValidator } from "../../utils/queryParamsValidator";
import { createISODate } from "../../utils/date";

const initialValues = {
  title: "",
  startDate: null,
  endDate: null,
  pageSize: 10,
};

function Home() {
  const [articles, setArticles] = useState([]);
  
  const { register, handleSubmit } = useForm(initialValues);

  const search = async (data) => {

    let queryParams = articleParamsValidator({
      title_contains: data.title,
      _limit: parseInt(data.pageSize),
      publishedAt_gte: data.startDate,
      publishedAt_lte: data.endDate,
    });

    

    console.log("@Query params",queryParams)
    const _articles = await getArticles({
      params: { ...queryParams  }
    });

    console.log("REQUISIÇÂO PORRA:", _articles);
    setArticles(_articles);
    
  };


  useEffect(() => {
    const fetchArticles = async () => {
      const params = {
        _limit: 10,
      };

      try {
        const response = await api.get("/articles", { params });
        setArticles(response.data);
        console.log(response);
      } catch (e) {
        console.error("Error na request:", e);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <MainContainer>
        {/* Search Form */}

        <Flex
          p="2em"
          w="full"
          minH="5em"
          borderRadius=".5em"
          bg="#fff"
          onSubmit={handleSubmit(search)}
          direction="row"
          alignItems="flex-end"
          as="form"
          boxShadow="0px 2px 3px -1px rgba(0,0,0,.41)"
        >
          <BaseInput
            label="Título:"
            register={register}
            name="title"
            formControlProps={{ maxW: "11em", mr: "1em", maxWidth: "28em" }}
            inputProps={{ placeholder: "Pesquise por um título..." }}
          />

          <BaseInput
            label="Data inicial:"
            register={register}
            name="startDate"
            formControlProps={{ maxW: "11em", mr: "1em" }}
            inputProps={{ type: "date" }}
          />

          <BaseInput
            label="Data final:"
            register={register}
            name="endDate"
            formControlProps={{ maxW: "11em", mr: "1em" }}
            inputProps={{ type: "date" }}
          />

          <BaseSelect
            label="# de itens"
            formControlProps={{ maxW: "7em", mr: "1em" }}
            selectProps={{ bg: "#fff", size: "lg", default: "10" }}
            options={[10, 25, 50, 100]}
            name="pageSize"
            register={register}
          />

          <Button
            color="#fff"
            type="submit"
            bg="#2E90FF"
            h="auto"
            size="md"
            w="16em"
            p="1em 2em"
            _hover={{ bg: "#2976CE" }}
            className=".default-transition-options"
          >
            Pesquisar
          </Button>
        </Flex>

        <ArticleList articles={articles} />
      </MainContainer>
    </>
  );
}

export default Home;
