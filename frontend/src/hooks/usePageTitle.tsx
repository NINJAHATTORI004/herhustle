import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = "HerHustle | " + title;
  }, [title]);
};
