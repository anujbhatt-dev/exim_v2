import React, {Component} from "react"
import {Link} from "react-router-dom"
import bgCC from "../../../../assets/images/bgCC.svg"
import apple1 from "../../../../assets/images/apple1.svg"
import play1 from "../../../../assets/images/play1.svg"
import whyJoin from "../../../../assets/images/whyJoin.svg"
import whyJoin2 from "../../../../assets/images/whyJoin2.svg"
import handPhone from "../../../../assets/images/handPhone.svg"
import pr from "../../../../assets/images/planeRoute.svg";
import coursemob from "../../../../assets/images/coursemob.svg";
import otherCourse1 from "../../../../assets/images/otherCourse1.svg";
import horGraph from "../../../../assets/images/horGraph.svg";
import $ from "jquery"
import Aos from "aos";
import "aos/dist/aos.css";

class OtherCourse1 extends Component{

  state={
    courses:[
      {
        title:"Basics of warehousing",
        // lesson:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nostrum doloremque incidunt magnam cumque expedita consequuntur voluptates. Illo porro nesciunt, amet, voluptate itaque, alias commodi eius quia nihil placeat soluta.",
        locked:false,
        duration:"140 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Warehouse management",
        // lesson:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officia, aspernatur error, praesentium ab animi et soluta eos laudantium velit placeat sit id eligendi a dicta eaque hic. Eos, optio!",
        locked:false,
        duration:"80 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Overview of warehousing",
        // lesson:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nam rem, nemo magnam tempore commodi reiciendis molestiae ullam vero. Fuga magnam qui perferendis, molestiae ad minima nulla culpa, consequuntur dolore.",
        locked:false,
        duration:"110 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Warehousing design and layout",
        lesson:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quas saepe aspernatur cumque, voluptatem totam. Sit tempora illo, autem inventore, impedit eaque aliquam fugiat quam eius, pariatur modi praesentium ut.",
        locked:false,
        duration:"30 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Material handling",
        lesson:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime inventore, distinctio, laborum neque fugiat repellendus eum recusandae, quam voluptatem voluptate consequuntur doloremque eaque accusamus, rerum blanditiis impedit officia! Itaque, non?",
        locked:false,
        duration:"10 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },

    ],
    panel:"lesson",
    reviews:[
      {
        review:"Career oriented Export & Import (Exim) course- helpful tutors. Happy to be part of this institute",
        rating:4,
        locked:false,
        name:"Charvi jain"
      },
      {
        review:"Exim Education provided me with full support when I planned to step in export business. Thank you Exim Education!",
        rating:4,
        locked:false,
        name:"Rushab Jain"
      },
      {
        review:"I’m glad to shift from a local market to international with your guidance and support. Thank you for my progress.",
        rating:5,
        locked:false,
        name:"Dheeraj shrishrimal"
      },
      {
        review:"Completed import export certification course, great learning experience. One thing is for sure that I can step in the International market without fear. Thank you Exim Education.",
        rating:5,
        locked:false,
        name:"Mithilesh Kumar"
      },
    ],
    detail:"Exim Education is an export-import"+
   "training centre. Exim Education has"+
   "taken initiative to make people aware  of various opportunities in the"+
   "International market with its unique"+
   "way of training the participants. We do"+
   "not just educate but make our"+
   "students career-ready, by simple"+
   "video courses you’ll get an in-depth of"+
   "international trade. Also, a live-student"+
   " teacher interactive session will"+
   "smoothen every topic and solve the"+
   "doubts you have relating to variant"+
   "topics in export-import."
  }

  componentDidMount = () => {
    window.scrollTo({top:0,behavior:"smooth"});
    Aos.init({
      duration: 1500,
      delay: 100,
    });
  }
//
  panelHandler=(p)=>{
    // alert("otherCourse1__Wrapper_row1--"+(((p%3)===0)?"3":p));
    // alert("otherCourse1__Wrapper_row1--"+(((p+1)%3)===0?"3":(p+1)%3));
    // alert("otherCourse1__Wrapper_row1--"+(((p+2)%3)===0?"3":(p+2)%3));
    this.setState({
      panel:p===1?"lesson":p===2?"detail":"reviews"
    })
    $(".otherCourse1__Wrapper_row1--"+(((p%3)===0)?"3":p)).css({"order":"-3"});

    $(".otherCourse1__Wrapper_row1--"+(((p+1)%3)===0?"3":(p+1)%3)).css({"order":"-2"});
    $(".otherCourse1__Wrapper_row1--"+(((p+2)%3)===0?"3":(p+2)%3)).css({"order":"-1"});
  }

  panelHandlermob=(p)=>{
    // alert("otherCourse1__Wrapper_row1--"+(((p%3)===0)?"3":p));
    // alert("otherCourse1__Wrapper_row1--"+(((p+1)%3)===0?"3":(p+1)%3));
    // alert("otherCourse1__Wrapper_row1--"+(((p+2)%3)===0?"3":(p+2)%3));
    this.setState({
      panel:p===1?"lesson":p===2?"detail":"reviews"
    })
  }


  unlockHandler=(n)=>{
    let newCourse = this.state.courses;
    newCourse[n].locked = !newCourse[n].locked;
    this.setState({
      courses:newCourse
    })
  }

  unlockHandler2=(n)=>{
    let newCourse = this.state.reviews;
    newCourse[n].locked = !newCourse[n].locked;
    this.setState({
      reviews:newCourse
    })
  }

    render(){

      return (
           <div className="otherCourse1">
               <h1 className="heading-primary landing__3_heading">Certification in
Warehousing</h1>
               <div className="course__div">
                    {/* <img className="course__div_route" src={pr} alt=""/>
                   <div className="course__wrapper">
                       {
                         this.state.courses.map((course,i)=>{
                           return <div  className={"course__wrapper_box "+"course__wrapper_box-"+(i+1)}>

                                      <div  className="course__wrapper_box-count">{i===5?"4":i===3?"6":i+1}</div>
                                      <div  className="course__wrapper_box-title">
                                          {course.title}
                                      </div>
                                      <div className="course__wrapper_box-lock">
                                           <div>{course.duration}</div>
                                      </div>
                                   </div>
                         })
                       }
                    </div> */}
                    <div className="course__wrapperMob">
                         <img src={coursemob} alt=""/>
                         <div className="course__wrapperMob_flex">
                             <Link className="course__wrapperMob_flex-a" to="/about">Buy</Link>
                         </div>
                         <h1 className="heading-primary landing__3_heading">Introduction to international trade</h1>
                         <div className="course__wrapperMob_grid">
                               <div className="course__wrapperMob_grid-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="41.264" height="41.264" viewBox="0 0 41.264 41.264">
                                    <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M24.007,3.375A20.632,20.632,0,1,0,44.639,24.007,20.629,20.629,0,0,0,24.007,3.375ZM25.4,25.792a1.393,1.393,0,0,1-1.389,1.389H14.484a1.389,1.389,0,0,1,0-2.777h8.134V11.31a1.389,1.389,0,1,1,2.777,0Z" transform="translate(-3.375 -3.375)" fill="#525252"/>
                                  </svg>

                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>1 week</strong></div>
                                      <div>Duration</div>
                                  </div>

                               </div>


                               <div className="course__wrapperMob_grid-item">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24.979" height="35.908" viewBox="0 0 24.979 35.908">
                                  <path id="Icon_map-book-store" data-name="Icon map-book-store" d="M31.459,31.1V4.562A3.132,3.132,0,0,0,28.337,1.44H9.6A3.132,3.132,0,0,0,6.48,4.562V34.225A3.132,3.132,0,0,0,9.6,37.347H28.337c1.45,0,3.122,0,3.122-1.561v-.781H10.383a1.566,1.566,0,0,1-1.561-1.561V31.1ZM10.383,7.685a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781V9.246a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781V7.685Zm0,6.245a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781v1.561a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781Z" transform="translate(-6.48 -1.44)" fill="#525252"/>
                                  </svg>

                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>5 modules</strong></div>
                                      {/* <div>duration</div> */}
                                  </div>

                               </div>


                               <div className="course__wrapperMob_grid-item">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="42.686" height="31.664" viewBox="0 0 42.686 31.664">
                                    <g id="Group_1458" data-name="Group 1458" transform="translate(-778.632 -1328.541)">
                                     <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M19.675,4.5H2.8A2.8,2.8,0,0,0,0,7.3V24.175a2.8,2.8,0,0,0,2.8,2.8H19.675a2.8,2.8,0,0,0,2.8-2.8V7.3A2.8,2.8,0,0,0,19.675,4.5ZM30.759,6.706l-6.414,4.424v9.211l6.414,4.418a1.876,1.876,0,0,0,2.95-1.51V8.216A1.877,1.877,0,0,0,30.759,6.706Z" transform="translate(787.609 1333.232)" fill="#525252"/>
                                     <ellipse id="Ellipse_2296" data-name="Ellipse 2296" cx="8.5" cy="8" rx="8.5" ry="8" transform="translate(778.632 1328.541)" fill="red"/>
                                    </g>
                                    </svg>
                                    <div className="course__wrapperMob_grid-item--div">
                                        <div><strong>Live Lecture</strong></div>
                                        {/* <div>duration</div> */}
                                    </div>
                               </div>

                               <div className="course__wrapperMob_grid-item">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="26.694" height="35.592" viewBox="0 0 26.694 35.592">
                                    <path id="Icon_ionic-md-bookmark" data-name="Icon ionic-md-bookmark" d="M30.862,4.5H11.583A3.718,3.718,0,0,0,7.875,8.208V40.092L21.222,34.16l13.347,5.932V8.208A3.718,3.718,0,0,0,30.862,4.5Z" transform="translate(-7.875 -4.5)" fill="#525252"/>
                                    </svg>
                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>Certification</strong></div>
                                      {/* <div>duration</div> */}
                                  </div>
                               </div>
                         </div>

                    </div>
                </div>
                <div className="otherCourse1__Wrapper">
                   <img src={bgCC} alt=""/>
                   <div className="otherCourse1__Wrapper_row1">
                         <div onClick={()=>{this.panelHandler(1)}} className="otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--1">
                                Lesson
                         </div>
                         <div onClick={()=>{this.panelHandler(2)}} className="otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--2">
                                Detail
                         </div>
                         <div onClick={()=>{this.panelHandler(3)}} className="otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3">
                                Reviews
                         </div>
                   </div>
                   <div className="otherCourse1__Wrapper_row1 otherCourse1__Wrapper_row2">
                         <div onClick={()=>{this.panelHandlermob(1)}} className={this.state.panel==="lesson"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--1 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--1"}>
                                Lesson
                         </div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1" height="19" viewBox="0 0 1 19">
                            <line id="Line_2" data-name="Line 2" y2="19" transform="translate(0.5)" fill="none" stroke="#bababa" stroke-width="1"/>
                         </svg>
                         <div onClick={()=>{this.panelHandlermob(2)}} className={this.state.panel==="detail"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--2 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--2 "}>
                                Detail
                         </div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1" height="19" viewBox="0 0 1 19">
                           <line id="Line_2" data-name="Line 2" y2="19" transform="translate(0.5)" fill="none" stroke="#bababa" stroke-width="1"/>
                         </svg>
                         <div onClick={()=>{this.panelHandlermob(3)}} className={this.state.panel==="reviews"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3 "}>
                                Reviews
                         </div>
                   </div>
                   <div className="otherCourse1__Wrapper_selected">{this.state.panel==="reviews"
                   ?<div id="review">
                     <span>Reviews</span>
                     <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                          <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                           <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                       </svg>
                       <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                            <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                             <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                         </svg>
                      </div>
                   </div>:this.state.panel
                    }</div>


                   <div className="middle">
                       {this.state.panel==="lesson"?
                         <div className="middle__lesson">
                              {this.state.courses.map((item,i)=>{
                                return <div className="middle__lesson_item">
                                          <img src={otherCourse1} alt=""/>
                                          <div className="middle__lesson_item-middle">
                                              <div className="title">{item.title}</div>
                                              {/* <div className="subtitle">{item.subtitle}</div> */}
                                              {/* <div className="lesson">{item.locked?item.lesson:item.lesson.substring(0,51)}</div> */}
                                          </div>
                                          {/* <div onClick={()=>{this.unlockHandler(i)}} className="middle__lesson_item-right">
                                              <span>detail</span>
                                                  <svg style={item.locked?{transform:"rotate(180deg)"}:null} xmlns="http://www.w3.org/2000/svg" width="22.43" height="16.391" viewBox="0 0 22.43 16.391">
                                                    <path id="Polygon_9" data-name="Polygon 9" d="M7.914,4.825a4,4,0,0,1,6.6,0l3.632,5.308a4,4,0,0,1-3.3,6.259H7.584a4,4,0,0,1-3.3-6.259Z" transform="translate(22.43 16.391) rotate(180)" fill="#fff"/>
                                                  </svg>
                                          </div> */}
                                       </div>
                              })}
                         </div>
                         :this.state.panel==="detail"?
                         <div className="middle__detail">
                              {this.state.detail}
                         </div>:
                         <div className="middle__review">
                              {this.state.reviews.map((review,i)=>{
                                return <div className="middle__review_flex">
                                            <div className="middle__review_flex-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                                                <path id="Icon_open-person" data-name="Icon open-person" d="M21.961,0A11.136,11.136,0,0,0,10.981,11.25,11.136,11.136,0,0,0,21.961,22.5,11.136,11.136,0,0,0,32.942,11.25,11.136,11.136,0,0,0,21.961,0ZM10.487,22.5C4.667,22.725,0,26.64,0,31.5V36H43.923V31.5c0-4.86-4.612-8.775-10.487-9a16.88,16.88,0,0,1-22.95,0Z" transform="translate(14.039 15)" fill="none" stroke="#000" stroke-width="1"/>
                                                <g id="Ellipse_2285" data-name="Ellipse 2285" fill="none" stroke="#000" stroke-width="1">
                                                <circle cx="36" cy="36" r="36" stroke="none"/>
                                                <circle cx="36" cy="36" r="35.5" fill="none"/>
                                                </g>
                                                </svg>
                                            </div>
                                            <div className="middle__review_flex-div">
                                                <div className="middle__review_flex-name">{review.name}</div>
                                                <div className="middle__review_flex-rating">
                                                     {[1,2,3,4,5].map((n,i)=>{
                                                       if(n<=review.rating){
                                                         return <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                                                                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                                                                </svg>
                                                       }else{
                                                         return <svg xmlns="http:www.w3.org/2000/svg" width="38.662" height="37.036" viewBox="0 0 38.662 37.036">
                                                                  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-0.919 0.501)" fill="none" stroke="#ffa601" stroke-width="1"/>
                                                                </svg>
                                                       }
                                                     })}
                                                </div>
                                            </div>
                                            <div className="middle__review_flex-review">{review.locked?review.review:review.review.substring(0,400)}</div>
                                            <div  onClick={()=>{this.unlockHandler2(i)}} className="middle__review_flex-more">
                                                <span>Read more</span>
                                                <svg  style={review.locked?{transform:"rotate(180deg)"}:null} xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13">
                                                  <path id="Polygon_10" data-name="Polygon 10" d="M7.078,3.315a3,3,0,0,1,4.844,0L15.514,8.23A3,3,0,0,1,13.092,13H5.908A3,3,0,0,1,3.486,8.23Z" transform="translate(19 13) rotate(180)" fill="#0062ff"/>
                                                </svg>
                                            </div>
                                       </div>
                              })}
                         </div>
                       }
                   </div>
                   <div className="middleMob">
                             {this.state.panel==="lesson"?
                               <div className="middleMob__lesson">
                               {this.state.courses.map((item,i)=>{
                                 return <div className="middle__lesson_item">
                                           <img src={otherCourse1} alt=""/>
                                           <div className="middle__lesson_item-middle">
                                               <div className="title">{item.title}</div>
                                               {/* <div className="lesson">{item.locked?item.lesson:null}</div> */}
                                           </div>
                                           <div onClick={()=>{this.unlockHandler(i)}} className="middle__lesson_item-right">
                                              {/* {item.locked
                                              ?<svg xmlns="http://www.w3.org/2000/svg" width="25.948" height="25.948" viewBox="0 0 25.948 25.948">
                                                  <path id="Path_5144" data-name="Path 5144" d="M25.948,14.474A11.474,11.474,0,1,1,14.474,3,11.474,11.474,0,0,1,25.948,14.474Z" transform="translate(-1.5 -1.5)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                  <path id="Path_5146" data-name="Path 5146" d="M12,18h9.179" transform="translate(-3.616 -5.026)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </svg>

                                              :<svg xmlns="http://www.w3.org/2000/svg" width="25.948" height="25.948" viewBox="0 0 25.948 25.948">
                                              <path id="Path_5144" data-name="Path 5144" d="M25.948,14.474A11.474,11.474,0,1,1,14.474,3,11.474,11.474,0,0,1,25.948,14.474Z" transform="translate(-1.5 -1.5)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              <path id="Path_5145" data-name="Path 5145" d="M18,12v9.179" transform="translate(-5.026 -3.616)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              <path id="Path_5146" data-name="Path 5146" d="M12,18h9.179" transform="translate(-3.616 -5.026)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              </svg>} */}

                                           </div>
                                        </div>
                               })}
                         </div>
                         :this.state.panel==="detail"?
                         <div className="middleMob__detail">
                              {this.state.detail}
                         </div>:
                         <div className="middleMob__review">
                         {this.state.reviews.map((review,i)=>{
                           return <div className="middle__review_flex">

                                       <div className="middle__review_flex-svg">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                                           <path id="Icon_open-person" data-name="Icon open-person" d="M21.961,0A11.136,11.136,0,0,0,10.981,11.25,11.136,11.136,0,0,0,21.961,22.5,11.136,11.136,0,0,0,32.942,11.25,11.136,11.136,0,0,0,21.961,0ZM10.487,22.5C4.667,22.725,0,26.64,0,31.5V36H43.923V31.5c0-4.86-4.612-8.775-10.487-9a16.88,16.88,0,0,1-22.95,0Z" transform="translate(14.039 15)" fill="none" stroke="#000" stroke-width="1"/>
                                           <g id="Ellipse_2285" data-name="Ellipse 2285" fill="none" stroke="#000" stroke-width="1">
                                           <circle cx="36" cy="36" r="36" stroke="none"/>
                                           <circle cx="36" cy="36" r="35.5" fill="none"/>
                                           </g>
                                           </svg>
                                       </div>
                                       <div className="middle__review_flex-div">
                                           <div className="middle__review_flex-name">{review.name}</div>
                                           <div className="middle__review_flex-rating">
                                                {[1,2,3,4,5].map((n,i)=>{
                                                  if(n<=review.rating){
                                                    return <svg xmlns="http://www.w3.org/2000/svg" width="37.617" height="36.004" viewBox="0 0 37.617 36.004">
                                                             <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-1.441 0.001)" fill="#ffa600"/>
                                                           </svg>
                                                  }else{
                                                    return <svg xmlns="http:www.w3.org/2000/svg" width="38.662" height="37.036" viewBox="0 0 38.662 37.036">
                                                             <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M18.232,1.252l-4.591,9.309-10.273,1.5A2.251,2.251,0,0,0,2.123,15.9L9.555,23.14,7.8,33.37a2.249,2.249,0,0,0,3.262,2.37l9.19-4.83,9.19,4.83A2.25,2.25,0,0,0,32.7,33.37L30.945,23.14,38.377,15.9a2.251,2.251,0,0,0-1.245-3.839l-10.273-1.5L22.268,1.252a2.252,2.252,0,0,0-4.036,0Z" transform="translate(-0.919 0.501)" fill="none" stroke="#ffa601" stroke-width="1"/>
                                                           </svg>
                                                  }
                                                })}
                                           </div>
                                       </div>
                                       <div className="middle__review_flex-review">{review.locked?review.review:review.review.substring(0,400)}</div>
                                       <div  onClick={()=>{this.unlockHandler2(i)}} className="middle__review_flex-more">
                                           <span>Read more</span>
                                           <svg  style={review.locked?{transform:"rotate(180deg)"}:null} xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13">
                                             <path id="Polygon_10" data-name="Polygon 10" d="M7.078,3.315a3,3,0,0,1,4.844,0L15.514,8.23A3,3,0,0,1,13.092,13H5.908A3,3,0,0,1,3.486,8.23Z" transform="translate(19 13) rotate(180)" fill="#0062ff"/>
                                           </svg>
                                       </div>
                                  </div>
                         })}
                         <img src={horGraph} alt=""/>
                         </div>
                       }
                   </div>
                </div>
                <h1 className="heading-primary landing__3_heading">why join exim education</h1>
                <img className="otherCourse1__whyJoin" src={whyJoin} alt=""/>
                <img className="otherCourse1__whyJoin2" src={whyJoin2} alt=""/>
                <div className="otherCourse1__lastImg">
                    <img src={handPhone} alt=""/>
                    <a href="" className="otherCourse1__lastImg-apple otherCourse1__lastImg-btn"><img src={apple1} alt=""/></a>
                    <a href="" className="otherCourse1__lastImg-play otherCourse1__lastImg-btn"><img src={play1} alt=""/></a>
                    <div className="otherCourse1__lastImg-blur">0</div>
                </div>
           </div>
      )
    }
}

export default OtherCourse1;
