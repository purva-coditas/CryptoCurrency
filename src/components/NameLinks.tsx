import React from "react";
import { Link } from "react-router-dom";

const NameLinks = (props: any) => (
  <Link
    to={{
      pathname: `/coinDisplayPage/${props.value}`,
    }}
  >
    {props.value}
  </Link>
);

export default NameLinks;
