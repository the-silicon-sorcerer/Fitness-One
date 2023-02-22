"use client";

import type { Context } from "react";

import ProgressBar from "../../(elements)/progressBar/progressBar.component";
import ProgressFooter from "../../(elements)/progressFooter/progressFooter.component";

interface ProgressLayoutProps {
  events: number;
  children: React.ReactNode;
  context: Context<any>;
}

const ProgressLayout = ({ events, context, children }: ProgressLayoutProps) => {
  return (
    <>
      <ProgressBar context={context} events={events} />
      {children}
      <ProgressFooter events={events} context={context} />
    </>
  );
};

export default ProgressLayout;
