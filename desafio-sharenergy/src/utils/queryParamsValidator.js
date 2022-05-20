import { formatDate } from "./date";

function isFunction(fn) {
  if (!fn || typeof fn !== "function") return false;
  return true;
}

function isValidObject(object) {
  if (
    !object ||
    typeof object != "object" ||
    Array.isArray(object) ||
    Object.keys(object).length == 0
  )
    return false;

  return true;
}

function createParamsValidator(validations) {
  if (!isValidObject(validations)) return;

  const validationFns = {};

  for (const validationFnKey in validations) {
    const validationFn = validations[validationFnKey];

    if (isFunction(validationFn)) {
      validationFns[validationFnKey] = validationFn;
    }
  }

  return (params) => {
    if (!isValidObject(params)) return;

    const validParams = {};

    for (const param in params) {
      const paramValue = params[param];

      if (
        param in validationFns &&
        validationFns[param](paramValue, param, params)
      ) {
        validParams[param] = paramValue;
      }
    }

    return validParams;
  };
}

const validations = {
  title_contains: (value) => value != "",
  _limit: (value) => [10, 25, 50, 100].includes(parseInt(value)),
  publishedAt_gte: (value) => {
    const date = formatDate(value);
    if(!date) return;
    return true
  },
  publishedAt_lte: (value) => {
    const date = formatDate(value);
    if(!date) return;
    return true
  }
};