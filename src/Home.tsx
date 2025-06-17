import { JSX, useState } from 'react';
import './Home.css';
import banana from './banana.webp';
import orange from './orange.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

function ProjectCard({ title, children }: { title: string, children: JSX.Element[] | JSX.Element }) {
  return <div style={styles.card}>
    {title}
    {children}
  </div>
}

export default function Home() {
  const [swiperSlides, setSwiperSlides] = useState(3);
  const slides: { name: string, img: string }[] = [{
    name: "Banana #1",
    img: banana
  }, {
    name: "Banana #2",
    img: banana
  }, {
    name: "Banana #3",
    img: banana
  }, {
    name: "Orange you glad I didn't say banana",
    img: orange
  },{
    name: "jk banana #4",
    img: banana
  }];
  const resize = () => {
    let expectedSlides = window.screen.availWidth / window.screen.availHeight < 1 ? 1 : 3;
    if (swiperSlides != expectedSlides) {
      setSwiperSlides(expectedSlides)
    }
  };
  resize();
  window.onresize = resize;
  return (
    <div style={styles.appBody}>
      <div style={styles.appLogo} id="appLogo">Cool app logo or project demo or something goes here<br />Lorem ipsum dolor sit amet</div>
      <h1>
        Nathan Strong: Maker of Various Things
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={swiperSlides}
        style={{ width: '95vw' }}
        loop={true}
        loopAddBlankSlides={true}
        grabCursor={true}
      >
        {slides.map(({name, img}) => <SwiperSlide>
          <ProjectCard title={name}>
            <img src={img}/>
          </ProjectCard>
        </SwiperSlide>)}
      </Swiper>
      <span style={{ ...styles.span, paddingBottom: '2vh' }}>
        Did I tell you about a project that isn't here? It's probably on <a href="https://github.com/NathanNull" style={styles.link}>my GitHub</a>.
      </span>
    </div>
  );
}

const styles: { [n: string]: React.CSSProperties } = {
  appLogo: {
    minHeight: "30vmin",
    maxHeight: "50vmin",
    aspectRatio: 1,
    pointerEvents: "none",
    backgroundColor: '#333333aa',
    margin: '10vmin',
  },
  appBody: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    background: '#6C7283',
    aspectRatio: 1,
    borderRadius: 20,
    padding: '5%',
    display: "flex",
    flexDirection: 'column',
  },
  link: {
    color: '#9DC1FF'
  },
  span: {
    fontSize: 15,
  }
}