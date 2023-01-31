import './header.scss'
import Search from '../../assets/images/search.svg'
import Dong from '../../assets/images/dingdong.svg'
import Photo from '../../assets/images/photo.svg'

export const Header = () => {


  return (
    <>
      <header className='site-header'>
        <h2 className='site-header__title'>
          Tickets
        </h2>

        <div style={{'display': 'flex', 'marginLeft': 'auto'}}>
          <div className='others'>
            <a href='#' style={{'marginRight': '26px'}}>
              <img src={Search} />
            </a>
            <a href='#'>
              <img src={Dong} />
            </a>
          </div>

          <div className='login-box'>
            <p className='login__name'>
              Jones Ferdinand
            </p>
            <img src={Photo}/>
          </div>
        </div>
      </header>
    </>
  )
}