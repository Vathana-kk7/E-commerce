import { useState } from "react";

const testimonials = [
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Annette Black",
    role: "Architecture",
  },
  {
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Cameron Williamson",
    role: "Interior Designer",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    name: "Sophie Laurent",
    role: "Architect",
  },
];

export default function Register() {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family: Arial, sans-serif;
        }

        .container{
          min-height:100vh;
          background:#1f1f1f;
          padding:20px;
        }

        .wrapper{
          background:#f8f8f8;
          border-radius:20px;
          display:flex;
          gap:30px;
          padding:25px;
        }

        /* LEFT */
        .left{
          width:45%;
          padding:20px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
          margin-bottom:50px;
        }

        .logo-circle{
          width:40px;
          height:40px;
          border-radius:50%;
          background:#003b22;
          color:#ffd54f;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:bold;
        }

        .sub-text{
          color:#777;
          font-size:14px;
          margin-bottom:30px;
          line-height:1.6;
        }

        .row{
          display:flex;
          gap:15px;
        }

        .input-group{
          width:100%;
          margin-bottom:20px;
        }

        .input-group label{
          display:block;
          margin-bottom:8px;
          font-weight:bold;
          font-size:14px;
        }

        .input{
          width:100%;
          padding:14px;
          border-radius:30px;
          border:1px solid #ccc;
          outline:none;
          font-size:14px;
        }

        .checkbox{
          display:flex;
          align-items:center;
          gap:10px;
          margin-bottom:25px;
          font-size:14px;
          color:#444;
        }

        .btn{
          width:100%;
          padding:15px;
          border:none;
          border-radius:30px;
          background:#004225;
          color:white;
          font-size:16px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .btn:hover{
          background:#016637;
        }

        .divider{
          display:flex;
          align-items:center;
          gap:15px;
          margin:25px 0;
        }

        .line{
          flex:1;
          height:1px;
          background:#ccc;
        }

        .google-btn{
          width:100%;
          padding:14px;
          border-radius:30px;
          border:1px solid #ccc;
          background:white;
          font-weight:bold;
          cursor:pointer;
        }

        .signin{
          text-align:center;
          margin-top:20px;
          font-size:14px;
        }

        .signin span{
          font-weight:bold;
          text-decoration:underline;
          cursor:pointer;
        }

        /* RIGHT */
        .right{
          width:55%;
          position:relative;
        }

        .right img{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:20px;
        }

        .card{
          position:absolute;
          left:20px;
          right:20px;
          bottom:20px;
          background:rgba(255,255,255,0.2);
          backdrop-filter:blur(10px);
          padding:20px;
          border-radius:20px;
          color:white;
        }

        .quote{
          line-height:1.7;
          margin-bottom:15px;
        }

        .role{
          color:#ddd;
          margin-top:5px;
        }

        .dots{
          display:flex;
          gap:10px;
          margin-top:20px;
        }

        .dot{
          height:5px;
          border-radius:10px;
          cursor:pointer;
          background:#777;
          transition:0.3s;
        }

        .dot.active{
          width:80px;
          background:#f4b942;
        }

        .dot.normal{
          width:50px;
        }

        /* TABLET */
        @media(max-width:992px){

          .wrapper{
            flex-direction:column;
          }

          .left,
          .right{
            width:100%;
          }

          .right{
            height:500px;
          }
        }

        /* MOBILE */
        @media(max-width:600px){

          .container{
            padding:10px;
          }

          .wrapper{
            padding:15px;
            gap:20px;
          }

          .left{
            padding:10px;
          }

          .logo{
            margin-bottom:30px;
          }

          .row{
            flex-direction:column;
            gap:0;
          }

          .card{
            left:10px;
            right:10px;
            bottom:10px;
            padding:15px;
          }

          .quote{
            font-size:14px;
          }

          .dot.active{
            width:50px;
          }

          .dot.normal{
            width:30px;
          }
        }
      `}</style>

      <div className="container">
        <div className="wrapper">

          {/* LEFT */}
          <div className="left">

            {/* LOGO */}
            <div className="logo">
              <div className="logo-circle">F</div>
              <h2>Furniture</h2>
            </div>

            <p className="sub-text">
              Fill your information below or register with your social account.
            </p>

            {/* NAME */}
            <div className="row">

              <div className="input-group">
                <label>First Name *</label>

                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input"
                />
              </div>

              <div className="input-group">
                <label>Last Name *</label>

                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="input"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="input-group">
              <label>Email *</label>

              <input
                type="email"
                placeholder="Enter Email Address"
                className="input"
              />
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password *</label>

              <input
                type="password"
                placeholder="Enter Password"
                className="input"
              />
            </div>

            {/* CHECKBOX */}
            <div className="checkbox">
              <input type="checkbox" />

              <p>
                Agree with <b>Terms & Condition</b> and{" "}
                <b>Privacy Policy</b>
              </p>
            </div>

            {/* BUTTON */}
            <button className="btn">
              Sign Up
            </button>

            {/* DIVIDER */}
            <div className="divider">
              <div className="line"></div>

              <span>or Sign Up with</span>

              <div className="line"></div>
            </div>

            {/* GOOGLE */}
            <button className="google-btn">
              Sign Up With Google
            </button>

            {/* SIGN IN */}
            <p className="signin">
              Already have an account? <span>Sign In</span>
            </p>

          </div>

          {/* RIGHT */}
          <div className="right">

            <img
              src="https://i1-e.pinimg.com/webp/1200x/4f/4d/3d/4f4d3da02dcdb6e674f6686187484287.webp"
              alt="Furniture"
            />

            {/* CARD */}
            <div className="card">

              <p className="quote">
                "{testimonials[slide].quote}"
              </p>

              <h3>{testimonials[slide].name}</h3>

              <p className="role">
                {testimonials[slide].role}
              </p>

              {/* DOTS */}
              <div className="dots">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`dot ${
                      slide === i ? "active" : "normal"
                    }`}
                  ></div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}