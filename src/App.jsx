import React from 'react'

function App() {

  let data =[{
    title: "Project One",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  },
  {
    title: "Project Two",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  },
  {
    title: "Project Three",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  },
  {
    title: "Project four",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  },
  {
    title: "Project Five",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  },
  {
    title: "Project Six",
    Description:"Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish."
  }]
 
  return<>
   
  
<div className="container">

  
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
  {
    data.map((e,i)=>{
      return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="" /></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{e.title}</a>
        </h4>
        <p className="card-text">{e.Description}</p>
      </div>
    </div>
  </div>})
  }
  
  
    </div>
    
  </div>
  </>


    
  
}

export default App