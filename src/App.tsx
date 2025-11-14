import { useState } from 'react'
import Calculator from './components/Calculator'

function App() {
  const [calories,setCalories] = useState(0)

function countCalories(age:number,height:number,weight:number,gender:string,activityLevel:number){
  


  let BMR
  if (gender =='M'){
     BMR = (10*weight)+(6.25*height)-(5*age)+5
     BMR*=activityLevel
  }else if (gender =="F"){
     BMR = (10*weight)+(6.25*height)-(5*age)-161
     BMR *=activityLevel
  }else {
    BMR = 0
  }

  setCalories((prev)=>prev=Math.round(BMR))

  

}


  return (
    <div className="w-full h-screen bg-blue-950 text-white flex flex-col justify-evenly md:justify-center items-center md:flex-row " >
      <div className="w-9/10 md:h-96 md:w-1/3 text-lg">
      {calories == 0?
      <>
      <h1 className='font-bold text-3xl'>Welcome</h1>
      <p>Enter The required information to get started</p>
      </>
      :
      <>
     
      <span className='font-bold text-2xl'>{calories}</span>
      <p>The Minimum Daily Calories You Need.</p>
      </>
      }
      </div>
      <div className="container-calculator w-full md:w-1/3 ">
      <Calculator calorieCounter={countCalories}/>
      </div>
    </div>
  )
}

export default App