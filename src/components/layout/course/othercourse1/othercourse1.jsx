import React, {Component} from "react"
import {Link} from "react-router-dom"
import bgCC from "../../../../assets/images/bgCC.svg"
import apple1 from "../../../../assets/images/apple1.svg"
import play1 from "../../../../assets/images/play1.svg"
import whyJoin from "../../../../assets/images/whyJoin.svg"
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
        title:"Parties and places involved in import/ export",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nostrum doloremque incidunt magnam cumque expedita consequuntur voluptates. Illo porro nesciunt, amet, voluptate itaque, alias commodi eius quia nihil placeat soluta.",
        locked:false,
        duration:"140 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Types of Transportation, Container and packaging",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officia, aspernatur error, praesentium ab animi et soluta eos laudantium velit placeat sit id eligendi a dicta eaque hic. Eos, optio!",
        locked:false,
        duration:"80 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Basic Registration for Exim",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nam rem, nemo magnam tempore commodi reiciendis molestiae ullam vero. Fuga magnam qui perferendis, molestiae ad minima nulla culpa, consequuntur dolore.",
        locked:false,
        duration:"110 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Export Incentives",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quas saepe aspernatur cumque, voluptatem totam. Sit tempora illo, autem inventore, impedit eaque aliquam fugiat quam eius, pariatur modi praesentium ut.",
        locked:false,
        duration:"30 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Incoterms",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime inventore, distinctio, laborum neque fugiat repellendus eum recusandae, quam voluptatem voluptate consequuntur doloremque eaque accusamus, rerum blanditiis impedit officia! Itaque, non?",
        locked:false,
        duration:"10 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      },
      {
        title:"Basic Terms",
        lessons:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptates tenetur sint omnis molestias perferendis explicabo quae, veniam, assumenda, minima aliquam cupiditate aut quisquam corporis ducimus quod enim voluptatum dolore.",
        locked:false,
        duration:"60 mins",
        subtitle:"Lorem ipsum dolor sit amet"
      }
    ],
    panel:"lessonn",
    reviews:[
      {
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit, aliquid. Blanditiis expedita culpa vitae numquam laborum consectetur quam illo, dolore, excepturi perferendis voluptatibus, saepe non! Ullam modi voluptatem saepe omnis amet dolore facilis illo! Veniam tempore quas esse excepturi id fugit repellendus maiores consequuntur ipsam, dolore magni deleniti fuga velit recusandae! Repudiandae itaque unde sint. Aliquid quam, impedit ullam delectus deleniti voluptas iste quae explicabo quia sint mollitia, eveniet itaque in, atque nam asperiores est ea, beatae assumenda aliquam. Soluta labore saepe quos debitis iusto nam assumenda ipsa, dolor fugit aspernatur maxime eos necessitatibus voluptatem exercitationem quia, laborum ipsam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia molestiae in fugiat totam. Animi tenetur possimus quod atque mollitia ab ratione at optio eius, quaerat ullam dolore, ea amet saepe adipisci fugit voluptas quis, enim reiciendis. Possimus aperiam doloremque quibusdam ea, sunt sapiente dolores fuga quae quod, vero est consequuntur voluptatem ut! Eligendi deleniti ea dolorem sint rerum explicabo porro vel aut provident maxime harum, quisquam, numquam quod nihil natus atque officiis eius, quas alias distinctio vitae. Optio cupiditate ducimus eaque. Possimus, deserunt, alias. Incidunt laboriosam distinctio ipsa, voluptatum libero itaque animi qui provident voluptates maiores quibusdam, minus, excepturi quam deleniti veritatis explicabo odio quae cupiditate impedit placeat molestias laudantium! Itaque, distinctio ut molestias illo quas suscipit eos aliquid accusantium, dolore nihil aut consequatur ex possimus fugit laborum numquam, aliquam consectetur harum saepe. Laudantium suscipit, at eveniet. Similique, repellendus modi voluptates ullam. Iusto recusandae deserunt, et, quas rerum quasi ut voluptatibus sit delectus corporis temporibus sapiente odit autem, beatae. Labore consectetur harum voluptatum dolorum quam, sequi obcaecati nulla minima modi voluptatem quia, quibusdam dolorem qui sit porro, veniam nisi aliquam et. Itaque, voluptatem obcaecati iste atque dignissimos enim aut corporis, voluptates quod sunt adipisci. Ab reiciendis accusantium, rerum consequuntur?",
        rating:3,
        locked:false,
        name:"anuj bhatt"
      },
      {
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit, aliquid. Blanditiis expedita culpa vitae numquam laborum consectetur quam illo, dolore, excepturi perferendis voluptatibus, saepe non! Ullam modi voluptatem saepe omnis amet dolore facilis illo! Veniam tempore quas esse excepturi id fugit repellendus maiores consequuntur ipsam, dolore magni deleniti fuga velit recusandae! Repudiandae itaque unde sint. Aliquid quam, impedit ullam delectus deleniti voluptas",
        rating:3,
        locked:false,
        name:"sagar panwar"
      },
      {
        review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit, aliquid. Blanditiis expedita culpa vitae numquam laborum consectetur quam illo, dolore, excepturi perferendis voluptatibus, saepe non! Ullam modi voluptatem saepe omnis amet dolore facilis illo! Veniam tempore quas esse excepturi id fugit repellendus maiores consequuntur ipsam, dolore magni deleniti fuga velit recusandae! Repudiandae itaque unde sint. Aliquid quam, impedit ullam delectus deleniti voluptas iste quae explicabo quia sint mollitia, eveniet itaque in, atque nam asperiores est ea, beatae assumenda aliquam. Soluta labore saepe quos debitis iusto nam assumenda ipsa, dolor fugit aspernatur maxime eos necessitatibus voluptatem exercitationem quia, laborum ipsam!",
        rating:5,
        locked:false,
        name:"anuj bhatt"
      },
    ],
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quod, sint sequi mollitia. Maxime molestias omnis sapiente non quis, dolores, laboriosam reiciendis, eius vero mollitia distinctio nisi repellendus dolore, pariatur dolorem iure numquam. Porro, laboriosam. Dicta nobis nulla, alias sed mollitia, possimus, facere repudiandae pariatur molestiae nostrum nesciunt numquam velit laudantium? Tempora dolorum natus odio deleniti dolore, eveniet animi iste harum cumque debitis? Repellat excepturi, ipsam. Eum ullam cumque dicta optio dolor architecto sint possimus aut suscipit quisquam saepe, enim similique eligendi adipisci perferendis magnam quia debitis deserunt eveniet asperiores eaque. Obcaecati, ratione velit explicabo delectus. Vitae fuga rem, tempore velit ullam qui animi et vel possimus consequuntur. Eius pariatur, quod modi numquam. Voluptatem, beatae. Delectus libero, cupiditate sunt nostrum at expedita nihil ut reiciendis eligendi atque in ea, animi numquam odio eos exercitationem veritatis alias labore voluptatibus adipisci ullam assumenda? Necessitatibus esse laudantium cum placeat nam, illo alias tenetur fugiat a? Sapiente placeat amet alias nisi, nihil culpa dolores officia, doloribus in, eaque, incidunt maxime. Molestiae nisi, error itaque sint? Tempore, inventore nemo soluta commodi reiciendis quidem, molestiae aliquam. Vel labore fugit, vitae optio iure eveniet, repellendus quod recusandae ducimus dolor eaque beatae. Fugit nisi blanditiis natus ea quas repellendus odit assumenda dicta tempore suscipit dolorum totam accusantium nobis earum veritatis, explicabo alias a commodi ad mollitia fugiat, unde laboriosam officiis! Voluptatum, tempora, facilis placeat excepturi accusantium iste cupiditate assumenda quod inventore quo repellendus natus deserunt sunt magnam similique, nemo provident laudantium voluptatem possimus consectetur mollitia aut obcaecati? Architecto laboriosam nihil consequatur alias saepe, iure doloribus libero! Quis quo fuga dignissimos velit optio, beatae reprehenderit voluptates similique est ad magnam molestiae, ipsam, tenetur impedit nostrum, repudiandae in eos. Unde quasi perspiciatis laboriosam? Sequi excepturi distinctio explicabo cum, in non, delectus ducimus, fuga eveniet minima culpa. Necessitatibus repudiandae, dolorum odio quas illum incidunt quos maiores eaque. Dolorum ipsa repellat quasi ipsum eos officiis voluptates quis suscipit nulla aperiam dolores, facilis in tempora corporis atque tenetur architecto quam sit, odit dicta, accusamus totam, voluptatem quos saepe? Odio qui possimus laborum, eveniet quia placeat explicabo corporis! Asperiores totam facere distinctio sed recusandae possimus cumque nobis ut temporibus id et deleniti eligendi illum, vel ipsam quam suscipit aliquam pariatur sequi eos. Reprehenderit nihil adipisci quo dolorem quae molestiae velit maiores, voluptatem, sint at, ex quidem fugit. Qui quas, cum quidem sapiente explicabo aperiam dignissimos repellendus ducimus tempora voluptates magni praesentium amet laboriosam dolore temporibus quasi esse repudiandae, illum quod quaerat. Fugit excepturi quo, saepe officia sapiente nemo! Aliquam ipsa dolore temporibus impedit veniam eligendi suscipit magni alias iste adipisci esse maxime nisi et, officia ut. Quod in dolores totam nesciunt quis pariatur perferendis ab iusto quibusdam at. Obcaecati amet veritatis ex, magnam ea iste, eius consequatur molestias cupiditate illum quod voluptatum quis minus consectetur sequi voluptatibus ullam atque ut est. Excepturi modi ipsam esse nam. Eum error sequi ratione consectetur modi neque asperiores aspernatur nesciunt assumenda perspiciatis! Tempora, ab soluta placeat. Voluptatibus sit tempora ducimus cum iste dolore odio molestias! Quis, ipsam, illum!"
  }

  componentDidMount = () => {
    window.scrollTo({top:0,behavior:"smooth"});

    Aos.init({
      duration: 1500,
      delay: 100,
    });
  };
