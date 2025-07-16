import React from "react";
 import * as z from "zod/v4";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { useForm } from "react-hook-form";
function Contact() {
 const ContactSchema = z.object({
  name: z.string().max(15,"Name should be less than 15 characters").min(3,"Name should be at least 3 characters"),
  email: z.email( "Invalid email address").min(1, "Email is required"),
  message: z.string().max(200, "Message should be less than 200 characters").min(1, "Message is required"),
 });


  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm(
    {
      resolver: zodResolver(ContactSchema),
      mode: "onBlur",
    }
  );

 
 
 
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
              {touchedFields.name && errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

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
              {touchedFields.email &&errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
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
              {touchedFields.message && errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}
              <hr style={{ color: "white" }} />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
    </div>
  );
};
export default Contact;