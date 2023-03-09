export const Footer = () => {
  return(
    <div className='main-color'>
      <footer className='containter d-flex flex-wrap justify-content-between align-items-center py-5 main-color'>
        <p className='col-md-4 mb-0 text-white'>© Library App, Inc</p>
        <ul>
          <li className='nav-item'>
            <a className='nav-link px-2 text-white' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link px-2 text-white' href='#'>
              Search Books
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}