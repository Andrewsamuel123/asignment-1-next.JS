
import{ resolve} from "path";

export default async function Bollywood(){
    await new Promise((resolve)=>{
      setTimeout(resolve,5000);
    })
   
      return(
        <div  className="bg-slate-500 h-screen">
            <h1 className=" text-pretty text-white">Pathan</h1>
            <h2 className=" text-pretty text-white"> Bodyguard </h2>
        </div>
      )
    }

