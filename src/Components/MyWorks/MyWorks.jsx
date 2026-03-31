import React from 'react'
import './MyWorks.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWorks = () => {
  return (
    <div id="myworks" className='myworks'>
        <div className="myworks-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=""/>
        </div>

        <div className="myworks-container">
          {
            mywork_data.map((m, index)=>{
              return <div className="myworks-format" key={index}>
                <img src={m.w_img}/>
              </div>
            })
          }
        </div>

        <div className="myworks-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt=""/>
        </div>
    </div>
  )
}

export default MyWorks