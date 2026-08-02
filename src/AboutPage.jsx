import React from "react";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  let params = useParams();
  console.log(params.id);
  return <div>AboutPage</div>;
};

export default AboutPage;
