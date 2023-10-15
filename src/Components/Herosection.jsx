const Hero = () => {
    return (
        <main className="hero flex h-[40 rem] justify-items-center  ">

            <div className="hero-content pt-8 ml-60 w-2/5">
            <h1 className="font-bold text-8xl px-6 hover:text-cyan-400">YOUR FEET DESERVE THE <span className="text-cyan-400 ">BEST</span>! </h1>
                <p className="font-medium px-6 py-8 text-1.8xl">
                    Your feet deserve the best and we are here to help you with our shoes .
                    Your feet deserve the best and we are here to help you with our shoes .
                </p>
                <div className="hero-btn space-x-2  px-6 pt-6 ">
                    <button className="px-2.5 py-1 bg-cyan-300 text-black-600 rounded-md border-2 font-bold border-black hover:bg-white hover:text-cyan-300 hover:border-cyan-300">Shop Now</button>
                    <button className="px-2.5 py-1 bg-white text-cyan-300 rounded-md border-2 font-bold border-cyan-300 hover:bg-cyan-300 hover:text-black hover:border-black">Category</button>
                </div>

                <div className="shopping  px-6 ">
                    <p className="m-2" >Also Available On</p>
                    <div className="brand-icons flex">
                    <a href="https://www.amazon.com/" target="_blank"> <img  className="m-1.5" src="images/amazon.png" alt='amozon-logo' ></img></a>
                    <a href="https://www.flipkart.com/" target="_blank"> <img  className="m-1.5" src="images/flipkart.png" alt='flipkart-logo' ></img></a>
                    </div>
                </div>

            </div>

            <div className="hero-image  pt-12 ">
                <img src="images/hero-image.jpg" alt="hero-image"></img>
            </div>
        </main>
    );
};
export default Hero;