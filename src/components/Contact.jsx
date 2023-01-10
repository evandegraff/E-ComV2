import React from 'react'
import "../components/Contact.css"
import "../components/Global.css"
export function Contact() {
        return (
          
          <div className="container">
            <form action="action_page.php">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." />
        
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
        
              <input type="submit" value="Submit" />
            </form>
          </div>
        )
      }
      
      export default Contact;