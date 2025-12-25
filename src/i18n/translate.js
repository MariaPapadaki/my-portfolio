import en from "./en.json";
import el from "./el.json";

export const languages = {
    en,
    el
};

export function useTranslation(lang){
    return languages[lang];
};

export function getLanguage(url){
    const lang = url.pathname.split("/")[1];
    return lang === "el"?"el":"en";
}