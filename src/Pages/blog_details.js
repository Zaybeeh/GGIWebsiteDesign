import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "./header.js";
import Footer from "./footer.js";
import { Img } from "../Utilities/Icons.js";
import parse from "html-react-parser";
import axios from "axios";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, LinkedinIcon, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import twitter from "../Utilities/logo.webp";
import blogs from "../Pages/blogs.js";
import "./../Assets/vendor/bootstrap/css/bootstrap-grid.css";


function Blogs_Details() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { title } = useParams();
  const { url } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('/db.json');
        if (response.status === 200) {
          setPosts(response.data.posts);
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const selectedPost = posts.find((p) => p.url === url);
    setPost(selectedPost);
  }, [url, posts]);

  if (!post) {
    return <div>Loading...</div>;
  }
  if (post.video !== "") {
  return (
    <div>
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:title" content={`growingglobeimmigration.com/blog_details/${post.title}`}/>
    <meta property="og:image" content={`growingglobeimmigration.com/blog_details/${post.image}`}/>
    <meta property="og:description" content={`growingglobeimmigration.com/blog_details/${post.description}`}/>
    <meta property="og:url" content={`growingglobeimmigration.com/blog_details/${post.title}`}/>
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
      <div className="banner_section">
        <img src={Img.blog_banner} className="banner_img" alt="" />
        <div className="banner_content">
        <h6 className="blog_detail_side_breadcrumn home-blog-ref"><a href="/"><i class="fa fa-home"></i> HOME </a> | <a href="/blogs">Blog</a></h6>
        <Link to = "https://calendly.com/growingglobeimmigration"  target="_blank" rel="noreferrer">
            <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button></Link>
        </div>
        </div>
      <div className="Blog_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h2 className="blog_detail_section_title">{post.title}</h2>
              <hr className="blog_hr" />
              <div>
              <center>
              <iframe src={post.video} className="blog_videos" allow="autoplay"></iframe>
              </center>
              </div>
              <div className="blog-detail-share">
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
                      <br></br>
                      <br></br>
              <div className="blog_detail_para">{parse(post.body)}</div>
              <div className="blog-detail-share">
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
                      <br></br>
                      <br></br>
                      <div>
                        <center>
                        <a href="https://calendly.com/growingglobeimmigration"><button className="video_book_appoint">Book An Appointment</button></a>
                      </center></div>
            </div>
            <div className="col-md-4">
              <div className="blog_detail_side_box">
                <h5 className="blog_detail_side_section_title">Recent Blogs</h5>
                {posts.map((recentPost) => (
                  <div key={recentPost.url}>
                    <div className="blog_detail_side_inner">
                        <Link onClick={window.scrollTo(0,0)} to={`/blog_details/${recentPost.url}`}>
                      <div className="blog_detail_side_img_box">
                        <a href="#"/>
                          <img className="blog_detail_side_img" src={recentPost.image} alt={recentPost.title} />
                      </div>
                      <div>
                        <h6 className="blog_detail_side_title">{recentPost.title}</h6>
                        <h6 className="blog_date"><i className="fa fa-calendar"></i> {recentPost.published_date}</h6>
                      </div>
                        </Link>
                      
                    </div>
                    <hr className="blog_detail_side_hr" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return (<div>
    <div className="banner_section">
      <img src={Img.blog_banner} className="banner_img" alt="" />
      <div className="banner_content">
        <h6 className="blog_detail_side_breadcrumn home-blog-ref"><a href="/"><i class="fa fa-home"></i> HOME </a> | <a href="/blogs">Blog</a></h6>
        <a href="https://calendly.com/growingglobeimmigration" target="_blank" rel="noreferrer">
          <button className="embark_book_appoint_2"><strong>Book An Appointment</strong></button></a>
      </div>
    </div>
    <div className="Blog_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          </div>
          <div className="row">
          <div className="col-md-8">
              <h2 className="blog_detail_section_title">{post.title}</h2>
              <hr className="blog_hr" />
              <div>
              <center>
                  <a href="#">
                    <img className="img blog_detail_img" src={post.image} alt={post.title} />
                  </a>
                </center>
              </div>
              <div className="blog-detail-share">
              <FacebookShareButton 
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button round = "true" className="fa fa-facebook facebook-icon share-icons"/>
                      </FacebookShareButton>

                      <TwitterShareButton 
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <img className="fa share-icons twitter-fix" src={twitter}></img>
                      </TwitterShareButton>

                      <LinkedinShareButton 
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button className="fa fa-linkedin linkedin-icon share-icons"/>
                      </LinkedinShareButton>
                      
                      <WhatsappShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button className="fa fa-whatsapp whatsapp-icon share-icons" />

                      </WhatsappShareButton></div>
                      <br></br>
                      <br></br>
              <div className="blog_detail_para">{parse(post.body)}</div>
              <div className="blog-detail-share">
              <FacebookShareButton 
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button round = "true" className="fa fa-facebook facebook-icon share-icons"/>
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
                        <button className="fa fa-linkedin linkedin-icon share-icons"/>
                      </LinkedinShareButton>
                      <WhatsappShareButton
                        url={`growingglobeimmigration.com/blog_details/${post.url}`}
                        quote={"Hey guys! Check out this article!"}
                        hashtag="#GGI">
                        <button className="fa fa-whatsapp whatsapp-icon share-icons" />
                      </WhatsappShareButton></div>
                      <br></br>
                      <br></br>
                      <div>
                        <center>
                        <a href="https://calendly.com/growingglobeimmigration"><button className="video_book_appoint">Book An Appointment</button></a>
                      </center></div>
              </div>
            <div className="col-md-4">
              <div className="blog_detail_side_box">
                <h5 className="blog_detail_side_section_title">Recent Blogs</h5>
                {posts.map((recentPost) => (
                  <div key={recentPost.url}>
                    <div className="blog_detail_side_inner">
                        <Link onClick={window.scrollTo(0,0)} to={`/blog_details/${recentPost.url}`}>
                      <div className="blog_detail_side_img_box">
                          <a href="#"/>
                          <img className="blog_detail_side_img" src={recentPost.image} alt={recentPost.title} />
                      </div>
                      <div>
                        <h6 className="blog_detail_side_title">{recentPost.title}</h6>
                        <h6 className="blog_date"><i className="fa fa-calendar"></i> {recentPost.published_date}</h6>
                      </div>
                        </Link>
                      
                    </div>
                    <hr className="blog_detail_side_hr" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
}
export default Blogs_Details;