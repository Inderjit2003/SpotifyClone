import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';
import Showall from './Showall';
import AllCards from './AllCards';


// artists items
const artists=[
  {
    img:'https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca',
    name:'Pritam',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3',
  name:'Arijit Singh',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
},
,
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
}
]
export default function Plylist() {

  
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar />
    
    <div>
      {/* <MidPlylist artist={artists} album={album} radio={radio} playlist={playlist} /> */}
      <Showall artist={artists} />
    </div>
    </Card>
    </div>
  )
}