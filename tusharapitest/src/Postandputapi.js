import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Box,Typography,Button,TextField} from '@material-ui/core'
export default function Post(){
  function Validate(body) {
    if (
      /\b[a-z]|\w[A-Z]/ .test(
        body
      )
    ) {
      return true;
    }
    
    return false;
  }
const [body,setBody]=useState('')
const [title,setTitle]=useState('')
const [Id,setId]=useState(1)
const [userId,setUserId]=useState(1)
const postsubmit=async ()=>
{
  console.log('body', body);
  console.log('title', title);
  console.log('userId',userId);

  if ( body !==" " && title !==" " )
    {   
     setUserId(userId+1)
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts',
      {
     body:body,
     title:title,
     userId:userId
    }
      );
      console.log('res', res);
alert("Successfully Item Added ")
    }
}
const putsubmit=async ()=>{
  console.log('Id',Id);
  console.log('body', body);
  console.log('title', title);
  console.log('userId', userId);
  setId(Id+1)
  setUserId(userId+1)
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1',
  {
  Id:Id,
 body:body,
 title:title,
 userId:userId
  }
  );
  console.log(response);
  alert("Successfully Item updated ")
}


return(<div>
     <center><Box className="Mainbox3"><form>
      <Typography variant="h6" color="textPrimary" component="h2" gutterBottom>
       <strong>Body</strong>
      </Typography>
      <TextField label="Enter body text" color="primary " variant="outlined" name="body" gutterBottom value={body}  onChange={(e) => setBody(e.target.value)}/>  
      {!Validate(body) && (
            <p style={{ color: 'red' }}>Please enter Body</p>
          )
      }
     <Typography variant="h6" color="textPrimary" component="h2"gutterBottom>
       <strong>Title</strong>
      </Typography>
      <TextField label="Enter title text"  color="primary " variant="outlined" name="title" gutterBottom value={title}  onChange={(e) => setTitle(e.target.value)} />
      {!Validate(title) && (
            <p style={{ color: 'red' }}>Please enter title</p>
          )
      }
      <br /> <br /> 
          <Button  variant="contained" color="Primary" onClick={postsubmit} gutterBottom>POST DATA</Button>
         &nbsp; <Button variant="contained" color="Primary" onClick={putsubmit}  gutterBottom>PUT DATA</Button>
          <br/>
          </form>
          </Box></center>
</div>
)
}
