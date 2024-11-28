import { Outlet, NavLink } from "react-router-dom";
import "./LayoutDefault.css"

function LayoutDefault() {

  const navLinkActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  }
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Logo</div>
          <div className="menu">
            <ul>
              <li>
                {/* thẻ link giống thẻ a với href nm ko làm load lại trang */}
                <NavLink to="/" className={navLinkActive}>Home</NavLink>
              </li>
              <li>
                {/* Thẻ navLink giống thẻ link nhưng dc cái thêm dc class active */}
                <NavLink to="/about" className={navLinkActive}>About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkActive}>Contact</NavLink>
              </li>
              <li className="blog">
                <NavLink to="/blog" className={navLinkActive}>Blog</NavLink>
                {/* tao cac trang con cua blog */}
                <ul className="menu__sub">
                  <li>
                    <NavLink to="/blog/news" className={navLinkActive}>Blog News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog/related" className={navLinkActive}>Blog Related</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default__main">
          {/* outlet dc dung như là cờ đánh dấu nơi muốn hiển thị cho các components con */}
          <Outlet />
        </main>
        <footer className="layout-default__footer">
          copyright @Khoahii.
        </footer>
      </div>
    </>
  )
}

export default LayoutDefault;