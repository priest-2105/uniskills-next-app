import config, { HOMEPAGE } from "@/config";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
	const goBack = () => {
		window.history.back();
	};

	return (
		<div class="container .error500">
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/uni-favicon.ico"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
				></link>

				<style>{`   
    .container {
        background-image: url("/img/error404.svg");
      }    
      
  .top {
    width: 100%;
    padding: 20px 0 0 20px;
  }
  
  .top img {
    height: 37px;
  }
  
  .container {
    height: 90vh;
    background-size: 80% 80%;
    background-position: 50% 20%;
    background-repeat: no-repeat;
  }
  
  .text-container {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 700px;
    padding: 30px 0;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .body-text {
    animation-name: text-animation;
    animation-duration: 1.5s;
    transition-timing-function: ease-in-out;
    height: 100%;
    width: 10px;
  }
  
  .body-text h2 {
    font-weight: 100;
    margin-bottom: 10px;
    font-weight: 500;
  }
  
  .body-text a {
    text-decoration: none;
    color: RGB(0, 115, 177);
  }
  
  .body-text .button {
    border: 1px solid rgba(0, 115, 177);
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    margin-top: 1000px;
    margin: auto;
    margin-top: 20px;
    padding: 10px 0;
    width: 150px;
    background-color: transparent;
    color: RGB(0, 115, 177);
    transition: 0.3s;
  }
  
  .body-text .button:hover {
    background-color: rgba(0, 115, 177);
    color: #fff;
  }
  
  /* img {
    position: absolute;
  }
  
  .bottle {
    height: 180px;
    width: 250px;
    left: 37%;
    top: 10%;
  }
  
  .water {
    height: 90px;
    width: 150px;
    position: absolute;
    top: 65%;
    left: 35%;
  } */
  
  @keyframes text-animation {
    from {
      width: 1%;
      opacity: 0;
    }
    to {
      width: 70%;
      opacity: 1;
    }
  }
  
  
    `}</style>
			</Head>

			{/* <img src="./Untitled-design-10-unscreen.gif" class="bottle" alt=""/>  */}

			<div class="body-text">
				<div class="text-container">
					<h2> Internal server error</h2>
					<p> Uh oh, we can’t seem to find the page you’re looking for.</p>
					<a class="button" href={`${HOMEPAGE}`}>
						Go to Homepage
					</a>
					<button className="button ms-4" onClick={goBack}>
						Go Back
					</button>
				</div>
			</div>
			{/* <!-- <img src="./Untitled-design-9-unscreen.gif" class="water" alt=""> --> */}
		</div>
	);
}
