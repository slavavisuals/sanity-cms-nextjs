import Navbar from './Navbar';
export default function PageLayout({ children }) {
  return (
    <>
      <div className='bg-[#f8f8f8]'>
        <Navbar />
        {children}
        <footer>
          <div>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
          </div>
        </footer>
      </div>
    </>
  );
}
