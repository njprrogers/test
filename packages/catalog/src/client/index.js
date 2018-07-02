import Items from "../api-0.5.16/items";
import Documents from "../api-0.5.16/documents";
import Languages from "../api-0.5.16/languages";
import Countries from "../api-0.5.16/countries";
import Currencies from "../api-0.5.16/currencies";

export const itemsClient = new Items({
  host: "https://api.flow.io",
  auth:
    "xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh"
});
export const documentsClient = new Documents({
  host: "https://api.flow.io",
  auth:
    "xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh"
});
export const languagesClient = new Languages({
  host: "https://api.flow.io",
  auth:
    "xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh"
});
export const countriesClient = new Countries({
  host: "https://api.flow.io",
  auth:
    "xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh"
});
export const currenciesClient = new Currencies({
  host: "https://api.flow.io",
  auth:
    "xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh"
});
