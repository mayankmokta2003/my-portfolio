import "./Contact.css"
export default function Contact(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3c1f8cbb-9cb8-4c91-8210-53de4955aa09");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Success", res);
        }
      };


    return(
        <div className="contact" id="contact">
            
            <div className="contact-heading">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-mid">

            <div className="mid-left">
                <h1 className="left-heading">Let's talk</h1>
                <div>
                    <p className="mid-left-text1">I'm currently available to take projects,so feel free to <br />
                        send me a message about anything that you want me to work <br />
                        on. You can contact anytime.
                    </p>
                    </div>

                    <div className="mid-left-end">


                    <a href="https://github.com/mayankmokta2003" className="git">
                    <div className="location-div">
                        <img src="./images/github.png" className="mail-pic"/>
                        <p className="my-mail-text">Github</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/mayank-mokta-b78327331/" className="git">
                    <div className="location-div">
                        <img src="./images/linkedin.png" className="mail-pic"/>
                        <p className="my-mail-text">Linkedin</p>
                        </div>
                    </a>

                        <div className="mail-div">
                        <img src="./images/mail.png" className="mail-pic"/>
                        <p className="my-mail-text">mayankmokta@gmail.com</p>
                        </div>

                        <div className="location-div">
                        <img src="./images/location.png" className="mail-pic"/>
                        <p className="my-mail-text">Shimla, HP</p>
                        </div>
                    
                    </div>
                    

            </div>

            <div className="mid-right">

                <form onSubmit={onSubmit}>

                <div className="mid-right-1">
                    <p>Your Name</p>
                    <input src="text" placeholder="Enter your name" className="name-input"/>
                </div>
                <div className="mid-right-2">
                    <p>Your Email</p>
                    <input src="text" placeholder="Enter your email" className="name-input"/>
                </div>
                <div>
                    <p>Write your message here</p>
                    <input src="comment" placeholder="Enter your message" className="comment-input"/><br/>
                    
                    <div className="submit-btn-div">
                        <p className="submit-btn">Submit now</p>
                        {/* <button className="submit-btn">Submit here</button> */}
                    </div>
                </div>

                </form>

                {/* <form onSubmit={onSubmit}>
                    <label>name</label>
                    <input src="text" placeholder="Enter your name" className="name-input"/>
                    <label>email</label>
                    <input src="text" placeholder="Enter your email" className="name-input"/>
                    <label>comment</label>
                    
                    
                    <textarea placeholder="comment" name="message" rows={10}/>
                    <button type="submit">submit here</button>

                </form> */}


            </div>

            </div>
        </div>
    )
}