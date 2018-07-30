// Overall page layout
import React from "react";
import Head from "next/head";
import { Container } from "reactstrap";
import Top from "./Top";

const Layout = (props) => (
  <div>
    <Head>
      <title>Publist</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Bootstrap and font import */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
        rel="stylesheet"
      />
    </Head>
    <Top />
    <Container>{props.children}</Container>
  </div>
);

export default Layout;
