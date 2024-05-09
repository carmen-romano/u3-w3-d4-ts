import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import DataFormatted from "./DataFormatted";
import { Result } from "./interfaces/IPaper";

const PaperDetails = () => {
  const [paper, setPaper] = useState<Result | null>(null);
  const [isLoading, setIsLoading]= useState(true) 
  type params = {
    id: string;
  };
const { id } = useParams<params>();


  const fetchPaperDetail = async () => {
    try {
      const resp = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );
      if (resp.ok) {
        const paperResult = await resp.json();
        console.log("paper:", paperResult);
        setPaper(paperResult);
        setIsLoading(false)
      } else {
        throw new Error("Err");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaperDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); 

  return (
    <Container>
        {isLoading && <Spinner animation="border" variant="primary" />} 
      <Row>
        {paper && (
          <Col md={9} className="mx-auto mb-5">
            
              <Card className="card-paper" >
              <Card.Img variant="top" src={paper.image_url} />
              <Card.Body>
              <Card.Title className="fw-bold fs-2 mb-3">{paper.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {paper.news_site}
                </Card.Subtitle>
                <Card.Text>{paper.summary}</Card.Text>
                <DataFormatted dataPubblicazione = {paper.updated_at}/>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default PaperDetails;
