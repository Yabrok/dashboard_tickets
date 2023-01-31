import './aside.scss'
import Logo from '../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
export const Aside = () => {
  return (
    <>
      <aside className='site-aside'>
        <a className='logo' href='#'>
          <img src={Logo} />
        </a>

        <nav className='navbar'>
          <ul className='navbar__list'>
            <li className='navbar__item'>
              <a className='navbar__link' href='#'>
                Overview
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Tickets' href='#'>
                Tickets
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Ideas' href='#'>
                Ideas
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Contacts' href='#'>
                Contacts
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Agents' href='#'>
                Agents
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Articles' href='#'>
                Articles
              </a>
            </li>
          </ul>

          <ul className='navbar__list' style={{ 'paddingTop': '36px' }}>
            <li className='navbar__item'>
              <a className='navbar__link Settings' href='#'>
                Settings
              </a>
            </li>

            <li className='navbar__item'>
              <a className='navbar__link Subscription' href='#'>
                Subscription
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}