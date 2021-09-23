import Header from "./components/Header";
import Button from "./components/Button";
import React, { useState } from 'react';
//import InstagramEmbed from 'react-instagram-embed'

import ns from './NS.jpg'
import moreNs from './moreNS.jpg'

function App() {
  const [view, setView] = useState(false)
  
  const onClick = () => {
    setView(!view)
  }
  
  return (
    <div className="container">
      <Header title = "Nicola Kate Stebbing" />
      <p>
        Nicola is Content Manager at <a href={"https://www.gitticonsciousbeauty.de/en"}>Gitti</a>. 
      </p>
      <p>
        She makes <a href={"https://www.instagram.com/gittibeauty/"}>great content</a>. <a href={"https://www.instagram.com/pics_by_nics/"}>Seriously</a>.
      </p>
      <p>
        She has a pet lemon called Lenny.
      </p>  
      <p>
        I heard her boyfriend is <a href={"https://www.instagram.com/syzygie.music/"}>pretty cool</a>.
      </p>
      <Button onClick={onClick} color='steelblue' text='See More' />
      {view ? <img src={moreNs} alt='Cute' style={{width:1000, height:900}} /> : ""}
      {/* <InstagramEmbed
        clientAccessToken='<appId>|<clientToken>'
        url='https://instagr.am/p/Ytlfl/'
        maxWidth={375}
        hideCaption={false}
        containerTagName='div'
        injectScript
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </div>
  );
}

export default App;
