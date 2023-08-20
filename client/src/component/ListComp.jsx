import React, { useEffect, useState } from "react";
import '../assets/css/listComp.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListCompModel from "./ListCompModel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function ListComp() {

  let [deleteId,setId] = useState(0)

  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/ReadBlog")
      .then((res) => res.json())
      .then((data) => setLists(data.data));
  }, [deleteId]);


  const onDelete = async(id)=>{
    let url = "http://localhost:3000/api/v1/deleteBlog/"+id
    const res = await axios.post(url)
    setId(id)
  }

  return (
    <Row xs={1} md={3} className="marginTop container mx-auto g-5">
      {
        lists.map((data,idx)=>{  
          return(
        <Col key={idx}>
        <Card className="">
          <Card.Img className="img" variant="top" src={data['image']}/>
          <Card.Body>
            <h2>{data['Title']}</h2>
            <h3>{data['Content']}</h3>
            <h5>{data['Author']}</h5>
            <p id="hide">
              {data['Details']}
            </p>
              <ListCompModel props={data}/>
              <Button onClick={()=>onDelete(data['_id'])} variant="outline-primary">Delete</Button>
            </Card.Body>
        </Card>
      </Col>
          )
        })
      }
      </Row>
  );
}

