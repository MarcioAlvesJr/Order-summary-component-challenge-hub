const HeroIlustration = ()=>{
  return <div className="illustration-hero"></div>
}
const CardWrapper = ({children})=>{
  return <div className="h-fit">{children}</div>
}

function App() {
  return (
    <div className="pattern-background-desktop bg-no-repeat bg-indigo-100">
      <div className="container m-auto min-h-screen flex justify-center items-center">
        <CardWrapper>
          <HeroIlustration/>
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

          <div id="planInfo">
            <i></i>
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
            <button>Change</button>
          </div>

          <button>Proceed to Payment</button>
          <button>Cancel Order</button>

        </CardWrapper>
      </div>  
    </div>
  );
}

export default App;
