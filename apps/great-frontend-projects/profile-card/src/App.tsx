import Card from './components/card'
import Avatar from './components/avatar.tsx'
import avatar from './assets/profile.png'
import { RiGithubFill, RiLinkedinFill, RiInstagramFill, RiXboxFill } from "@remixicon/react";

function App() {

  return (
			<div className="flex justify-center items-center">
				<Card className="flex flex-col items-center">
					<Avatar imageUrl={avatar} />
					<h2 className="text-[20px] font-bold mt-8">Sarah Dole</h2>
					<p className="text-gray-600 mt-1">Front End Engineer @ Microsoft</p>
					<p className="text-gray-600 mt-8 text-center">
						I turn coffee into bugs which are fixed by someone else. Certified
						Stack Overflow and ChatGPT developer.
					</p>
					<button
						type="button"
						className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Contact me
					</button>
					<div className="flex gap-9 mt-6">
						<RiGithubFill className="w-5 h-5 mt-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
						<RiLinkedinFill className="w-5 h-5 mt-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
						<RiInstagramFill className="w-5 h-5 mt-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
						<RiXboxFill className="w-5 h-5 mt-4 text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
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
