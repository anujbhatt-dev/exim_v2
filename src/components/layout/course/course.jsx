import React, {Component} from "react"
import {Link} from "react-router-dom"
import lock from "../../../assets/images/lock.svg";
import arrow from "../../../assets/images/arrow.svg";
import full from "../../../assets/images/full.svg";
import half from "../../../assets/images/half.svg";
import file from "../../../assets/images/file.svg";
import coursemob from "../../../assets/images/coursemob.svg";
import coursemob2 from "../../../assets/images/coursemob2.svg";
import otherCourse1 from "../../../assets/images/otherCourse1.svg";
import pr from "../../../assets/images/planeRoute.svg";
import Aos from "aos"
import {Helmet} from "react-helmet"
import "aos/dist/aos.css"

  class Course extends Component{

    state={
      courses:[
        {
          title:"Introduction to international trade.",
          lessons:"140 mins",
          locked:false
        },
        {
          title:"Finding market and product selection.",
          lessons:"80 mins",
          locked:true
        },
        {
          title:"Export documentation.",
          lessons:"110 mins",
          locked:true
        },
        {
          title:"Exim procedure and commercial terms.",
          lessons:"30 mins",
          locked:true
        },
        {
          title:"Government incentives &Initiatives.",
          lessons:"10 mins",
          locked:true
        },
        {
          title:"Risk management and payment terms.",
          lessons:"60 mins",
          locked:true
        },
        // {
        //   title:"Risk management and insurance",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Documents",
        //   lessons:"13 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Export Procedure",
        //   lessons:"1 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Modes of Payment",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Special shipments",
        //   lessons:"6 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Exporting Terms",
        //   lessons:"12 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Sterilization",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Other Documents",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
      ]
    }


         componentDidMount=()=>{

           window.scrollTo({top:0,behavior:"smooth"});
           Aos.init({
              duration: 1500,
              delay: 100,
            });
         }


    render(){

      return (
         <div data-aos="zoom-out" className="course">
         {/* <Helmet>
             <meta charSet="utf-8" />
             <title>Export and Import Course Details | Exim Course Details: EXIM EDUCATION</title>
             <link rel="canonical" href={this.props.url+"/courses"} />
             <meta name="description" content="Find the latest and revised Export and Import course details at EXIM EDUCATION. For detailed information, inquire today!"/>
         </Helmet> */}
                 <h1 className="heading-primary landing__3_heading">import & export course </h1>
                 <div  className="course__btnWrap">
                     <a rel="noreferrer" href="http://eximeducation.com/course/pdf/Course_01.pdf" target="_blank" className="course__btnWrap_btn"><span>Detailed</span><img src={file} alt=""/></a>
                 </div>
                 <div className="course__div">
                 <img className="course__div_route" src={pr} alt=""/>
                 <div className="course__wrapper">
                     {
                       this.state.courses.map((course,i)=>{
                         return <div  className={"course__wrapper_box "+"course__wrapper_box-"+(i+1)}>

                                    <div  className="course__wrapper_box-count">{i===5?"4":i===3?"6":i+1}</div>
                                    <div  className="course__wrapper_box-title">
                                        {course.title}
                                    </div>
                                    <div className="course__wrapper_box-lock">
                                         <div>{course.lessons}</div>
                                    </div>
                                 </div>
                       })
                     }

                     <div className="course__div_row">
                         <div  className="course__div_row-head">
                             {/* Export IMport Course */}
                         </div>
                         <Link className="course__div_row-a" to="/exportimprotcourse">Details <img src={arrow} alt=""/></Link>
                     </div>
                  </div>
                  <div className="course__wrapperMob">
                       <img src={coursemob} alt=""/>
                       <div className="course__wrapperMob_flex">
                           <Link className="course__wrapperMob_flex-a" to="/">Buy</Link>
                           <Link className="course__wrapperMob_flex-a course__wrapperMob_flex-a--mod" to="/exportimprotcourse">View Details</Link>
                       </div>
                  </div>

                 </div>
                <h1 className="heading-primary landing__3_heading">other courses</h1>


                <div className="course__other">
                    <img className="course__other_img"  src={otherCourse1} alt=""/>
                    <img className="course__other_imgMob"  src={coursemob2} alt=""/>
                    <div className="course__other_title">course title</div>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Regulation on Transport
                        <br/>of Dangerous Goods</div>
                        {/* <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur</div> */}
                        <div className="course__other_grids">
                            <div className="course__other_grids-item">
                               <svg xmlns="http://www.w3.org/2000/svg" width="41.264" height="41.264" viewBox="0 0 41.264 41.264">
                                 <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M24.007,3.375A20.632,20.632,0,1,0,44.639,24.007,20.629,20.629,0,0,0,24.007,3.375ZM25.4,25.792a1.393,1.393,0,0,1-1.389,1.389H14.484a1.389,1.389,0,0,1,0-2.777h8.134V11.31a1.389,1.389,0,1,1,2.777,0Z" transform="translate(-3.375 -3.375)" fill="#525252"/>
                               </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>14 weeks</strong></div>
                                   <div>duration</div>
                               </div>
                            </div>
                            <div className="course__other_grids-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24.979" height="35.908" viewBox="0 0 24.979 35.908">
                               <path id="Icon_map-book-store" data-name="Icon map-book-store" d="M31.459,31.1V4.562A3.132,3.132,0,0,0,28.337,1.44H9.6A3.132,3.132,0,0,0,6.48,4.562V34.225A3.132,3.132,0,0,0,9.6,37.347H28.337c1.45,0,3.122,0,3.122-1.561v-.781H10.383a1.566,1.566,0,0,1-1.561-1.561V31.1ZM10.383,7.685a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781V9.246a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781V7.685Zm0,6.245a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781v1.561a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781Z" transform="translate(-6.48 -1.44)" fill="#525252"/>
                               </svg>

                               <div className="course__other_grids-item--div">
                                   <div><strong>6 modules</strong></div>
                                   {/* <div>duration</div> */}
                               </div>

                            </div>


                            <div className="course__other_grids-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42.686" height="31.664" viewBox="0 0 42.686 31.664">
                                 <g id="Group_1458" data-name="Group 1458" transform="translate(-778.632 -1328.541)">
                                  <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M19.675,4.5H2.8A2.8,2.8,0,0,0,0,7.3V24.175a2.8,2.8,0,0,0,2.8,2.8H19.675a2.8,2.8,0,0,0,2.8-2.8V7.3A2.8,2.8,0,0,0,19.675,4.5ZM30.759,6.706l-6.414,4.424v9.211l6.414,4.418a1.876,1.876,0,0,0,2.95-1.51V8.216A1.877,1.877,0,0,0,30.759,6.706Z" transform="translate(787.609 1333.232)" fill="#525252"/>
                                  <ellipse id="Ellipse_2296" data-name="Ellipse 2296" cx="8.5" cy="8" rx="8.5" ry="8" transform="translate(778.632 1328.541)" fill="red"/>
                                 </g>
                                 </svg>
                                 <div className="course__other_grids-item--div">
                                     <div><strong>Live Lectures</strong></div>
                                     {/* <div>duration</div> */}
                                 </div>
                            </div>

                            <div className="course__other_grids-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.694" height="35.592" viewBox="0 0 26.694 35.592">
                                 <path id="Icon_ionic-md-bookmark" data-name="Icon ionic-md-bookmark" d="M30.862,4.5H11.583A3.718,3.718,0,0,0,7.875,8.208V40.092L21.222,34.16l13.347,5.932V8.208A3.718,3.718,0,0,0,30.862,4.5Z" transform="translate(-7.875 -4.5)" fill="#525252"/>
                                 </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>Certification</strong></div>
                                   {/* <div>duration</div> */}
                               </div>
                            </div>



                        </div>
                        <Link  className="course__div_row-a" to="/othercourse1">Details <img src={arrow} alt=""/></Link>
                    </div>
                    <div className="course__wrapperMob_flex course__other_flex">
                        <Link className="course__wrapperMob_flex-a" to="/">Buy</Link>
                        <Link className="course__wrapperMob_flex-a course__wrapperMob_flex-a--mod" to="/othercourse1">View Details</Link>
                    </div>
                </div>

                <div className="course__other">
                    <img className="course__other_img"  src={otherCourse1} alt=""/>
                    <img className="course__other_imgMob"  src={coursemob2} alt=""/>
                    <div className="course__other_title">course title</div>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Certification in
                        <br/>Warehousing</div>
                        {/* <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur</div> */}
                        <div className="course__other_grids">
                            <div className="course__other_grids-item">
                               <svg xmlns="http://www.w3.org/2000/svg" width="41.264" height="41.264" viewBox="0 0 41.264 41.264">
                                 <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M24.007,3.375A20.632,20.632,0,1,0,44.639,24.007,20.629,20.629,0,0,0,24.007,3.375ZM25.4,25.792a1.393,1.393,0,0,1-1.389,1.389H14.484a1.389,1.389,0,0,1,0-2.777h8.134V11.31a1.389,1.389,0,1,1,2.777,0Z" transform="translate(-3.375 -3.375)" fill="#525252"/>
                               </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>1 week</strong></div>
                                   <div>duration</div>
                               </div>
                            </div>
                            <div className="course__other_grids-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24.979" height="35.908" viewBox="0 0 24.979 35.908">
                               <path id="Icon_map-book-store" data-name="Icon map-book-store" d="M31.459,31.1V4.562A3.132,3.132,0,0,0,28.337,1.44H9.6A3.132,3.132,0,0,0,6.48,4.562V34.225A3.132,3.132,0,0,0,9.6,37.347H28.337c1.45,0,3.122,0,3.122-1.561v-.781H10.383a1.566,1.566,0,0,1-1.561-1.561V31.1ZM10.383,7.685a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781V9.246a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781V7.685Zm0,6.245a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781v1.561a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781Z" transform="translate(-6.48 -1.44)" fill="#525252"/>
                               </svg>

                               <div className="course__other_grids-item--div">
                                   <div><strong>5 modules</strong></div>
                                   {/* <div>duration</div> */}
                               </div>

                            </div>


                            <div className="course__other_grids-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42.686" height="31.664" viewBox="0 0 42.686 31.664">
                                 <g id="Group_1458" data-name="Group 1458" transform="translate(-778.632 -1328.541)">
                                  <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M19.675,4.5H2.8A2.8,2.8,0,0,0,0,7.3V24.175a2.8,2.8,0,0,0,2.8,2.8H19.675a2.8,2.8,0,0,0,2.8-2.8V7.3A2.8,2.8,0,0,0,19.675,4.5ZM30.759,6.706l-6.414,4.424v9.211l6.414,4.418a1.876,1.876,0,0,0,2.95-1.51V8.216A1.877,1.877,0,0,0,30.759,6.706Z" transform="translate(787.609 1333.232)" fill="#525252"/>
                                  <ellipse id="Ellipse_2296" data-name="Ellipse 2296" cx="8.5" cy="8" rx="8.5" ry="8" transform="translate(778.632 1328.541)" fill="red"/>
                                 </g>
                                 </svg>
                                 <div className="course__other_grids-item--div">
                                     <div><strong>Live Lecture</strong></div>
                                     {/* <div>duration</div> */}
                                 </div>
                            </div>

                            <div className="course__other_grids-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.694" height="35.592" viewBox="0 0 26.694 35.592">
                                 <path id="Icon_ionic-md-bookmark" data-name="Icon ionic-md-bookmark" d="M30.862,4.5H11.583A3.718,3.718,0,0,0,7.875,8.208V40.092L21.222,34.16l13.347,5.932V8.208A3.718,3.718,0,0,0,30.862,4.5Z" transform="translate(-7.875 -4.5)" fill="#525252"/>
                                 </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>Certification</strong></div>
                                   {/* <div>duration</div> */}
                               </div>
                            </div>



                        </div>
                        <Link  className="course__div_row-a" to="/othercourse2">Details <img src={arrow} alt=""/></Link>
                    </div>
                    <div className="course__wrapperMob_flex course__other_flex">
                        <Link className="course__wrapperMob_flex-a" to="/">Buy</Link>
                        <Link className="course__wrapperMob_flex-a course__wrapperMob_flex-a--mod" to="/othercourse2">View Details</Link>
                    </div>
                </div>

                <div className="course__other">
                    <img className="course__other_img"  src={otherCourse1} alt=""/>
                    <img className="course__other_imgMob"  src={coursemob2} alt=""/>
                    <div className="course__other_title">course title</div>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Regulation Courses
                        <br/>Export Import</div>
                        <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur</div>
                        <div className="course__other_grids">
                            <div className="course__other_grids-item">
                               <svg xmlns="http://www.w3.org/2000/svg" width="41.264" height="41.264" viewBox="0 0 41.264 41.264">
                                 <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M24.007,3.375A20.632,20.632,0,1,0,44.639,24.007,20.629,20.629,0,0,0,24.007,3.375ZM25.4,25.792a1.393,1.393,0,0,1-1.389,1.389H14.484a1.389,1.389,0,0,1,0-2.777h8.134V11.31a1.389,1.389,0,1,1,2.777,0Z" transform="translate(-3.375 -3.375)" fill="#525252"/>
                               </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>6 weeks</strong></div>
                                   <div>duration</div>
                               </div>
                            </div>
                            <div className="course__other_grids-item">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24.979" height="35.908" viewBox="0 0 24.979 35.908">
                               <path id="Icon_map-book-store" data-name="Icon map-book-store" d="M31.459,31.1V4.562A3.132,3.132,0,0,0,28.337,1.44H9.6A3.132,3.132,0,0,0,6.48,4.562V34.225A3.132,3.132,0,0,0,9.6,37.347H28.337c1.45,0,3.122,0,3.122-1.561v-.781H10.383a1.566,1.566,0,0,1-1.561-1.561V31.1ZM10.383,7.685a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781V9.246a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781V7.685Zm0,6.245a.783.783,0,0,1,.781-.781H26.776a.783.783,0,0,1,.781.781v1.561a.783.783,0,0,1-.781.781H11.164a.783.783,0,0,1-.781-.781Z" transform="translate(-6.48 -1.44)" fill="#525252"/>
                               </svg>

                               <div className="course__other_grids-item--div">
                                   <div><strong>6 weeks</strong></div>
                                   <div>duration</div>
                               </div>

                            </div>


                            <div className="course__other_grids-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42.686" height="31.664" viewBox="0 0 42.686 31.664">
                                 <g id="Group_1458" data-name="Group 1458" transform="translate(-778.632 -1328.541)">
                                  <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M19.675,4.5H2.8A2.8,2.8,0,0,0,0,7.3V24.175a2.8,2.8,0,0,0,2.8,2.8H19.675a2.8,2.8,0,0,0,2.8-2.8V7.3A2.8,2.8,0,0,0,19.675,4.5ZM30.759,6.706l-6.414,4.424v9.211l6.414,4.418a1.876,1.876,0,0,0,2.95-1.51V8.216A1.877,1.877,0,0,0,30.759,6.706Z" transform="translate(787.609 1333.232)" fill="#525252"/>
                                  <ellipse id="Ellipse_2296" data-name="Ellipse 2296" cx="8.5" cy="8" rx="8.5" ry="8" transform="translate(778.632 1328.541)" fill="red"/>
                                 </g>
                                 </svg>
                                 <div className="course__other_grids-item--div">
                                     <div><strong>6 weeks</strong></div>
                                     <div>duration</div>
                                 </div>
                            </div>

                            <div className="course__other_grids-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.694" height="35.592" viewBox="0 0 26.694 35.592">
                                 <path id="Icon_ionic-md-bookmark" data-name="Icon ionic-md-bookmark" d="M30.862,4.5H11.583A3.718,3.718,0,0,0,7.875,8.208V40.092L21.222,34.16l13.347,5.932V8.208A3.718,3.718,0,0,0,30.862,4.5Z" transform="translate(-7.875 -4.5)" fill="#525252"/>
                                 </svg>
                               <div className="course__other_grids-item--div">
                                   <div><strong>6 weeks</strong></div>
                                   <div>duration</div>
                               </div>
                            </div>



                        </div>
                        <Link  className="course__div_row-a" to="/othercourse3">Details <img src={arrow} alt=""/></Link>
                    </div>
                    <div className="course__wrapperMob_flex course__other_flex">
                        <Link className="course__wrapperMob_flex-a" to="/">Buy</Link>
                        <Link className="course__wrapperMob_flex-a course__wrapperMob_flex-a--mod" to="/othercourse3">View Details</Link>
                    </div>
                </div>



         </div>
      )
    }
  }


 export default Course;
