import React from 'react';
import { BiMessageRounded } from "react-icons/bi";

function TechRegistrations() {
    return ( 
        <div>
            

            <div className='tabs' style={{marginTop:"8%", marginLeft:"25%",display:"flex", gap:"5%"}}> 

            <div><h3>List of Registration Forms</h3></div>
            
            </div>
            <hr style={{width:"60%",marginLeft:"25%",border:"1px solid black"}} />
            <div className='tables' style={{marginTop:"2%", marginLeft:"25%",width:"60%"}}>

<table class="table table-borderless">
  <thead>
    <tr style={{color:"gray"}}>
      <th>Date</th>
      <th>Registration ID</th>
      

    </tr>
  </thead>
  <tbody style={{boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)"}}>
    <tr>
      <td></td>
      <td></td>

      <td>
          <button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
    </tr>

    <tr>
      <td></td>
      <td></td>

      <td><button style={{textDecoration:'Underline', color:" #f8b609",border:"0px solid",background:"transparent"}}>More Details...</button>
      </td>
    </tr>
  </tbody>
</table>


          </div>



        </div>
     );
}

export default TechRegistrations;