import React from "react";
import { useTranslation } from "react-i18next";

export const Studies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("openingMessage")}</p>
      <p>{t("studies")}</p>
    </div>
  );
};
