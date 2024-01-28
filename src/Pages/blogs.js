import React from "react";
import { useState, useEffect } from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import {Img, Icons, Blogs_img} from "../Utilities/Icons.js";
import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, LinkedinIcon, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import twitter from "../Utilities/logo.webp"
import axios from "axios";

function Blogs() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive_2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get('/db.json');
    if (response.status === 200) {
      setPosts(response.data.posts);
    } else {
      console.log("Something went wrong");
    }
  };


  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <div className="banner_section">
        <img src={Img.blog_banner} className="banner_img" alt=""></img>
        <div className="banner_content">
            <h6 className="blog_detail_side_breadcrumn home-blog-ref"><a href="/"><i class="fa fa-home"></i> HOME </a>| <a href="#">Blog</a></h6>
          <Link to = "https://calendly.com/growingglobeimmigration"  target="_blank" rel="noreferrer">
            <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button></Link>
        </div>
      </div>
      <div className="Blog_section animation anm_mod full fast">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="blog_section_title anm_mod full fast">Latest Blogs</h2>
            </div>
          </div>
          <div className="row">
          {posts.map(post => {
                return (<div className="col-md-4" key={post.id}>
                  <Link to={`/blog_details/${post.url}`}><div className="blog-card blog-card-blog anm_mod full fast">
                    <div className="blog-card-image">
                      <img className="img" src={post.image} />
                      <div className="ripple-cont"></div>
                    </div>
                    <div className="blog-table">
                      <h6 className="blog-category blog-text-success"><i className="far fa-newspaper"></i> {post.category}</h6>
                      <h4 className="blog-card-caption">
                        <Link to={`/blog_details/${post.url}`}>{post.title}</Link>
                      </h4>
                      <p className="blog-card-description">{post.description}</p>
                      <div className="ftr">
                        <div className="author">
                          <img src={Icons.useravtar} alt="..." className="avatar img-raised" ></img> <span className="blog_author_name">{post.author}</span>
                        </div>
                        <div className="stats calendar"><i className="fa fa-calendar"></i> {post.published_date}</div>                        
                      </div>
                      </div>
                      <div className="blog-share anm full fast">
                        <FacebookShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                          quote={"Hey guys! Check out this article!"}
                          hashtag="#GGI">
                          <button round="true" className="fa fa-facebook facebook-icon share-icons" />
                        </FacebookShareButton>

                        <TwitterShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                          quote={"Hey guys! Check out this article!"}
                          hashtag="#GGI">
                          <img className="share-icons twitter-fix" src={twitter}></img>
                        </TwitterShareButton>

                        <LinkedinShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                          quote={"Hey guys! Check out this article!"}
                          hashtag="#GGI">
                          <button className="fa fa-linkedin linkedin-icon share-icons" />
                        </LinkedinShareButton>

                        <WhatsappShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                          quote={"Hey guys! Check out this article!"}
                          hashtag="#GGI">
                            <button className="fa fa-whatsapp whatsapp-icon share-icons" />
                        </WhatsappShareButton></div>
                    </div></Link>
                </div>)
            })}
          </div>
        </div>
      </div>
    </div >
  );
}
export default Blogs;