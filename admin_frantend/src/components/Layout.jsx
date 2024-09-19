import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Cookies from 'universal-cookie'

    const Layout = ({children}) => {
        const cookies =new Cookies();
        return (
          <div>
              <NavBar/>
        {
            cookies.get('admin')!==undefined?
        <div className='row '>
            <div className='col-sm-2' >
                <SideBar/>  
               </div>
            <div className='col-sm-10 h-50' style={{maxHeight:'98vh' }}>
                <div className='overflow-x-hidden' style={{marginTop:"90px"}}>{children}</div>
            </div>
        </div>
        :
        <div className=' h-50  ' style={{maxHeight:'98vh'}}>
                <div style={{marginTop:"90px" , alignContent:'center'}}>{children}</div>
            </div>} 
                  
              {/* <Footer/> */}
          </div>
        )
      }
  

export default Layout