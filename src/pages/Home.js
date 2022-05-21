import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Props from '../components/props'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
      <FadeInSection>
      <SearchForm />
       </FadeInSection>
            <Props />
        </main>
   </>
  )
}
