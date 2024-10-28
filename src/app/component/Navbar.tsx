import Link from "next/link"

export default function Navbar(){
    return(
        
        <ul className="flex gap-4  bg-cyan-600 text-1xl p-0  ">
            
            {/* Logo */}
            <div className=" text-gray-950 text 2xl font-bold">Andrew's-Movies-Website</div>
             
           <li><Link href="/">Home</Link></li>
           <li><Link href="/about">About</Link></li>
           <li>< Link href="/Contact">Contact</Link></li>
           <li><Link href="/Hollywood">Hollwood</Link ></li>
           <li><Link href="/Bollywood">Bollywood</Link ></li>
           
        </ul>
        
        
        )
}