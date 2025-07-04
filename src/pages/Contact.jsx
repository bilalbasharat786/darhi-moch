import React from "react";
import { useForm } from "react-hook-form";
function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    
  };
  return (
    <div className="container">
      <form className="row g-3 w-50 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                required
                {...register("name", { required: "Name is required" })}
              />
            </div>
        {errors.name && <span>{errors.name.message}</span>}
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="inputEmail4"
                required
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div className="col-12">
              <label htmlFor="Message" className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{height:"100px"}}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span>{errors.message.message}</span>}
<hr style={{ color: "white" }} />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
  );
};
export default Contact;