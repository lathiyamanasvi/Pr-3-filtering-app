import React, { useState } from 'react'
function Data({ allrecorddata, btnclick, setAllrecord }) {
    const category = ["cloth", "watch", "accessories", "shoes", "all"];
    return (
        <center>
            <h1>Food Filtering App</h1>
            {
                category.map((cat, i) => {
                    return (
                        <button onClick={() => btnclick(cat)} key={i} style={{ margin: "20px" }} class="btn btn-outline-warning">{cat}</button>
                    )
                })
            }
            <br></br><br></br>


            {
                allrecorddata.map((item) =>
                    <div className="container">
                        <div className="card mb-3" style={{ width: "100%", border:"none!important",backgroundColor:"#fafafa"}} key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-4" >
                                    <img src={item.img} style={{width:"200px", height:"100%"}}className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 p-3">
                                    <div className="card-body">
                                        <p className="card-title d-flex justify-content-between">
                                            <div className='fs-2 fw-bold'>
                                                {item.Name}
                                            </div>
                                            <div className="fs-3 fw-normals" style={{color:"#FDD017"}}>
                                                {item.price}
                                            </div>
                                        </p>
                                        
                                        <hr/>
                                        <p className="card-text fs-5" style={{color:"#4682B4"}}>{item.decs}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </center >
    )
}
export default Data;