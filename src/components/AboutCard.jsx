import { useState } from 'react'
import { HelpCircle, GripVertical } from 'lucide-react'

const AboutCard = () => {
  const [activeTab, setActiveTab] = useState('About Me')
  const tabs = ['About Me', 'Experiences', 'Recommended']
  return (
    <div>
      <div className="bg-[#4A4E54] card rounded-2xl py-3 px-5 mr-8 relative">
        <div className="absolute left-2 top-0 bottom-24 flex flex-col items-center justify-between pt-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <HelpCircle className="text-[#8E8E93]" size={22} />
          </div>
          <GripVertical className="text-[#8E8E93]" size={28} />
        </div>
        <div className="ml-8">
          <div className="flex justify-evenly p-2 bg-[#000] rounded-xl mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 w-full rounded-xl text-md transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#393838] text-white active'
                    : 'text-[#8E8E93]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-[#8E8E93] text-md h-40 overflow-y-auto pr-4 custom-scrollbar">
            Hello! Im Dave, your sales rep here from Salesforce. Ive been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY & have been living in
            Santa Clara for the past 10 years my wife Tiffany and my 4 year old
            twin daughters - Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM. This is
            a...
            <br />I was born and raised in Albany, NY & have been living in
            Santa Clara for the past 10 years my wife Tiffany and my 4 year old
            twin daughters - Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM. This is
            a...
            <br />I was born and raised in Albany, NY & have been living in
            Santa Clara for the past 10 years my wife Tiffany and my 4 year old
            twin daughters - Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM. This is
            a...
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
