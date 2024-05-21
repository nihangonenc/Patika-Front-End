import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2 style={{color: "#325492"}}>CONTACT US</h2>
        <div className="shadow"></div>
        <p style={{fontSize: "1.2rem", paddingTop: "2rem"}}>
          Lorem ipsum is not simply random text. It has roots in a piece of
          classical at <br />
          Hampden-Sydney College
        </p>
      </div>
      <div className="contact-us">
        <div className="phone">
          <div className="email">
            <div>
              <p>Mobile Number<br /></p>
              <p style={{fontSize: "1rem"}}>+135 773 321 4442</p>
            </div>
            <div>
              <p>Email Address<br /></p>
              <p style={{fontSize: "1rem"}}>demo@demo.com</p>
            </div>
          </div>

          <div className="appointment">
            <p>Make An Appointment</p>
            <form action="" className="form">
              <input type="text" placeholder="Your Name" />
              <input type="email" name="" id="" placeholder="Your Email" />
              <textarea
                placeholder="Your Message"
                name=""
                id=""
                cols="40"
                rows="7"
              ></textarea>
            </form>
          </div>
        </div>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4664.782948141815!2d-122.40300853158006!3d37.785693787327695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d623572e7%3A0xc87ca0dcbc7559fd!2sSan%20Francisco%20Modern%20Sanatlar%20M%C3%BCzesi!5e0!3m2!1str!2str!4v1713962808200!5m2!1str!2str"
            width="400rem"
            height="350rem"
            style={{border: "0"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
   
  )
}

export default Contact
