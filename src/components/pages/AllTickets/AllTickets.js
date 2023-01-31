import './tickets.scss'
import { customer } from '../../../data'
import menu from '../../../assets/images/menu.svg'
import { useRef } from 'react'

export const AllTickets = () => {
  const link = useRef()

  return (
    <>
      <div className="tickets">
        <div className="tickets__titlebox">
          <h3 className="tickets__title">
            All tickets
          </h3>
          <div className="sort-box">
            <a href='#' className="sort-box__text sort">Sort</a>
            <a href='#' className="sort-box__text filter">Filter</a>
          </div>
        </div>

        <div className='details'>
          <p className='tickets__text ticket-details'>Ticket details</p>
          <div className='tickets__text details__box'>
            <p className='tickets__text name'>Customer name</p>
            <p className='tickets__text' style={{'marginLeft': '230px', 'marginRight': '125px'}}>Date</p>
            <p className='tickets__text' style={{'marginRight': '45px'}}>Priority</p>
          </div>
        </div>
        <ul className='tickets__list'>
          {
            customer.map((item) => {
              return (
                <li key={item.id} className='tickets__item'>
                  <div className='item__photo'>
                    <img src={item.photo} width='44px' height='44px' />
                    <div className='names'>
                      <p className='text-primary'>
                        {item.name}
                      </p>
                      <p className='text-secondary'>
                        {item.updates}
                      </p>
                    </div>
                  </div>

                  <div className='who'>
                    <p className='text-primary'>{item.name}</p>
                    <p className='text-secondary'>{item.ticket_time}</p>
                  </div>

                  <div className='bombom'>
                    <div className='date'>
                      <p className='text-primary'>{item.time[0]?.date}</p>
                      <p className='text-secondary'>{item.time[0]?.time}</p>
                    </div>
                    <a className={item.priority_class} href='#'>{item.priority}</a>
                    <a ref={link} className='menu' href='#'>
                      <img src={menu}/>
                    </a>

                  </div>
                </li>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}