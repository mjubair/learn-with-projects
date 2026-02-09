import Card from './components/card'
import Avatar from './components/avatar.tsx'
import avatar from './assets/profile.png'
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react";

function App() {

  return (
			<div className="flex justify-center items-center">
				<Card className="flex flex-col items-center">
					<Avatar imageUrl={avatar} />
					<h2 className="text-[20px] mt-6">Sarah Dole</h2>
					<p className="text-gray-600 text-sm mt-0.5">
						Front End Engineer @ Microsoft
					</p>
					<p className="text-gray-600 mt-6 text-center text-[16px]">
						I turn coffee into bugs which are fixed by someone else. Certified
						Stack Overflow and ChatGPT developer.
					</p>
					<button
						type="button"
						className="mt-10 flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded text-white text-[16px] hover:bg-indigo-800"
					>
						Contact me
					</button>
					<div className="flex gap-4 mt-6">
						<div className="p-2 text-2xl text-indigo-700 cursor-pointer">
							<RiGithubFill className='w-5 h-5' />
						</div>
						<div className="p-2 text-2xl text-indigo-700 cursor-pointer">
							<RiLinkedinBoxFill className='w-5 h-5' />
						</div>
						<div className="p-2 text-2xl text-indigo-700 cursor-pointer">
							<RiInstagramFill className='w-5 h-5' />
						</div>
						<div className="p-2 text-2xl text-indigo-700 cursor-pointer">
							<RiTwitterXFill className='w-5 h-5' />
						</div>
					</div>
				</Card>

				{/* 
      Sarah Dole
      Front End Engineer @ Microsoft
      I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
      Contact me
      */}
			</div>
		);
}

export default App
