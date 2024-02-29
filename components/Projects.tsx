import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project />
        ))}
      </div>
    </section>
  );
}

function Project() {
  return <div></div>;
}
