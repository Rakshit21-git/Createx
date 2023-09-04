import React from 'react';
import "./FashionBlog.css"

const FashionBlog = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <h3 className='fw-bold'>Fashion blog</h3>
                        <button className='btn ViewBlogBtn'>View blog</button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
                    <div className="col-6">
                        <div className="card h-100">
                            <img src="./Assests/Images/blog1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bag Trends for Summer 2020</h5>
                                <p className="card-text text-muted">Fashion | August 24,2020 | <i class="fa-regular fa-comments"></i> No comments</p>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit illum repellat necessitatibus aut, adipisci ipsum, id pariatur a animi magnam eius veniam doloremque, impedit maiores ratione fuga delectus? Est ratione voluptas eius id asperiores adipisci, perspiciatis voluptatem in fugit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-100">
                            <img src="./Assests/Images/Blog2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Top 10 of This Season's Hottest Sneakers</h5>
                                <p className="card-text text-muted">Lifestyle | July 16,2020 | <i class="fa-regular fa-comments"></i> 4 comments</p>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nobis. Ipsa sit saepe reiciendis eveniet molestiae odit quae tenetur aperiam ratione facere? Quam quae cum molestiae sit in fugit? Id.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}

export default FashionBlog;
