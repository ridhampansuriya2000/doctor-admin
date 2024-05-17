import React from 'react'
import { BsSearch} from 'react-icons/bs';
import AdminTable from '../../Common/AdminTable';


const Doctor_listing = () => {
  return (
    <div>
         <div className="body_search">
           <BsSearch />
              <input type="text" placeholder="Search" />
          </div>
         <AdminTable/>
    </div>
  )
}

export default Doctor_listing