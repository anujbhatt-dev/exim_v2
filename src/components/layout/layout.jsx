import React, { Component } from "react";
import Navigation from "./nav/nav";
import Landing from "./landing/landing";
import Pricing from "./pricing/pricing";
import AboutUs from "./aboutUs/aboutUs";
import Course from "./course/course";
import OtherCourse1 from "./course/othercourse1/othercourse1";
import OtherCourse0 from "./course/othercourse0/othercourse0";
import OtherCourse2 from "./course/othercourse2/othercourse2";
import OtherCourse3 from "./course/othercourse3/othercourse3";

import Footer from "./footer/footer";
import GoToTop from "./goToTop/goToTop";
import { Switch, Route } from "react-router-dom";
import BlogsPage from "./blog_page/blog_page";
import BlogsManual from "./blogs_manual/blogs_manual";
import BlogMain from "./blog_page/blog_main/blog_main";
import BlogManual from "./blogs_manual/blog_manual/blog_manual";
import axios from "axios";
import BloggerBlogs from "./blogger/blogger-blogs";
import BloggerBlog from "./blogger/blogger-blog";
import WebinarConfig from "./webinar_config";
import AdminLogin from "./admin_login";
import hyderabad from "../../assets/images//hyderabad.png";
import delhi from "../../assets/images//delhi.png";
import mumbai from "../../assets/images//mumbai.png";
import raipur from "../../assets/images//raipur.png";
import pune from "../../assets/images//pune.png";
import banglore from "../../assets/images//banglore.png";
import kolkata from "../../assets/images//kolkata.png";

class Layout extends Component {
  GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
  UDATES_BLOG_ID = `2936337281138035481`;
  UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`;

  state = {
    city: [
      {
        name: "hyderabad",
        img: hyderabad,
      },
      { name: "banglore", img: banglore },
      { name: "pune", img: pune },
      { name: "raipur", img: raipur },
      {
        name: "mumbai",
        img: mumbai,
      },
      {
        name: "delhi",
        img: delhi,
      },
      {
        name: "kolkata",
        img: kolkata,
      },
    ],

    selectedCityIndex: -1,

    blogs: [],
    url: "https://vast-earth-12296.herokuapp.com/",
  };

  componentDidMount = () => {
    axios
      .get(this.UDATES_BLOGGER_POSTS_API)
      .then((res) => this.setState({ blogs: [...res.data.items] }))
      .catch((err) => alert("something went wrong"));

    let selectedCity = "";
    if (window.location.toString().indexOf("hyderabad") !== -1)
      selectedCity = "hyderabad";
    else if (window.location.toString().indexOf("pune") !== -1)
      selectedCity = "pune";
    else if (window.location.toString().indexOf("delhi") !== -1)
      selectedCity = "delhi";
    else if (window.location.toString().indexOf("mumbai") !== -1)
      selectedCity = "mumbai";
    else if (window.location.toString().indexOf("raipur") !== -1)
      selectedCity = "raipur";
    else if (window.location.toString().indexOf("banglore") !== -1)
      selectedCity = "banglore";
      else if (window.location.toString().indexOf("kolkata") !== -1)
      selectedCity = "kolkata";

    if (selectedCity === "") return;

    for (let i = 0; i < this.state.city.length; i++)
      if (this.state.city[i].name === selectedCity) {
        this.setState({ selectedCityIndex: i });
        return;
      }
  };

  getBlog = (id) => {
    let index = this.state.blogs.findIndex((blog) => blog.id === +id);
    return index === -1 ? null : this.state.blogs[index];
  };

  render() {
    return (
      <div className="layout">
        <div className="layout__city">
          {this.state.selectedCityIndex === -1
            ? "india"
            : this.state.city[this.state.selectedCityIndex].name}
        </div>
        <Switch>
          <Route exact path="/admin">
            <Navigation />
            <AdminLogin url={this.state.url} />
          </Route>

          <Route>
            <Navigation />
            <GoToTop />
            <Switch>
              <Route exact path="/">
                <Landing page="HOME" city={this.state.selectedCityIndex===-1?null:{...this.state.city[this.state.selectedCityIndex]}} url={this.state.url} />
              </Route>
              <Route exact path="/blogs" url={this.state.url}>
                <BloggerBlogs page="BLOGS" blogs={this.state.blogs} />
              </Route>

              <Route exact path="/pricing">
                <Pricing page="PRICING" url={this.state.url} />
              </Route>

              <Route exact path="/about">
                <AboutUs page="ABOUT" url={this.state.url} />
              </Route>

              <Route exact path="/courses">
                <Course page="COURSES" url={this.state.url} />
              </Route>
              <Route exact path="/ExportImprotCourse">
                <OtherCourse0 page="COURSES" url={this.state.url} />
              </Route>
              <Route exact path="/othercourse1">
                <OtherCourse1 page="COURSES" url={this.state.url} />
              </Route>
              <Route exact path="/othercourse2">
                <OtherCourse2 page="COURSES" url={this.state.url} />
              </Route>
              <Route exact path="/othercourse3">
                <OtherCourse3 page="COURSES" url={this.state.url} />
              </Route>
              <Route path="/:postId" url={this.state.url}>
                <BloggerBlog page="BLOGS" />
              </Route>
            </Switch>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Layout;
