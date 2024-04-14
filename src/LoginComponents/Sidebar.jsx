import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import UpSidebar from './UpSidebar'
import MidSidebar from './MidSidebar'
import FotSidebar from './FotSidebar'

export default function Sidebar() {
  return (
    <>
       <div>
        <Stack gap={2}>
          <div className='Up'>
            <Card style={{backgroundColor:'#121212' , border:'none'}} className='ms-2 mt-2'>
            <UpSidebar />
            </Card>
          </div>
          <div className='mid'>
            <Card style={{backgroundColor:'#121212' , border:'none', maxHeight:'500px'}} className=' ms-2'>
                  <MidSidebar />
                  
            </Card>

          </div>
        </Stack>
       </div>
    </>
  )
}