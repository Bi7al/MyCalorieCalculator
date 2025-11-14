import type { FormEvent } from "react"

interface Props{
calorieCounter:(age:number,height:number,weight:number,gender:string,activityLevel:number)=>void
}


function Calculator({calorieCounter}:Props) {

    function handleSubmit(event:FormEvent){
        event.preventDefault()
        if (event.currentTarget instanceof HTMLFormElement){

        const formData = new FormData(event.currentTarget)
         const height = formData.get('height')as string |null
         const age=formData.get("age")as string |null
         const weight = formData.get('weight')as string|null
         const gender = formData.get("gender") as string |null
         const activityLevel=formData.get("activity_level") as string | null

          
         if (age  && height && weight && gender && activityLevel){
          calorieCounter(Number(age),Number(height),Number(weight),gender,Number(activityLevel))
          
          
         }
         else{
          alert("Please Fill out all the fields")
          return
         }


          
          
        
        }
    }

  return (
    <form action="" onSubmit={handleSubmit} className="w-full flex flex-col justify-centre items-center gap-6">
        <label className="w-9/10 text-lg font-bold" htmlFor="age">Age
        <input type="number" className="w-full h-16 bg-white rounded-md text-black text-base ps-2" name="age"  id="age"    placeholder="Enter Your Age" /></label>
        <label className="w-9/10 text-lg font-bold" htmlFor="weight">Weight
        <input type="number" className="w-full h-16 bg-white rounded-md text-black text-base ps-2" name="weight"  id="weight" placeholder="Enter your Weight" /></label>
        <label className="w-9/10 text-lg font-bold" htmlFor="height">Height
        <input type="number" className="w-full h-16 bg-white rounded-md text-black text-base ps-2" name="height"  id="height" placeholder="Enter Your Height"/></label>
        
        <label className="w-9/10 text-lg font-bold" htmlFor="activity_lvl">Activity Level
        <select name="activity_level" className="w-full h-16 rounded-md bg-white text-black" id="activity_lvl">
          <option value="1.2">Sedentry</option>
          <option value="1.375">Light</option>
          <option value="1.55">Moderate</option>
          <option value="1.725">Active</option>
          <option value="1.9">Athlete</option>
        </select>
        </label>
        <label className="w-9/10 text-lg font-bold" htmlFor="gender"><p>Gender</p>
        <label htmlFor="">Male<input className="ms-2" type="radio" name="gender" id="gender" value={"M"}/></label>
        <label htmlFor="" className="ms-5">Female<input className="ms-2" type="radio" name="gender" id="gender" value={"F"}/></label></label>
        <button className="hover:ring hover:ring-sky-500 bg-cyan-800 w-2/4 py-3 rounded-full font-bold text-lg hover:bg-cyan-900 hover:text-sky-500"  >Calculate</button>
    </form>
  )
}

export default Calculator