import './Support.css';

function Support() {
   return (
    <section className="py-3 py-sm-3 py-md-3 py-lg-3 py-xl-4 py-xxl-12 col-xl-12">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 query mt-3 mb-3 box">
                <div className="text-center">
                    <h2>Whether You Have a Question or Want to Leave a Review</h2>
                    <p className="lead">
                        Fill out the form to contact us directly...
                    </p>
                </div>
                <form>
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text">
                            <i className="bi bi-person-fill text-secondary"></i>
                        </span>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="e.g. Mario"
                        />
                    </div>
                    <label htmlFor="subject" className="form-label">
                        Are you submitting a review or asking a question?
                    </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text">
                            <i className="bi bi-chat-right-dots-fill text-secondary"></i>
                        </span>
                        <select className="form-select" id="subject" defaultValue="pricing">
                            <option value="pricing">Question</option>
                            <option value="content">Review</option>
                        </select>
                    </div>
                    <div className="mb-4 mt-5 form-floating">
                        <textarea
                            className="form-control"
                            id="query"
                            style={{ height: '140px' }}
                            placeholder="Your query..."
                        ></textarea>
                        <label htmlFor="query">Your query...</label>
                    </div>

                    <div className="mb-4 text-center">
                        <button type="submit" className="btn button-submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="list-group box">
                    <div className="list-group-item py-3">
                        <h5 className="mb-1">What types of games are available at your gaming center?</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <h5 className="mb-1">What are your operating hours and do you offer any special events or tournaments?</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <h5 className="mb-1">Do you have food and beverage options on-site?</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <h5 className="mb-1">Is there a tutorial or assistance for new gamers?</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <h5 className="mb-1">What is the maximum time allowed for using a gaming device?</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="text-center">
                    <h2>Top Reviews</h2>
                </div>
                <div className="list-group box">
                    <div className="list-group-item py-3">
                        <div className="pb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="mb-1">Awesome Variety!</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <div className="pb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="mb-1">Amazing Staff!</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <div className="pb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <h5 className="mb-1">Excellent Community Atmosphere!</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <div className="pb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="mb-1">Awesome for College Students!</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                    <div className="list-group-item py-3">
                        <div className="pb-2">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <h5 className="mb-1">Ideal for Student Events!</h5>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   );
  
}

export default Support;