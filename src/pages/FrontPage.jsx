import { Button, Card, Image,Typography} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const {Title} = Typography;
export const FrontPage = () => {
  return (
    <div >
      <Card 
      style={{ 
        textAlign:'center',
        width: '100vw', 
        height:'100vh',
        backgroundImage: 'url("https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <Title style={{position:'relative',top:'300px',color:'yellow'}}>Who Are You ?</Title>
       
        <Link to={'/admindash'}>
        <Button style={{display:'inline-block',position:'relative',top:'300px', margin:'2px',fontSize:'xl'}} className='frontbtn' type='primary'>
         Admin
        </Button>
        </Link>
        <Link to={'/studentdash'}>
        <Button style={{display:'inline-block',position:'relative',top:'300px', margin:'2px',fontSize:'xl'}} className='frontbtn' type='primary'>
         Student
        </Button>
        </Link>
      </Card>
    
    </div>
  )
}
