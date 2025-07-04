import React from "react";

function Contact() {
  return (
    <div>
      <form className="row g-3 w-50 mt-4">
        <div className="col-md-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="inputEmail4"
                required
              />
            </div>
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
  );
};
export default Contact;