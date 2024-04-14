import React from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';
// import Showall from './Showall';

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

//album items
const album=[{
  img:'https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9',
  name:'ANIMAL',
  desc:'Manan Bhardwaj, Vishal Mishra, Jaani '
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02ecdddbfde15bc99b5bedffd4',
  name:'Angrej',
  desc:'Amrinder Gill'
} ,
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
}   ]


//radio items
const radio=[{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4YRxDV8wJFPHPTeXepOstw/en-GB',
  name:'Arijit Singh Radio',
  desc:'With Nwha Kakkar, Pritam, KK and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB',
  name:'Diljit dosanjh Radio',
  desc:'With Garry Sandhu, Ranjit Bawa, Amrinder Gill and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
} ,
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
}    ]

//playlist items
const playlist=[{
  img:'https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037',
  name:'lofi beats',
  desc:'chill beats, lofi vibes, new tracks every week...'
},
{
  img:'https://i.scdn.co/image/ab67706f000000023386614f0885feec7bc6bfc5',
  name:'Today`s Top Hits ',
  desc:'Dua Lips is on top of the Hottest 50!'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d',
  name:'Chillout Lounge',
  desc:'Just lean back and enjoy relaxed beats.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002baed3d65fac432ea1f7f7cd0',
  name:'All Out 2020s',
  desc:'The biggest songs of the 2020s.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002bdeb1c317ac2dd10f2397e4c',
  name:'Jazz in the Background ',
  desc:'Soft instrumental Jazz for all your activities.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002f4d83a6cb7f51f6d9f6717de',
  name:'Chill Hits',
  desc:'Kick back to the best new and recent chill hits.'
}    ]


// const album=[{
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9b62680615324d5ee61a98e9/1/en-GB/default',
//   name:'Daily Mix 1',
//   desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9973157bdaedef3f77ef8e13/2/en-GB/default',
//   name:'Daily Mix 2',
//   desc:'Sidhu Moose Wala, Karan Aujla, AP Dhillon and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab67616d0000b273869ab7ebd03e0fc211518164/3/en-GB/default',
//   name:'Daily Mix 3',
//   desc:'Sant Niranjan Singh Ji, Bir Singh , Bhai Rai Singh and more'
// },
// {
//   img:'https://i.scdn.co/image/ab67706f0000000263ef641f3fa47592fe798e91',
//   name:'Daily Mix 4',
//   desc:'Jassi Gill, Akhil, B Praak and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ca53f9cef775f08f0c1f5d2/5/en-GB/default',
//   name:'Daily Mix 5',
//   desc:'Jordan Sandhu, Balraj, Diljit Dosanjh and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ca53f9cef775f08f0c1f5d2/6/en-GB/default',
//   name:'Daily Mix 6',
//   desc:'Jordan Sandhu, Kulbir Jhinjer, Amrinder Gill and more'
// }    ]

export default function Plylist() {
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar />
    
    <div>
      <MidPlylist artist={artists} album={album} radio={radio} playlist={playlist} />
      {/* <Showall artist={artists} album={album} radio={radio} playlist={playlist} /> */}
    </div>
    </Card>
    </div>
  )
}