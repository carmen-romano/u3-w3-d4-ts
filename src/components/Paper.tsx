import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Result } from "./interfaces/IPaper";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import DataFormatted from "./DataFormatted";

const Paper = () => {
  const [papers, setPapers] = useState<Result[]>([]);

  const papersFetch = async () => {
    try {
      const resp = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (resp.ok) {
        const papersResult = await resp.json();

        console.log("papersResult:", papersResult)
        setPapers(papersResult.results);
      } else {
        throw new Error("Err");
      }
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    papersFetch();
  }, []);

  return (
    <Container>
      <Row>
        {papers.map((paper) => (
          <Col key={paper.id} md={6} className="g-3">
            <Card className="card-paper" >
              <Card.Img src={paper.image_url} width={50} className="img-card-paper"/>
              <Card.Body>
                <DataFormatted dataPubblicazione = {paper.updated_at}/>
                <Card.Title className="fw-bold fs-2 mb-3">{paper.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted my-3">
                  {paper.news_site}
                </Card.Subtitle>
                <Card.Text>
                  {paper.summary}
                </Card.Text>
                <Link to={`/detail/${paper.id}`}> Read more </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Paper;
