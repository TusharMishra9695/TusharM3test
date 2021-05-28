import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Main.css'
import {Typography,List,ListItem,Button,Container} from '@material-ui/core'
export default function App(){
    const [listData, setListData] = useState([]);

const getData=async ()=>{
  try{
const response = await axios.get('https://jsonplaceholder.typicode.com/posts',);
console.log(response);
setListData(response.data)
  }
  catch (err) {
    console.log('err', err);
  }
}


const deleteHandler= async (id) => {
    console.log('ID', id);
    alert("ID "+id+" deleted")
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  
    useEffect(()=>{
        getData();
    },[]);
  
    
    return(<div>
    {
   listData.map((data,i)=>{
     return(
      <Container style={{marginBottom:"40px"}}>
        < List key={i}  className="Mainbox2">
       
         <center>
          <ListItem>  <Typography variant="h6" color="primary" component="h2">Body :  </Typography> 
          <Typography variant="body2" color="textSecondary" component="p" >{data.body}</Typography></ListItem>
          <ListItem>  <Typography variant="h5" component="h2" color="primary">Id : </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{data.id}</Typography> </ListItem>
          <ListItem> <Typography variant="h5" component="h2" color="primary">Title : </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{data.title}</Typography></ListItem>
          <Button onClick={() => deleteHandler(data.id) }variant="contained" color="primary">DELETE</Button>
          </center>
     
        <br />
      </List>
      </Container>
     )
   })}
    </div>)
}