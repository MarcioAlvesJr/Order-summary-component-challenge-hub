import HeroIlustrationImg from './images/illustration-hero.svg'
import IconMusicImg from './images/icon-music.svg'


const HeroIlustration = ()=><img className='w-full' src={HeroIlustrationImg} alt="illustration-hero"></img>
const IconMusic = ()=><img className='' src={IconMusicImg} alt="icon-music"></img>

const Wrapper = ({children})=> <div className="pattern-background-desktop bg-no-repeat bg-cover bg-center bg-indigo-100">{children}</div>
const Card = ({children})=><div className="overflow-hidden max-w-sm h-fit bg-white border rounded-xl drop-shadow-2xl">{children}</div>
const InfoWrapper = ({children})=><div className='p-10 flex flex-col justify-center text-center'>{children}</div>
const PlanInfo = ({children})=><div className='flex justify-between gap-3 bg-indigo-50 p-4 rounded-lg my-4 '>{children}</div>


function App() {
  return (
    <Wrapper>
      <div className="container m-auto min-h-screen flex justify-center items-center">
        <Card>
          <HeroIlustration/>
          <InfoWrapper>
            <h1 className="font-bold text-2xl text-Dark-blue mb-2">Order Summary</h1>
            <p className="text-gray-600">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

            <PlanInfo>
              <div className="flex gap-3 ">
                <IconMusic/>
                <div>
                  <h2 className="font-bold ">Annual Plan</h2>
                  <p className="text-gray-600">$59.99/year</p>
                </div>
              </div>
              <button className="underline decoration-solid text-Bright-blue">Change</button>
            </PlanInfo>

            <button className="font-bold bg-Bright-blue text-white rounded-lg p-2 drop-shadow-xl">Proceed to Payment</button>
            <button className=' font-bold mt-4 text-gray-500'>Cancel Order</button>
          </InfoWrapper>
        </Card>
      </div>  
    </Wrapper>
  );
}

export default App;
