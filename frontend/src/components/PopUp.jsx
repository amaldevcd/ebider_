import "./style/popUp.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { InputGroup } from "react-bootstrap";
import {itemUrl} from "../url/url";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useLocalStorageRef from "../hooks/LocalStorage";
import Image from 'react-bootstrap/Image'
import carrot from '../assets/carrot.jpeg';
import carrot2 from '../assets/carrot2.webp';
import carrot3 from '../assets/carrot3.webp';

function PopUp(props) {
  const [name, setName] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [initalBidAmt, setInitalBidAmt] = useState(0);
  const [biddingTime, setBiddingTime] = useState(0);
  const [detailProductDescription, setDetailProductDescription] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [users, setUsers] = useState([]);
  const { auth, setAuth } = useAuth();
  const [userData, setUserData, removeUserData] = useLocalStorageRef("user");
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile1Url, setSelectedFile1Url] = useState(null);
  const [selectedFile2Url, setSelectedFile2Url] = useState(null);
  const [selectedFile3Url, setSelectedFile3Url] = useState(null);
  console.log("auth", auth);
  console.log("userData", userData);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = {
        _id_owner: userData.current._id,
        name,
        quantity,
        smallDescription,
        initalBidAmt,
        biddingTime,
        detailDescription:detailProductDescription,
        finalBidAmt:initalBidAmt,
        no_of_bid:0,
        img1_url:selectedFile1Url,
        img2_url:selectedFile2Url,
        img3_url:selectedFile3Url,

      };
      console.log("data here", data);
      const response = await axios.post(itemUrl, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        withCredentials: true,
      });
      console.log(response.data);
      console.log("item Registered Successfully!");
      props?.onAdd(response?.data?.hostel);
      props.setTrigger(false);
    } catch (err) {
      console.log(err);
      if (err.response?.status == 409) {
        console.log(" item Not  successfully");
      } else if (err?.response) {
        console.log(!err?.response);
        console.log("no server response");
      } else {
        console.log("Failed to register");
        setError("Failed to register");
        console.error(err);
      }
    }
  }

  return props.trigger ? (
    <>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3> Items Details</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
         <InputGroup className="mb-3">
                <Form.Label column sm="4">
                  {" "}
                  Name{" "}
                </Form.Label>
                {/* <InputGroup.Text>Name</InputGroup.Text> */}
                <Form.Control
                  type="text"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Name"
                  onChange={(e) => {
                  setName(e.target.value);
                  //console.log(initalBidAmt);
                }}
                />
                {/* <InputGroup.Text>.00</InputGroup.Text> */}
              </InputGroup>
              <br></br>
              <br></br>
              <InputGroup className="mb-3">
                <Form.Label column sm="4">
                  {" "}
                  Quatity{" "}
                </Form.Label>
                <InputGroup.Text>Kg</InputGroup.Text>
                <Form.Control
                  type="number"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Inital Bidding Amount"
                  onChange={(e) => {
                  setQuantity(e.target.value);
                  console.log(initalBidAmt);
                }}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
              <br></br>
              <Form.Label column sm="4">
                {" "}
                Product Small description{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                placeholder="Description"
                onChange={(e) => {
                  setSmallDescription(e.target.value);
                  console.log(smallDescription);
                }}
              />
              <br></br>
              <br></br>
              <InputGroup className="mb-3">
                <Form.Label column sm="4">
                  {" "}
                  Inital Bidding Amount{" "}
                </Form.Label>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Inital Bidding Amount"
                  onChange={(e) => {
                  setInitalBidAmt(e.target.value);
                  console.log(initalBidAmt);
                }}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
              <br></br>
              <InputGroup className="mb-3">
                <Form.Label column sm="4">
                  {" "}
                  Bidding time{" "}
                </Form.Label>
                <InputGroup.Text>T</InputGroup.Text>
                <Form.Control
                  type="number"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={(e) => {
                  setBiddingTime(e.target.value);
                  console.log(biddingTime);
                }}
                />
                <InputGroup.Text>Hours</InputGroup.Text>
              </InputGroup>
              <Form.Label column sm="4"> Product Detail description </Form.Label>
    <Form.Control as="textarea" row={3} placeholder="Description"  
         onChange={(e) => {
                setDetailProductDescription(e.target.value);
                console.log(detailProductDescription);
            }}
    />
              <br></br>
              
            </Form.Group>

             <Row className="mb-3 pop-up-image">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>1st Image</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <img  className="pop-up-image" alt="image" src={carrot}/>
                   <input type="file" hidden accept="image" id="actual-btn" value={selectedFile1} onChange={(e) => setSelectedFile1(e.target.files[0])}/>
                  <div>
                  <label
                      for="actual-btn"
                      style={{
                        backgroundColor: "transparent",

                       

                        // fontFamily: "sans-serif",
                        borderRadius: "1.5rem",
                        cursor: "pointer",
                        marginBottom: "10px",
                        position: "absolute",
                        // top: "120px",
                        // right: "180px",
                        color: "#666666",
                        transition:
                          " all .3s cubic-bezier(.175, .885, .32, 1.275)",
                      }}
                    >
                   
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM12 16.5L10.9 14.1L8.5 13L10.9 11.9L12 9.5L13.1 11.9L15.5 13L13.1 14.1L12 16.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4Z" fill="black"/>
                      </svg>
                      </label>
                  </div>
                  
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>2nd Image</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <img  className="how-work-image" alt="image" src={carrot2}/>
                <input type="file" hidden accept="image" id="actual-btn" value={selectedFile1} onChange={(e) => setSelectedFile1(e.target.files[0])}/>
                  <div>
                  <label
                      for="actual-btn"
                      style={{
                        backgroundColor: "transparent",

                       

                        // fontFamily: "sans-serif",
                        borderRadius: "1.5rem",
                        cursor: "pointer",
                        margin: "0",
                        position: "absolute",
                        
                        // top: "120px",
                        // right: "180px",
                        color: "#666666",
                        transition:
                          " all .3s cubic-bezier(.175, .885, .32, 1.275)",
                      }}
                    >
                   
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM12 16.5L10.9 14.1L8.5 13L10.9 11.9L12 9.5L13.1 11.9L15.5 13L13.1 14.1L12 16.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4Z" fill="black"/>
                      </svg>
                      </label>
                  </div>
              </Form.Group>
              <br></br>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>3rd Image</Form.Label>
                <img  className="how-work-image" alt="image" src={carrot3}/>
                <input type="file" hidden accept="image" id="actual-btn" value={selectedFile1} onChange={(e) => setSelectedFile1(e.target.files[0])}/>
                  <div>
                  <label
                      for="actual-btn"
                      style={{
                        backgroundColor: "transparent",

                       

                        // fontFamily: "sans-serif",
                        borderRadius: "1.5rem",
                        cursor: "pointer",
                        margin: "0",
                        position: "absolute",
                        // top: "120px",
                        // right: "180px",
                        color: "#666666",
                        transition:
                          " all .3s cubic-bezier(.175, .885, .32, 1.275)",
                      }}
                    >
                   
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.5C13.25 17.5 14.3127 17.0627 15.188 16.188C16.0627 15.3127 16.5 14.25 16.5 13C16.5 11.75 16.0627 10.6873 15.188 9.812C14.3127 8.93733 13.25 8.5 12 8.5C10.75 8.5 9.68733 8.93733 8.812 9.812C7.93733 10.6873 7.5 11.75 7.5 13C7.5 14.25 7.93733 15.3127 8.812 16.188C9.68733 17.0627 10.75 17.5 12 17.5ZM12 16.5L10.9 14.1L8.5 13L10.9 11.9L12 9.5L13.1 11.9L15.5 13L13.1 14.1L12 16.5ZM4 21C3.45 21 2.97933 20.8043 2.588 20.413C2.196 20.021 2 19.55 2 19V7C2 6.45 2.196 5.97933 2.588 5.588C2.97933 5.196 3.45 5 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.8043 5.97933 22 6.45 22 7V19C22 19.55 21.8043 20.021 21.413 20.413C21.021 20.8043 20.55 21 20 21H4Z" fill="black"/>
                      </svg>
                      </label>
                  </div>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br></br>
            <Button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit form
            </Button>
          </Form>
          <br />
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
export default PopUp;
