import React from "react";
 import * as z from "zod/v4";
import { useForm } from "react-hook-form";
function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
 const Contact = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string()
 });
 
 
 
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
                {...register("name", { required: true })}
              />
              {errors.name && <span style={{ color: "red" }}>This field is required</span>}
            </div>
        
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
              {errors.email && <span style={{ color: "red" }}>This field is required</span>}
            </div>

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
              {errors.message && <span style={{ color: "red" }}>This field is required</span>}
              <hr style={{ color: "white" }} />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
  );
};
export default Contact;