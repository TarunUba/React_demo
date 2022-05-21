import React from 'react';
import { Player } from 'video-react';

export default Props => {
  return (
    <div className='videoi' style={{backgroundColor:"#79d7f7"}}>
      <div class="container">
        <div class="row" >
          <div class ="col-4">
            <h2>VIDEO</h2>
            <p>Id quae cumque At culpa voluptatibus quo soluta doloribus aut sint repellendus et accusamus voluptas. Et iste suscipit id veritatis mollitia et voluptates aliquid non recusandae culpa sed voluptatem ipsam qui esse sint!</p>
                        <p>Id quae cumque At culpa voluptatibus quo soluta doloribus aut sint repellendus et accusamus voluptas. Et iste suscipit id veritatis mollitia et voluptates aliquid non recusandae culpa sed voluptatem ipsam qui esse sint!</p>

          </div>
          <div class="col" style={{marginTop:"1rem"}}>
          <Player>
                  <source src="https://drive.google.com/uc?export=view&id=1Y_NSwQifVjQqYEmgHAW8B4J8mNyl66zT" />
                </Player>
          </div>
        </div>
     
    </div>
    </div>
  );
};
// https://drive.google.com/file/d/1wsmmJyIYG4eiTZrP6FOj2jmy9CVHCM5_/view?usp=sharing
// https://drive.google.com/file/d/1Y_NSwQifVjQqYEmgHAW8B4J8mNyl66zT/view?usp=sharing