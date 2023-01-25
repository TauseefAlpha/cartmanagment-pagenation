import React from 'react'



const st = {
    borderTop: '6px solid purple',
    borderBottom: '5px solid purple',
    backgroundColor: 'rgb(59, 56, 56)',
    boxShadow: '5px 10px 18px #2f2f35'
}

function BottomFotter() {
  return (
    <div>
         <footer id="contact">
                <div className="container-fluid " style={{ backgroundColor: 'rgb(43, 40, 40)' }} >
                    <div className="container">
                        <div className="row mx-4 py-3 justify-content-around" style={st}>
                            <div className="col-md-3 ">
                                <h4 className="text-white text-center">Disclaimer</h4>
                                <p className="text-secondary">Netflix told BBC News the show "has always been presented as a drama based on historical events".

                                    Dame Judi Dench and ex-Prime Minister Sir John Major have raised concerns about the accuracy of the royal drama.
                                </p>
                                <p className="text-secondary"> link is provided if you want to wish to buy from coyright
                                    owner <span  style={{color: '#fff'}}>ahmedtause98@gmail.com</span> laptop
                                    images are provided
                                </p>

                            </div>


                            <div className="col-md-3">
                                <h4 className="text-white text-center">Contact Details</h4>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li className=" text-white nav-item "><a className="nav-link text-secondary" href="/"><i
                                        className="fa-solid fa-house px-2 " style={{fontSize: '20px', color: '#fff'}}></i>TelePHone :03145976605</a></li>
                                    <li className="text-white nav-item"><a className="nav-link text-secondary" href="/"> <i className="fa fa-google-plus" style={{ fontSize: '20px', color: '#fff',marginRight:'8px' }}></i>Email : <span 
                                        style={{color:'purple'}}>
                                        abc@gmail.com</span></a></li>
                                    <li className=" text-white  nav-item"><a className="nav-link text-secondary" href="/">
                                         {/* <span style={{ color: 'rgb(3, 52, 69)' }}> <LanguageRoundedIcon /></span> */}

                                        Website: <span
                                            style={{color:'purple'}}>
                                            www.abc.com</span></a></li>
                                </ul>
                                <center style={{color:'purple'}}><i class="fa fa-map-marker" style={{fontSize: '20px', color: '#fff'}}></i>  </center>
                                <ul className="text-white" style={{ listStyleType: 'none' }}>
                                    <li className="nav-item"> <a className="nav-link text-secondary" href="/"> MureeRoad</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link text-secondary" href="/"> Sadder</a>
                                    </li>
                                    <li className="nav-item"> <a className="nav-link text-secondary" href="/">Rawalpindi</a>
                                    </li>
                                </ul>

                            </div>


                            <div className="col-md-3">

                                <h4 className="text-white text-center">Sample Menu</h4>
                                <ul style={{ lineHeight: '300%', listStyleType: 'none'}} className="text-white">
                                    <li className=" nav-item text-white" style={{ borderBottom: '2px solid purple',alignSelf:'initial' }}> <a
                                        className="nav-link text-secondary" href="/">
                                            {/* <ChatIcon style={{color:'red'}}/> */}
                                             ODERLIKE TO DO</a> </li>
                                    <li className=" nav-item text-white" style={{ borderBottom: '2px solid purple',alignSelf:'initial'  }}> <a
                                        className="nav-link text-secondary" href="/">
                                            {/* <SignalCellularAltIcon style={{ color: "rgb(3, 52, 69)" }} />  */}
                                            SIGNAL Tower</a>
                                    </li>
                                    <li className=" nav-item text-white" style={{ borderBottom: '2px solid purple',alignSelf:'initial'  }}> <a
                                        className="nav-link text-secondary" href="/">
                                            {/* <EmojiFoodBeverageIcon style={{ color: 'rgb(3, 52, 69)' }} /> */}
                                             TEA BREAK</a> </li>
                                    <li className=" nav-item text-white" style={{ borderBottom: '2px solid purple',alignSelf:'initial'  }}> <a
                                        className="nav-link text-secondary" href="/">
                                            {/* <MoodIcon style={{ color: 'rgb(3, 52, 69)' }} /> */}
                                             Mood funny</a>
                                    </li>
                                </ul>
                            </div>





                        </div>

                    </div>

                    <div className="row  justify-content-between" style={{ backgroundColor: 'rgb(29, 26, 26)' }}>
                        <div className="col-md-4 p-2">
                            <ul className="" style={{ listStyleType: 'none' }}>
                                <li style={{ display: 'inline-block', margin: '6px' }} className="nav-item "><a className="nav-link text-light"
                                    href="/">
                                    sample link1</a></li>
                                <li style={{ display: 'inline-block', margin: '6px' }} className="nav-item "><a className="nav-link text-light"
                                    href="/">
                                    sample link2</a></li>
                                <li style={{ display: 'inline-block', margin: '6px' }} className="nav-item "><a className="nav-link  text-light"
                                    href="/">
                                    sample link3</a></li>

                            </ul>

                        </div>
                        <div className="col-md-2 p-2 text-light text-center">

                        {/* <CopyrightIcon style={{color:'white'}}/> */}
                        coptwrightInfo TA
                        </div>
                    </div>
                </div>

            </footer>
        
      
    </div>
  )
}

export default BottomFotter
