import Image from "../../public/aaa.jpg";

export default function Content() {
    return (
        <div className="mx-10 bg-gradient-to-r from-slate-950 to-indigo-950 opacity-90 h-screen flex items-center">
            <img src="/hakim.jpeg" className="bg-white h-60 w-50 rounded-md m-5 opacity-100 border-2"/>
            <div className="opacity-100 text-slate-100">
            <h1 className="font-sans font-extrabold text-5xl mb-2">Lutfi Hakim Yusra</h1>
            <h1 className="font-sans font-light text-justify mr-4 mb-2">An Indonesian student majoring in Informatics at Institute of Technology Bandung, class of 2023. Interested in game development and software engineering, and loves to game. Familiar with HTML, CSS, JS, TS, and Python.</h1>

            <h1 className="font-sans font-bold text-2xl mb-2 mt-2">Projects</h1>
            <ul className="font-sans font-light text-justify mr-4">
                <li>- IMPACT Web, as a back-end contributor and set up form validator.</li>
                <li>- Part of Genshiken's IT team.</li>
                <li>- Made a <a href="https://github.com/DaDecky/Tubes-ARC" target="_blank" className="text-blue-400 hover:text-blue-600">small working blog</a> with full-stack functionality with a team. </li>
                <li>- Lead programmer of {" "}  
                    <a href="https://pixelatedsouls.itch.io/eggyegg" target="_blank" className="text-blue-400 hover:text-blue-600">Eggy Egg</a>
                    , a Godot-based game.</li>
            </ul>
            <div className="flex items-center mt-2">
                <a href="https://www.instagram.com/hakimyusra/" target="_blank"><img src="/insta.png" className="w-16 grayscale hover:grayscale-0"/></a>
                <a href="https://www.linkedin.com/in/lutfi-hakim-yusra-7b7b3b1b4/" target="_blank"><img src="linked.png" className="size-7 grayscale hover:grayscale-0"/></a>
            </div>
            </div>
        </div>
    );
}