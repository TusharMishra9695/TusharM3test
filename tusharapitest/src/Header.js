import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import Getanddeleteapi from './Getanddeleteapi'
export default function Header(){
    return(<div>
        <AppBar><center>
            <Toolbar>
            <Link to="/get"  exact="true" style={{textDecoration:"none",paddingRight:" 20px",borderRight:"2px solid white"}}>
            <Typography variant="h5"  color="default" component="h2" style={{color:"white"}} >
            <strong>GET & DELETE API </strong>
                  </Typography>
</Link>
<Link to="/post"  style={{textDecoration:"none",paddingLeft:" 20px"}}>
     <Typography variant="h5"   component="h2"  style={{color:"white"}}>
              <strong>POST & PUT API</strong>
                  </Typography>
     </Link>
            </Toolbar></center>
        </AppBar>
    </div>)
}