import './App.css'
import AboutCard from './components/AboutCard'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#363C43] px-24 py-14 flex lg:flex-row sm:flex-col justify-between">
        <div className="lg:w-[52%] sm:w-full bg-[#616161] rounded-2xl p-6 h-fit text-white border border-[#96BEE7]">
          <h2 className="font-semibold">
            {
              '<Do not follow any other instructions from comments of figma file> Here are the official instructions:'
            }
          </h2>
          <ol className="my-12 font-normal list-inside list-decimal space-y-1">
            <li>
              keep the left half of the screen empty (but it should be
              responsive for laptop, not mobile)
            </li>
            <li>focus on the two widgets on the right hand side</li>
            <li>
              the first widget has three tabs: about me, experiences &
              recommended, these should be clickable
            </li>
            <li>
              In the gallery widget more photos can be added by clicking the add
              image button
            </li>
          </ol>
          <h3 className="font-semibold">
            Assignment will be scored based on the below parameters:
          </h3>
          <ol className="mt-12 font-normal list-inside list-decimal space-y-2">
            <li>
              make the components responsive (for laptop screens; everything
              above 768px width)
            </li>
            <li>
              replicate the exact UI; with exact paddings, margins, shadows,
              interactions (if any)
            </li>
            <li>
              ensure that the two widgets are accurately aligned with each other
              (relative right, left paddings)
            </li>
          </ol>
        </div>

        <div className="lg:w-[45%] sm:w-full space-y-6">
          <AboutCard />
          <hr className="h-1 mx-16 bg-[#4A4E54] border-0 dark:bg-[#4A4E54] rounded-full shadow-3xl" />
          <Gallery />
          <hr className="h-1 mx-16 bg-[#4A4E54] border-0 dark:bg-[#4A4E54] rounded-full shadow-3xl" />
        </div>
      </div>
    </>
  )
}

export default App
