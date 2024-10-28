

import Link from "next/link"


export default function Hollywood(){
    throw new Error('Page Nhi Bnaya hai abhi bhai ')
    return(
        <div className=" bg-slate-500 h-screen">
           
            <h3>Movies List</h3>
            <ol>
                <li>
                 <Link href="/Hollywood">2024-Movies</Link>
                </li>
            </ol>

    
        </div>

    )
}