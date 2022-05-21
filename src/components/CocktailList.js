import React, { useState } from 'react'
import { render } from 'react-dom'
// import Cocktail from './Cocktail'
// import Loading from './Loading'
// import { useGlobalContext } from '../context'
// import ScriptTag from 'react-script-tag';
import { useGesture } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import './styles.css'
// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(false);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }
const cards = [
  'https://c4.wallpaperflare.com/wallpaper/518/522/397/nature-photography-portrait-display-wallpaper-preview.jpg',
  'https://www.pixinfocus.com/wp-content/uploads/2020/03/Portrait-vs-Landscape-2.jpg',
  'https://www.bwillcreative.com/wp-content/uploads/2020/05/portrait-orientation-zion-national-park.jpg',
  'https://cdn.fstoppers.com/styles/full/s3/photos/2019/02/857ebd7658e56c84a4dc65cc4453a305.jpg?itok=rpCL6_UU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oeqTyuHb-8-7KVeOBjpdyYLG-SOghPn-ng&usqp=CAU',
  'https://wallpaperaccess.com/full/757572.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function CocktailList() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
  )
}
render(<CocktailList />, document.getElementById('rootri'))