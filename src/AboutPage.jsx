import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const AboutPage = () => {
  let params = useParams();
  console.log(params.id);
  let [query] = useSearchParams();
  console.log(query.get("name"));
  console.log(query.get("age"));
  return <div>AboutPage</div>;
};

export default AboutPage;
