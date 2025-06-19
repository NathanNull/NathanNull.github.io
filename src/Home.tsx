import { JSX, useState } from 'react';
import './Home.css';
import banana from './assets/banana.webp';
import orange from './assets/orange.jpg';
import isThumbnail from './assets/item-signout-thumbnail.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import { useNavigate } from 'react-router-dom';

function ProjectCard({ title, link, children }: { title: string, link: ()=>any, children: JSX.Element[] | JSX.Element }) {
  return <div style={styles.card} onClick={link}>
    {title}
    {children}
  </div>
}

export default function Home() {
  const [swiperSlides, setSwiperSlides] = useState(3);
  const slides: { name: string, img: string, link: string }[] = [{
    name: "Item Signout App",
    link: "/itemsignout",
    img: isThumbnail
  }, {
    name: "Banana #2",
    link: "/home",
    img: banana
  }, {
    name: "Banana #3",
    link: "/home",
    img: banana
  }, {
    name: "Orange you glad I didn't say banana",
    link: "/home",
    img: orange
  },{
    name: "jk banana #4",
    link: "/home",
    img: banana
  }];
  const resize = () => {
    let expectedSlides = window.screen.availWidth / window.screen.availHeight < 1 ? 1 : 3;
    if (swiperSlides !== expectedSlides) {
      setSwiperSlides(expectedSlides)
    }
  };
  resize();
  window.onresize = resize;
  const navigate = useNavigate();
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
        {slides.map(({name, img, link}) => <SwiperSlide>
          <ProjectCard title={name} link={()=>navigate(link)}>
            <img src={img} alt={name+" thumbnail"}/>
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