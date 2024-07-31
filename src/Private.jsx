
import DataProvider from "./DataProvider";

export const Private = () => <div>
<h2>{DataProvider.getTranslations().private}</h2>
{DataProvider.getTranslations().accessRestricted}</div>