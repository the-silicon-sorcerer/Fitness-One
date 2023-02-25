"use client";

import { useRouter } from "next/navigation";
import LoadingSpinner from "../components/(elements)/loadingSpinner/loadingSpinner.component";

interface RedirectLinkProps {
  url: string;
}

const RedirectLink = ({ url }: RedirectLinkProps) => {
  const router = useRouter();
  router.push(url);

  return <LoadingSpinner />;
};

export default RedirectLink;
