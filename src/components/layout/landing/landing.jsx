
import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import Aos from "aos"
import "aos/dist/aos.css"
import $ from "jquery"
import greenCall from "../../../assets/images/greenCall.svg"
import live from "../../../assets/images/live.svg"
import city from "../../../assets/images/city.svg"
import vcallImg from "../../../assets/images/vcallImg.svg"
import demo from "../../../assets/images/demo.svg"
import book from "../../../assets/images/book.svg";
import laptop from "../../../assets/images/laptop.svg";
import reload from "../../../assets/images/reload.svg";
import mobile from "../../../assets/images/mobile.svg";
import section from "../../../assets/images/section.svg";
import clock from "../../../assets/images/clock.svg";
import zoom from "../../../assets/images/zoom.svg";
import crown from "../../../assets/images/crown.svg";
import video from "../../../assets/images/video.svg";
import cell from "../../../assets/images/cell.svg";
import pdf from "../../../assets/images/pdf.svg";
import offline from "../../../assets/images/offline.svg";
import s from "../../../assets/images/s.svg";
import sMob from "../../../assets/images/sMob.svg";
import s1 from "../../../assets/images/s-1.svg";
import s2 from "../../../assets/images/s-2.svg";
import s3 from "../../../assets/images/s-3.svg";
import certificate from "../../../assets/images/certificate.png";
import colab from "../../../assets/images/colab.svg";
import colabMob from "../../../assets/images/colabMob.svg";
import videoAfterColab from "../../../assets/images/videoAfterColab.png";
import bubble from "../../../assets/images/bubble.svg";
import upArrow from "../../../assets/images/upArrow.svg";
import downArrow from "../../../assets/images/downArrow.svg";
import blueDownload from "../../../assets/images/blueDownload.svg";
import appleDownload from "../../../assets/images/appleDownload.svg";
import longDash from "../../../assets/images/longDash.svg";
import setting from "../../../assets/images/setting.svg";
import globe from "../../../assets/images/globe.svg";
import eximManagement from "../../../assets/images/eximManagement.svg";
import lapi from "../../../assets/images/lapi.svg";
import humanChain from "../../../assets/images/humanChain.svg";

import settingImg from "../../../assets/images/settingImg.svg";
import globeImg from "../../../assets/images/globeImg.svg";
import eximManagementImg from "../../../assets/images/eximManagementImg.svg";
import lapiImg from "../../../assets/images/lapiImg.svg";
import humanChainImg from "../../../assets/images/humanChainImg.svg";

import whiteEM from "../../../assets/images/whiteEM.svg";
import whiteHC from "../../../assets/images/whiteHC.svg";
import whiteL from "../../../assets/images/whiteL.svg";
import whiteS from "../../../assets/images/whiteS.svg";
import whiteG from "../../../assets/images/whiteG.svg";

import videoBig from "../../../assets/images/videoBig.svg";
import crownBig from "../../../assets/images/crownBig.svg";
import tv from "../../../assets/images/tv.svg";
import send from "../../../assets/images/send.svg";
import pause from "../../../assets/images/pause.svg";
import gratuate from "../../../assets/images/gratuate.svg";
import whitever from "../../../assets/images/whitever.svg";
import orbits from "../../../assets/images/orbits.svg";
import plays from "../../../assets/images/play-s.svg";
import orbitss from "../../../assets/images/orbits-s.svg";
import arrow from "../../../assets/images/arrow.svg"
import cancel from "../../../assets/images/cancel.png";
import emailjs from 'emailjs-com';


import photo from "../../../assets/videos/photo.mp4"

import FlipNumbers from 'react-flip-numbers';


import googleplaybadge from "../../../assets/images/google-play-badge.png";

import ellipse1 from "../../../assets/images/ellipse1.png";
import review1 from "../../../assets/images/review1.jpeg";
import review2 from "../../../assets/images/review2.jpeg";
import review3 from "../../../assets/images/review3.jpeg";
import review4 from "../../../assets/images/review4.jpeg";
import video2 from "../../../assets/images/video2.png";
import landing_main from "../../../assets/images/landing-main.svg"

