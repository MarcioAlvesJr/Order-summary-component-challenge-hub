const Wrapper = ({children})=> <div className="pattern-background-desktop bg-no-repeat bg-indigo-100">{children}</div>
const HeroIlustration = ()=><div className="illustration-hero"></div>
const Card = ({children})=><div className="h-fit bg-white p-10 border rounded-xl drop-shadow-2xl">{children}</div>

function App() {
  return (
    <Wrapper>
      <div className="container m-auto min-h-screen flex justify-center items-center">
        <Card>
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

        </Card>
      </div>  
    </Wrapper>
  );
}

export default App;
