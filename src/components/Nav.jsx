import './Nav.css'

function Nav({setPage, page}) {
  return (
    <nav>
      <ul className="nav-links">
        <li className={page==="home"?"active":""} onClick={() => setPage("home")}>Home</li>
        <li className={page==="about"?"active":""} onClick={() => setPage("about")}>About</li>
        <li className={page==="contact"?"active":""} onClick={() => setPage("contact")}>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav





