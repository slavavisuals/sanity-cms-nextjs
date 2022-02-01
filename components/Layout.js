import Navbar from "./Navbar"
export default function PageLayout({children}) {
  return (
    <>
      <div className="test-class">
        <Navbar />
        {children}
        <footer>
          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </footer>
      </div>
    </>
  )
}