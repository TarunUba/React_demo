import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Slider from "react-animated-slider";
var header = document.getElementById('header');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}


export default function SearchForm() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)
  
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    header = document.getElementById('header');
    window.addEventListener('scroll', scrollHandler);
    console.log(header);
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
      <div className='section-center-slid' id="header">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <div class="row" style={{backgroundColor:"#f893a4"}}>
                <div class="col-10">
                  <img src={image} alt={name} className='person-img-slid' />
                </div> 
                 <div class="col" >
                <div className= "top-right">
                  <div className="slider-content inner">
              <h4>{name}</h4>
              <p className='title-slid'>{title}</p>
              <p >{quote}</p>
              </div>
                </div>
               </div>
              </div>
            </article>
          )
        })}
        <button className='prev-slid' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next-slid' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
  )
}


