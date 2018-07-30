// Main index page
import React from "react";
import fetch from "isomorphic-unfetch";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Layout from "../components/Layout";

// Style jsx doesn't seem to play well with bootstrap
// so we have to use this to style
const cardStyle = {
  marginTop: 20
};

const Index = (props) => (
  <Layout>
    <ul>
      {/* Uses different data in json to render list  */}
      {props.posts.map(({ title, id, url, description, image_url }) => (
        <Card style={cardStyle} key={id}>
          <CardImg src={image_url} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <a href={url} target="_blank" rel="noopener norefferer">
                {title}
              </a>
            </CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  // Query of data to get json
  const res = await fetch("https://publist.ai/api/v2/jobs.frontend", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAsIm5hbWUiOiJNaWNoYWVsIEJhcnRpZG8iLCJlbWFpbCI6Im1pY2hhZWx2YmFydGlkb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZW1haWxfdmVyaWZpY2F0aW9uX2NvZGUiOiIxMjgxOTkiLCJwYXNzd29yZCI6IiQyYSQxMCRGNmZ0YlJ6ZXBod0VaNTguNkRqcTB1cWhXZ3BXdkV3Zy9ZQ3ZlczcxMjZQZy5Ga25yL2o1bSIsInBlcm1pc3Npb25zIjpudWxsLCJ0aW1lem9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMiLCJpcF9hZGRyZXNzIjoiNjcuMTYxLjguMzkvMzIiLCJvcHRpb25zIjp7fSwibWV0YWRhdGEiOnt9LCJsYXN0X2xvZ2luIjoiMjAxOC0wNy0yNlQwMTowNjozMy4yMjdaIiwibGFzdF9hY3RpdmUiOiIyMDE4LTA3LTI2VDAxOjA2OjMzLjIyN1oiLCJ1cGRhdGVkIjoiMjAxOC0wNy0yNlQwMTowNjozMy4yMjdaIiwiY3JlYXRlZCI6IjIwMTgtMDctMjZUMDE6MDY6MzMuMjI3WiIsImlhdCI6MTUzMjU2NzE5NCwiZXhwIjoxNTMzNzc2Nzk0fQ.zbTlThqT_m3PQT6dV5O2wKhBhOmhO7BtCQx3KRae7lw",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query: "tech" })
  });
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.data.length}`);

  return {
    posts: data.data
  };
};

export default Index;
