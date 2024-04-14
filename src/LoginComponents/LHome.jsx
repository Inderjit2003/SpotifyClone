import React from 'react'
import SplitPane from 'react-split-pane'
import Sidebar from './Sidebar'
import Plylist from './Plylist'
import { Container } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Bottom from './Bottom'

export default function Home() {
  return (
   <>
       <div className='container'>
        <Container className={`${Style.container}`}>
          <SplitPane   split='vertical'
             minSize={280}
             maxSize={-1100}
             defaultSize={372}
             style={{backgroundColor:'black'}}
             >
            <div  className={` me-1 ${Style.pane}`} >
                  <Sidebar />
            </div>
            <div className={`me-1 ${Style.pane}`}>
                <Plylist />
            </div>
          </SplitPane>
          </Container>
       </div>
       
       <Bottom />
   </>
  )
}