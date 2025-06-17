export default function Navbar() {
  return <div style={styles.navbar}>Navbar</div>;
}

const styles: { [n: string]: React.CSSProperties } = {
  navbar: {
    width: 'calc(100%-10)',
    height: '7vh',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
};