import msme from "../../../assets/images/msme.png"
import dgft from "../../../assets/images/dgft.jpg"
import mik from "../../../assets/images/mik.png"
import fieo from "../../../assets/images/fieo.svg"
import indiaPort from "../../../assets/images/indiaPort.png"
import fire from "../firebase_config"

  class Landing extends Component{

    state={

        eportValue:"$314.31B",
        numbersVisible:false,
        webinarSubmitted:false,
       webinar:{ day:"sunday",
        date:"24th January, 2021",
        time:"12:30 PM",
        mentor:"Zehan Shah",
        topic:"Advance technology and government new laws applied in 2020 module ",
        nextbatch:"Soon"
      },
        value:"",
        detail:false,
        cos:[
          {
            title:"Exim management",
            content:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
          },{
            title:"Freight Forwarder",
            content:"Freight forwarders are master of trade. Giving recommendation to the exporter, performing freight operation, looking over documentation. Any business that is in import-export does require freight forwarder for their unique versatility."
          },{
            title:"Merchant export/importer",
            content:"Export-import is the most effective money-making career. Know the global market and earn foreign exchange, develop country???s economy, tax concession, improve in sales and profit, increase in foreign sale and many more benefits one can get if stepped in exim world"
           }, {
            title:"Logistic manager",
            content:"As logistics manager you can organize the storage and distribution of goods. Also, to ensure that orders are carried out correctly. A logistics manager must wear a variety of hats throughout the workday."
             },
          {
            title:"In CHA",
            content:"After getting certified by exim education one can work under Custom House Agent, and with a good experience can tuen as CHA. work in shipping line, NVOCC , export sales manager and step in real organized and easy money making world ."
          }],
        cosTitle:"Exim management",
        cosContent:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
      }

    //"Export Import Education"

    //EXPORT IMPORT INSTITUTE


    repeat =()=>{
        setTimeout(()=>{this.setState((prevState)=>{return{value:''}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:'"'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'E'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'X'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'P'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'O'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'R'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'T'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' I'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'M'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'P'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'O'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'R'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'T'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' I'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'N'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'S'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'T'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'I'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'T'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'U'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"T"}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'E'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'"'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'c'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'t'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'o'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'r'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'y'}});
        // setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'"'}});
// },50);
// },50);
// },50);
// },50);
// },50);
// },50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},550);
}

    componentDidMount=()=>{


      // console.log(this.props)

      // getting webinar details

      const todoRef = fire.database().ref('/webinar')
      todoRef.on('value', (snapshot) => {
          const todos = snapshot.val();
          const webinar = [];
          for (let id in todos) {
              webinar.push({ id, ...todos[id] });
          }
          this.setState({webinar:{...webinar[0]}});
        });







      window.scrollTo({top:0,behavior:"smooth"});

        this.repeat();


     Aos.init({
        duration: 1500,
        delay: 100
      });



      //number flip
      window.addEventListener('scroll',()=>{


        if(!document.getElementById("numbers"))
         return ;

        let rect= document.getElementById("numbers").getBoundingClientRect();


       if( rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))
        this.setState({numbersVisible:true})
       else if(this.state.numbersVisible)
       this.setState({numbersVisible:false})


    });

     $(window).scroll(()=>{
       console.log($(window).scrollTop());
       if($(window).scrollTop()>=3400 ){
         $(".blank__1").css({"animation":"slides 1s linear","animation-fill-mode":"forward"});
         setTimeout(()=>{
           $(".blank__1").css({"opacity":"0"})
           $(".blank__2").css({"animation":"slide-reverse 1s linear","animation-fill-mode":"forward"});
           setTimeout(()=>{
             $(".blank__2").css({"opacity":"0"})
             $(".blank__3").css({"animation":"slides 1s linear","animation-fill-mode":"forward"});
             setTimeout(()=>{
               $(".blank__3").css({"opacity":"0"})
             },1000)
           },1000)
         },1000)
       }

       if($(window).scrollTop()>=6200){
         $(".landing__6_box-certificate").css({"animation":"scale .6s linear 2","animation-fill-mode":"forward"});
       }

     })

   }

   coureseToSuccess=(num)=>{
      let newState = this.state
      newState.cosTitle = newState.cos[num].title;
      newState.cosContent = newState.cos[num].content;
      this.setState({
        ...newState
      })
   }

   detailHandler=()=>{
     this.setState({
       detail:!this.state.detail
     })
   }

   onChangeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value});
   }

   webinarDetailSubmit=(e)=>{

    this.setState({
      webinarSubmitted:true,
      submitted:4,
    })


     e.preventDefault();


    // let data={... e.target};
    // data["topic"]=this.state.topic;
    // data["date"]=this.state.date;
    // data["day"]=this.state.day;
    // data["mentor"]=this.state.mentor;
    // data["time"]=this.state.time;

    let template="template_jxzqedp";
    this.setState({detail:false});

    emailjs.sendForm('service_9wrddem', template,e.target, 'user_3C6n5XsLh20WgqpTa3412').
      then(res=>{
    // this.setState({detail:false,name:"",email:""});
  })

   }





    render(){

      return (
          <div className="landing">
                {/* <Helmet>
                    <meta charSet="utf-8" />
                    <title>Export & Import Course in Mumbai | Exim Courses Online: EXIM EDUCATION</title>
                    <link rel="canonical" href={this.props.url} />
                    <meta name="description" content="Enroll today for Exim course/ Export Import course in Mumbai to take your career a step ahead. Online training facility is also available for import and export courses. Call now!"/>
                </Helmet> */}

               {
                 // screen 1
               }
                <div data-aos="zoom-out" data-aos-once="true" className="landing__1">
                <div className="landing__1_text">
                    <div className="landing__1_text-biggest">
                       EXIM
                    </div>
                    <div className="landing__1_text-bigger">
                       EDUCATION
                    </div>
                    <div className="landing__1_text-smaller">
                      {this.state.value}
                    </div>
                    <div className="landing__1_text-smallest">
                       Study India in the global business perspective and build  an International<br/>business by educating and brushing the export-import skills of the working<br/>class.
                    </div>

                    <div className="landing__1_text-btns">
                        <a  href="#starttoday" className="landing__1_text-btns--join">Start Today <span> 0</span> <img src={arrow} alt=""/></a>
                        {
                          // <button className="landing__1_text-btns--trial">Trail</button>
                        }
                    </div>
                </div>
                <img className="landing__1_image" src={landing_main} alt="landing_main"/>
                </div>

               {
               // bar
               }

              <div className="landing__bar">
                   <div className="landing__bar_item">
                       <img className="landing__bar_item-svg" src={book} alt=""/>
                       <div className="landing__bar_item-text">Simple video courses to ease global trade.</div>
                   </div>
                   <div className="landing__bar_item">
                       <img className="landing__bar_item-svg" src={laptop} alt=""/>
                       <div className="landing__bar_item-text">Live student-teacher interactive session.</div>
                   </div>
                   <div className="landing__bar_item">
                      <div className="spin"><img className="landing__bar_item-svg" src={reload} alt=""/></div>
                      <div className="landing__bar_item-text">Get ready for career.</div>
                   </div>
              </div>



              {
                // mobile screen
              }

              <div className="landing__2">
                  <div className="landing__2_text">
                       <div className="heading-primary">Exim education app</div>
                       <div className="landing__2_text-small">
                             Click on the ???Download??? button and be part of exim world. Enjoy export-import videos,
                              and get a peek on new terms and ways to export and import. Congratulations in advance for
                              taking the first step towards your dream :)
                        </div>
                       <div data-aos-once="true" data-aos="fade-right"><a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=co.kevin.pbhaa"  className="landing__2_text-btn"><img className="landing__2_text-btn--icon" src={googleplaybadge} alt=""/></a></div>
                  </div>
                  <img className="landing__2_image" src={mobile} alt=""/>
              </div>
              <div className="customHr">...</div>

              {
                //city promotion
              }

             {this.props.city?
               <div className="landing__city">
                  <div className="landing__city_msg">Serving at Your City</div>
                  <img src={this.props.city.img} alt={this.props.city.name}/>
              </div>:null}
              {

              // <div className="landing__city">
              //    <div className="landing__city_msg">Serving at Your City</div>
              //    <img src={city} alt=""/>
              // </div>
             }

              {
                // 3
              }

              <div id="starttoday" className="landing__3">
                  <h1 className="heading-primary landing__3_heading">export & import course details</h1>
                  <div className="landing__3_box">
                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ABOUT EXIM EDUCATION - import export training centre in mumbai</div>
                          <div className="landing__3_box-text--small">
                          Exim Education is training centre of Indiaport. We provide helping hand to India???s
                           export business to ease its global trade.Exim Education has taken an initiative to
                            make people aware of various opportunities in the International market with our unique
                            way of training, the participants. Exim Education with its exclusive mastery aims to hasten
                             the globalization of India and build an International business by educating and brushing exim
                              skills of the working class.
                          </div>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ADAPTIVE LEARNING</div>
                          <ul>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={section} alt=""/>
                                 <span>Modules 14</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={clock} alt=""/>
                                 <span>Duration 6 weeks</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={zoom} alt=""/>
                                 <span>Zoom call every sunday</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={crown} alt=""/>
                                 <span>Premium help desk</span>
                            </li>
                          </ul>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">COURSE FEATURES</div>
                          <ul>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={video} alt=""/>
                                 <span>Live classes</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={cell} alt=""/>
                                 <span>Mobile application</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={pdf} alt=""/>
                                 <span>Powerpoint and PDF</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={offline} alt=""/>
                                 <span>Offine mode</span>
                            </li>
                          </ul>
                      </div>
                      <Link to="/courses" style={{width:"26rem"}} className="landing__1_text-btns--join landing__3_box-btn"><span> 0</span> <img src={arrow} alt=""/></Link>
                  </div>
              </div>

              {
                // next batch details
              }

               <div className="landing__nextBD">
                    <div className="landing__nextBD_flex">
                          <div className="landing__nextBD_head">
                              NEXT BATCH
                              <img src={live} alt=""/>
                          </div>
                          <div className="landing__nextBD_date">{this.state.webinar.nextbatch}</div>
                          <a
                            href="tel://+918517885555"
                            className="landing__nextBD_call"
                          >
                            <img className="" src={greenCall} alt="" />{" "}
                            +91 8517885555
                          </a>
                      </div>
                      <Link to="/about" className="landing__nextBD_btn">
                      <span>Join Today</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="81.992" height="14.514" viewBox="0 0 81.992 14.514">
                              <path id="Icon_awesome-long-arrow-alt-right" data-name="Icon awesome-long-arrow-alt-right" d="M17.188,14.879H-55.177a.791.791,0,0,0-.791.791v3.691a.791.791,0,0,0,.791.791H17.188v3.036a1.582,1.582,0,0,0,2.7,1.119l5.672-5.672a1.582,1.582,0,0,0,0-2.237l-5.672-5.672a1.582,1.582,0,0,0-2.7,1.119Z" transform="translate(55.968 -10.258)" fill="#0062ff"/>
                      </svg>
                      </Link>
                    <img src={vcallImg} alt=""/>
               </div>


               {
                 // video 2
                 // <img className="landing__10_img" src={video2} alt=""/>
               }

               <div className="landing__10">
                  <div className="landing__10_text">
                     <div className="landing__10_text-flex">
                       <p>next</p>
                       <span>WEBINAR <img src={demo} alt=""/></span><br/>
                       <p>{this.state.webinar.day}</p>
                     </div>
                     <div  className="landing__10_text-flex">
                         <a style={{zindex:"3"}} href={this.state.webinarLink}  onClick={this.detailHandler} target="_blank" rel="noreferrer" style={{width:"26rem"}}  className="landing__10_text-flex--btn">Register</a>

                     </div>
                  </div>
                   <div className="landing__10_text_1">
                      <h4  style={{color:"white"}}>{this.state.webinar.mentor}</h4>
                      <div>{this.state.webinar.topic}</div>
                   </div>
                   <div className="landing__10_text_2">
                       <h5>date</h5>
                       <h3>{this.state.webinar.date}</h3>
                   </div>
                   <div className="landing__10_text_3">
                       <h5>time</h5>
                       <h3>{this.state.webinar.time}</h3>
                   </div>
                   <div className="landing__10_text_4">
                       <h5>mentor</h5>
                       <h3>{this.state.webinar.mentor}</h3>
                   </div>
                   <div className="landing__10_text_5">
                       <h5>call us</h5>
                       <h3><a href="tel://+918517885555" style={{color:"white"}}>+91  8517885555</a></h3>
                   </div>
                   <form onSubmit={this.webinarDetailSubmit} style={this.state.detail?{display:"flex"}:{display:"none"}} className="landing__10_webinar">
                      <p>Register Yourself.</p>
                      <img onClick={this.detailHandler} src={cancel} alt=""/>
                      <input type="text" hidden name="mentor" value={this.state.webinar.mentor}/>
                      <input type="text" hidden name="date" value={this.state.webinar.date}/>
                      <input type="text" hidden name="day" value={this.state.webinar.day}/>
                      <input type="text" hidden name="time" value={this.state.webinar.time}/>
                      <input type="text" hidden name="topic" value={this.state.webinar.topic}/>
                      <input required placeholder="name" className="landing__10_webinar-name"  name="name"  value={this.state.name} onChange={(e)=>this.onChangeHandler(e)} type="text"/>
                      <input required placeholder="email" className="landing__10_webinar-email" name="email" value={this.state.email} onChange={(e)=>this.onChangeHandler(e)}  type="email"/>
                      <input required placeholder="phone" className="landing__10_webinar-name"  name="phone"  value={this.state.phone} onChange={(e)=>this.onChangeHandler(e)} type="number"/>

                      <input  className="landing__10_webinar-submit" style={{backgroundColor:this.state.webinarSubmitted?"green":null}} type="submit" disabled={this.state.webinarSubmitted} value={this.state.webinarSubmitted?"submited":"submit"}/>
                   </form>
                   <img  className="landing__10_orbits landing__10_orbits-mob " src={orbitss} alt=""/>
                   <img className="landing__10_orbits landing__10_orbits-desk" src={orbits} alt=""/>
               </div>

              {
                // s
              }



              <div className="landing__4">
                  <img className="landing__4_background landing__4_background-mob" src={sMob} alt=""/>
                  <img  className="landing__4_background landing__4_background-desk" src={s} alt=""/>
                  <div className="blank blank__1">0</div>
                  <div className="blank blank__2">0</div>
                  <div className="blank blank__3">0</div>
                  <div className="landing__4_1">
                      <div className="landing__4_1-text">
                           <div className="landing__4_1-text--big heading-primary">Sign up for growth and development</div>
                           <div className="landing__4_1-text--small"></div>
                           <div className="landing__4_1-text--smaller">We don???t just teach but make sure to mould you <br/> to be the next exporter or importer.</div>
                      </div>
                      <img  className="landing__4_1-image" src={s1} alt=""/>
                  </div>

                  <div className="landing__4_2">
                      <img className="landing__4_2-image" src={s2} alt=""/>
                      <div  className="landing__4_2-text">
                           <div className="landing__4_2-text--big heading-primary">Not You & I but We be on the journey full of support and growth.
</div>

                           <div className="landing__4_2-text--smaller">Your keenness to learn more and get hands in the international market can be done right by
                              smooth payment procedure. Quick pay and get the grip to course, live lectures, research and
                              get ready for growing stability
                           </div>
                      </div>
                  </div>

                  <div className="landing__4_3">
                      <div  className="landing__4_3-text">
                           <div className="landing__4_3-text--big heading-primary">Path to success</div>
                           <div className="landing__4_3-text--small">
</div>
                           <div className="landing__4_3-text--smaller">Learn and understand the export import management course, get a job, be a brand and start your self-dependent journey
crossing national borders.</div>
                      </div>
                      <img  className="landing__4_3-image" src={s3} alt=""/>
                  </div>
              </div>


              {
                //exports
              }

              <div className="landing__5">
                   <h1 className="heading-primary landing__3_heading">EXPORT IN INDIA</h1>

                   {
                   //countdown
                   }
                 <div id="numbers" className="landing__5_count">
                        {[... this.state.eportValue+""].map(value=>

                            this.state.numbersVisible?
                            <div className="digit__wrapper"><div className="landing__5_count-digit"> <FlipNumbers height={40} width={40} color="" background="" duration="5" delay="0" play perspective={500} numbers={""+value} /></div><hr/></div>

                            :<div><div className="landing__5_count-digit">0</div><hr/></div>

                          )}
               </div>

                    <div className="landing__5_text">Last year Export of goods and services from india.</div>
              </div>


              {
                //Earn
              }

              <div className="landing__6">
                 <h1 className="heading-primary landing__3_heading">Earn an Accredited Qualification</h1>
                 <div className="landing__6_box">
                     <img className="landing__6_box-certificate" src={certificate} alt=""/>
                     <div className="landing__6_box-text">
                         <div>We at EximEducation know the role the certificates.<br/> For every export & import course that you complete
                        you will be given a certificate <br/> which will benefit you career-wise.
                           </div>
                         <div style={{color:"black"}} ></div>
                     </div>
                 </div>
              </div>


              {
                //colab
              }

              <div className="landing__7">
                  <div className="landing__7_colab">
                      <div className="landing__7_colab-head">We collaborate with <span>200+ universities and companies</span></div>
                      <div className="landing__7_colab-logos">
                          <img src={fieo} alt=""/>
                          <img src={dgft} alt=""/>
                          <img src={msme} alt=""/>
                          <img src={mik} alt=""/>
                          <img src={indiaPort} alt=""/>
                      </div>
                  </div>
                  <div className="video__wrapper">
                      <video className="landing__7_video"  controls>
                        <source src={photo} type="video/mp4"/>
                      </video>
                      <img className="landing__7_img" src={videoAfterColab} alt=""/>
                  </div>
              </div>

              {
                //cousre to success
              }

              <div className="landing__8">
                  <h1 className="heading-primary landing__3_heading">The fields you can step in</h1>
                  <div className="landing__8_bar">
                      <div onClick={()=>this.coureseToSuccess(0)} className={(this.state.cosTitle==="Exim management")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Exim management"?<img src={whiteEM} alt=""/>:<img src={eximManagement} alt=""/>}
                          <div>Exim<br/>management</div>
                      </div>
                      <div  onClick={()=>this.coureseToSuccess(1)} className={(this.state.cosTitle==="Freight Forwarder")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Freight Forwarder"?<img src={whiteHC} alt=""/>:<img src={humanChain} alt=""/>}
                          <div>Freight Forwarder</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(2)} className={(this.state.cosTitle==="Merchant export/importer")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Merchant export/importer"?<img src={whiteL} alt=""/>:<img src={lapi} alt=""/>}
                          <div>Merchant<br/>export/importer</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(3)} className={(this.state.cosTitle==="Logistic manager")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Logistic manager"?<img src={whiteS} alt=""/>:<img src={setting} alt=""/>}
                          <div>Logistic manager</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(4)} className={(this.state.cosTitle==="In CHA")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="In CHA"?<img src={whiteG} alt=""/>:<img src={globe} alt=""/>}
                          <div>in CHA</div>
                      </div>
                  </div>
                  <div className="landing__8_box">
                      <div className="landing__8_box-images">
                              <img className="BUBBLE" src={this.state.cosTitle==="Exim management"?eximManagementImg:this.state.cosTitle==="Freight Forwarder"?humanChainImg:this.state.cosTitle==="Merchant export/importer"?lapiImg:this.state.cosTitle==="Logistic manager"?settingImg:globeImg} alt=""/>
                      </div>
                      <div className="landing__8_box-text">
                            <div className="landing__8_box-text--big">{this.state.cosTitle}</div>
                            <div className="landing__8_box-text--small">{this.state.cosContent}</div>
                            <div className="landing__8_box-flex">
                                 <div className="landing__8_box-flex--text">Stock</div>
                                 <button className="landing__8_box-flex--btn  landing__8_box-flex--btn-1">
                                     <img src={upArrow} alt=""/>
                                     <div>Lorem ipsum</div>
                                 </button>
                                 <button className="landing__8_box-flex--btn">
                                     <img src={downArrow} alt=""/>
                                     <div>Lorem ipsum</div>
                                 </button>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="customHr">...</div>


              {
                // features
              }

              <div className="landing__9">
                   <h1 className="heading-primary landing__3_heading">FEATURES</h1>
                   <div className="landing__9_box">
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__1" src={videoBig} alt=""/><span>FLEXIBLE ONLINE EXPORT IMPORT CLASS</span></h1>
                                <div>You pick the schedule and learn accordingly.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__2" src={pause} alt=""/><span>Pause course</span></h1>
                                <div>Busy or tired? No worries, take a break; pause the lecture and play accordingly.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__3" src={gratuate} alt=""/><span>Mentor support</span></h1>
                                <div>Not You & I but We be on the journey full of support and growth</div>
                            </div>
                        </div>
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__4" src={tv} alt=""/><span>Exim consultancy</span></h1>
                                <div>Manage and supervise the exportation process for our clients</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__5" src={crownBig} alt=""/><span>Quality Service</span></h1>
                                <div>We at EximEducation don???t compromise with our service. We provide the best of
                                  service to our gems.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1 ><img className="img__6" src={send} alt=""/><span>IndiaPort-booking platform</span></h1>
                                <div>an organised platform to book transport, manage the shipment and provide trouble-free trading.</div>
                            </div>
                        </div>
                   </div>
              </div>

              {
                // review
              }

              <div className="landing__11">
                   <h1 className="heading-primary landing__3_heading">Reviews</h1>
                   <div className="slide">
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={review1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Charvi jain</strong></div>
                               <div className="landing__11_review-top--rating">4.1</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                               Career oriented Export & Import (Exim) course- helpful tutors. Happy to be part of this institute

                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={review2} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Dheeraj shrishrimal </strong></div>
                               <div className="landing__11_review-top--rating">4.7</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              I???m glad to shift from a local market to international with your guidance and support. Thank you for my progress.
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={review3} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Mithilesh Kumar</strong></div>
                               <div className="landing__11_review-top--rating">4.3</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              Completed import export certification course, great learning experience. One thing is for sure that I can step in the International market without fear. Thank you Exim Education.
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={review4} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Rushab Jain</strong></div>
                               <div style={{background:"yellow"}} className="landing__11_review-top--rating">5.0</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                           Exim Education provided me with full support when I planned to step in export business. Thank you Exim Education!

                           </div>
                       </div>
                   </div>
              </div>
          </div>

      )
    }
  }


 export default Landing;
