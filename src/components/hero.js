import React from "react"
import "../styles/hero.css"


export default function Hero() {
  return (
      <div className="hero">
          <h1 className="hero-text">
              Welcome to my comicsblog!<br />
              Enjoy lots of posts!<br />
          </h1>
          <div className="hero-author">
              <img src="https://user-images.githubusercontent.com/75874607/109409115-33db4300-79d3-11eb-9b34-ffa498b5644c.png"
                   className="hero-author-image" alt="avatar"></img>
              <p className="hero-author-text">
                  Written by ChiYo<br />
                  Biginner Engineer. Love comics.
              </p>
          </div>
      </div>
  )
}