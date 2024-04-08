import React from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';

const playlistitems=[{
  img:'https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d',
  name:'Daily Mix 1',
  desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002d8fe1c03afc22a01d5109233',
  name:'Daily Mix 2',
  desc:'Sidhu Moose Wala, Karan Aujla, AP Dhillon and more'
},
{
  img:'https://i.scdn.co/image/ab67706f000000024ef13e1996f09ed4dc86eba3',
  name:'Daily Mix 3',
  desc:'Sant Niranjan Singh Ji, Bir Singh , Bhai Rai Singh and more'
},
{
  img:'https://i.scdn.co/image/ab67706f0000000263ef641f3fa47592fe798e91',
  name:'Daily Mix 4',
  desc:'Jassi Gill, Akhil, B Praak and more'
},
{
  img:'https://i.scdn.co/image/ab67706f000000028d2c0fbb4e007f6dac9db559',
  name:'Daily Mix 5',
  desc:'Jordan Sandhu, Balraj, Diljit Dosanjh and more'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481',
  name:'Daily Mix 6',
  desc:'Jordan Sandhu, Kulbir Jhinjer, Amrinder Gill and more'
}    ]

export default function Plylist() {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar />
    
    <div>
      <MidPlylist items={playlistitems} />
    </div>
    </Card>
    </div>
  )
}