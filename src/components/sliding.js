import React from "react";
import Slider from "react-slick";

export default function SimpleSlider(profile) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
              <div><h2>Profile Slides for: <br /> <b>{profile.name}</b></h2></div>
              <div><h2>Name: {profile.name}</h2></div>
              <div><h2 className="text-center"><img alt="imagery" width="200" className="rounded-circle ml-5 img-fluid mb-2" src={profile.avatar_url} /></h2></div>
              <div><h2>Email: {profile.email}</h2></div>
              <div><h2>Company: {profile.company}</h2></div>
              <div><h2>Website: {profile.blog}</h2></div>
              <div><h2>Location: {profile.location}</h2></div>
    </Slider>
  );
}