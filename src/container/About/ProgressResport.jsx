import React from 'react'


const ProgressResport = () => {

    const progress=[
      
        {
            logo:<i className='lnr lnr-clock'></i>,
            report:'Projects Worked',
            total:'5+'
        },
        {
            logo:<i className='fas fa-network-wired'></i>,
            report:'Experience',
            total:'1 Years'
        }
        
    ]
  return (
    <div className="progress-container">
        <h2 className='report-heading'>Progress <span className='h3'>Report</span></h2>
        <div className="reports">
            {progress.map((items, index)=>(
                 <div
                 key={index}
                 className="report-item">
                    <div className='report-icons'>{items.logo}</div>
                    <p className='report-name'>{items.report}</p>
                    <p className='totals'>{items.total}</p>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default ProgressResport
