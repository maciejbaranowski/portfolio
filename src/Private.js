import React from "react";
import DataProvider from "./DataProvider";

export const Private = () => <div>{DataProvider.getTranslations().accessRestricted}</div>