//
  panelHandler=(p)=>{
    // alert("otherCourse1__Wrapper_row1--"+(((p%3)===0)?"3":p));
    // alert("otherCourse1__Wrapper_row1--"+(((p+1)%3)===0?"3":(p+1)%3));
    // alert("otherCourse1__Wrapper_row1--"+(((p+2)%3)===0?"3":(p+2)%3));
    this.setState({
      panel:p===1?"lessonn":p===2?"details":"reviews"
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
      panel:p===1?"lessonn":p===2?"details":"reviews"
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
               <h1 className="heading-primary landing__3_heading">course details</h1>
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
                                           <div>{course.duration}</div>
                                      </div>
                                   </div>
                         })
                       }
                    </div>
                    <div className="course__wrapperMob">
                         <img src={coursemob} alt=""/>
                         <div className="course__wrapperMob_flex">
                             <Link className="course__wrapperMob_flex-a" to="/">Buy</Link>
                             <Link className="course__wrapperMob_flex-a course__wrapperMob_flex-a--mod" to="/courses/otherCourse1">View Details</Link>
                         </div>
                         <h1 className="heading-primary landing__3_heading">Introduction to international trade</h1>
                         <div className="course__wrapperMob_grid">
                               <div className="course__wrapperMob_grid-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                  <g id="Ellipse_2288" data-name="Ellipse 2288" fill="#fff" stroke="#707070" stroke-width="1">
                                  <circle cx="21" cy="21" r="21" stroke="none"/>
                                  <circle cx="21" cy="21" r="20.5" fill="none"/>
                                  </g>
                                  </svg>
                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>6 weeks</strong></div>
                                      <div>duration</div>
                                  </div>

                               </div>


                               <div className="course__wrapperMob_grid-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                  <g id="Ellipse_2288" data-name="Ellipse 2288" fill="#fff" stroke="#707070" stroke-width="1">
                                  <circle cx="21" cy="21" r="21" stroke="none"/>
                                  <circle cx="21" cy="21" r="20.5" fill="none"/>
                                  </g>
                                  </svg>
                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>6 weeks</strong></div>
                                      <div>duration</div>
                                  </div>

                               </div>


                               <div className="course__wrapperMob_grid-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                  <g id="Ellipse_2288" data-name="Ellipse 2288" fill="#fff" stroke="#707070" stroke-width="1">
                                  <circle cx="21" cy="21" r="21" stroke="none"/>
                                  <circle cx="21" cy="21" r="20.5" fill="none"/>
                                  </g>
                                  </svg>
                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>6 weeks</strong></div>
                                      <div>duration</div>
                                  </div>

                               </div>
                               <div className="course__wrapperMob_grid-item">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                  <g id="Ellipse_2288" data-name="Ellipse 2288" fill="#fff" stroke="#707070" stroke-width="1">
                                  <circle cx="21" cy="21" r="21" stroke="none"/>
                                  <circle cx="21" cy="21" r="20.5" fill="none"/>
                                  </g>
                                  </svg>
                                  <div className="course__wrapperMob_grid-item--div">
                                      <div><strong>6 weeks</strong></div>
                                      <div>duration</div>
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
                                Details
                         </div>
                         <div onClick={()=>{this.panelHandler(3)}} className="otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3">
                                Reviews
                         </div>
                   </div>
                   <div className="otherCourse1__Wrapper_row1 otherCourse1__Wrapper_row2">
                         <div onClick={()=>{this.panelHandlermob(1)}} className={this.state.panel==="lessonn"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--1 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--1"}>
                                Lesson
                         </div>
                         <div onClick={()=>{this.panelHandlermob(2)}} className={this.state.panel==="details"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--2 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--2 "}>
                                Details
                         </div>
                         <div onClick={()=>{this.panelHandlermob(3)}} className={this.state.panel==="reviews"?"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3 otherCourse1__Wrapper_row2--selected":"otherCourse1__Wrapper_row1--item otherCourse1__Wrapper_row1--3 "}>
                                Reviews
                         </div>
                   </div>
                   <div className="otherCourse1__Wrapper_selected">{this.state.panel}</div>


                   <div className="middle">
                       {this.state.panel==="lessonn"?
                         <div className="middle__lesson">
                              {this.state.courses.map((item,i)=>{
                                return <div className="middle__lesson_item">
                                          <img src={otherCourse1} alt=""/>
                                          <div className="middle__lesson_item-middle">
                                              <div className="title">{item.title}</div>
                                              <div className="subtitle">{item.subtitle}</div>
                                              <div className="lesson">{item.locked?item.lessons:item.lessons.substring(0,51)}</div>
                                          </div>
                                          <div onClick={()=>{this.unlockHandler(i)}} className="middle__lesson_item-right">
                                              <span>detail</span>
                                                  <svg style={item.locked?{transform:"rotate(180deg)"}:null} xmlns="http://www.w3.org/2000/svg" width="22.43" height="16.391" viewBox="0 0 22.43 16.391">
                                                    <path id="Polygon_9" data-name="Polygon 9" d="M7.914,4.825a4,4,0,0,1,6.6,0l3.632,5.308a4,4,0,0,1-3.3,6.259H7.584a4,4,0,0,1-3.3-6.259Z" transform="translate(22.43 16.391) rotate(180)" fill="#fff"/>
                                                  </svg>
                                          </div>
                                       </div>
                              })}
                         </div>
                         :this.state.panel==="details"?
                         <div className="middle__detail">
                              {this.state.details}
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
                             {this.state.panel==="lessonn"?
                               <div className="middleMob__lesson">
                               {this.state.courses.map((item,i)=>{
                                 return <div className="middle__lesson_item">
                                           <img src={otherCourse1} alt=""/>
                                           <div className="middle__lesson_item-middle">
                                               <div className="title">{item.title}</div>
                                               <div className="lesson">{item.locked?item.lessons:null}</div>
                                           </div>
                                           <div onClick={()=>{this.unlockHandler(i)}} className="middle__lesson_item-right">
                                              {item.locked
                                              ?<svg xmlns="http://www.w3.org/2000/svg" width="25.948" height="25.948" viewBox="0 0 25.948 25.948">
                                                  <path id="Path_5144" data-name="Path 5144" d="M25.948,14.474A11.474,11.474,0,1,1,14.474,3,11.474,11.474,0,0,1,25.948,14.474Z" transform="translate(-1.5 -1.5)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                  <path id="Path_5146" data-name="Path 5146" d="M12,18h9.179" transform="translate(-3.616 -5.026)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </svg>

                                              :<svg xmlns="http://www.w3.org/2000/svg" width="25.948" height="25.948" viewBox="0 0 25.948 25.948">
                                              <path id="Path_5144" data-name="Path 5144" d="M25.948,14.474A11.474,11.474,0,1,1,14.474,3,11.474,11.474,0,0,1,25.948,14.474Z" transform="translate(-1.5 -1.5)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              <path id="Path_5145" data-name="Path 5145" d="M18,12v9.179" transform="translate(-5.026 -3.616)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              <path id="Path_5146" data-name="Path 5146" d="M12,18h9.179" transform="translate(-3.616 -5.026)" fill="none" stroke="#002aff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                              </svg>}

                                           </div>
                                        </div>
                               })}
                         </div>
                         :this.state.panel==="details"?
                         <div className="middleMob__detail">
                              {this.state.details}
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
