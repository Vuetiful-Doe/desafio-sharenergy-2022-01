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