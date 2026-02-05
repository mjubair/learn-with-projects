import Card from './components/card'
import Avatar from './components/avatar.tsx'
import avatar from './assets/profile.png'

function App() {

  return (
    <div className="flex justify-center items-center">
      <Card>
        <Avatar imageUrl={avatar} />
        <h2 className="text-2xl font-bold mt-4">Sarah Dole</h2>
        <p className="text-gray-600 mt-2">Front End Engineer @ Microsoft</p>
        <p className="text-gray-600 mt-2">I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact me</button>
        
      </Card>

      {/* 
      Sarah Dole
      Front End Engineer @ Microsoft
      I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
      Contact me
      */}
    </div>
  )
}

export default App
