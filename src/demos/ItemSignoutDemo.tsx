import { JSX, useState } from 'react';
import img1 from "../assets/item-signout-img1.png";
import img2 from "../assets/item-signout-img2.png";
import img3 from "../assets/item-signout-img3.png";
import img4 from "../assets/item-signout-img4.png";
import { AppStoreButton } from 'react-mobile-app-button';

function ImageCard({ title, children }: { title: string, children: JSX.Element[] | JSX.Element }) {
  return <div style={styles.card}>
    {title}
    {children}
  </div>
}

export default function ImageSignoutDemo() {
  const [swiperSlides, setSwiperSlides] = useState(3);
  const slides: { name: string, img: string }[] = [{
    name: "Set up Lists",
    img: img3
  }, {
    name: "Create Items",
    img: img4
  }, {
    name: "Customize your Account",
    img: img1
  }, {
    name: "Add Friends",
    img: img2
  },];
  const resize = () => {
    let expectedSlides = window.screen.availWidth / window.screen.availHeight < 1 ? 1 : 3;
    if (swiperSlides !== expectedSlides) {
      setSwiperSlides(expectedSlides)
    }
  };
  resize();
  window.onresize = resize;
  return (
    <div style={styles.appBody}>
      <div>
        <h2>
          ItemSignout App
        </h2>
        <h6>Track all the things</h6>
      </div>
      <AppStoreButton url="https://apps.apple.com/us/app/item-signout/id6572287720" theme='dark' title='Get ItemSignout on the' />
      <div style={styles.imageGrid}>
        {slides.map(({ name, img }) =>
          <ImageCard title={name} key={img}>
            <img src={img} alt={name + " image"} style={{ width: '100%' }} />
          </ImageCard>
        )}
      </div>
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
    padding: 20,
    display: "flex",
    flexDirection: 'column',
    margin: 10,
  },
  link: {
    color: '#9DC1FF'
  },
  imageGrid: {
    display: 'grid',
    width: '75vw',
    gridTemplateColumns: '50% 50%',
  }
}