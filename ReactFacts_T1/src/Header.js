import reactLogo from './logo.svg';

export default function Header(){
    return(
           <header>
                 <nav className="nav">
                   <img src={reactLogo} 
                   alt="react_logo" 
                   width="8%"/>
                   <h1 className="title1">ReactFacts</h1>
                   <h1 className="title2">React Course - Project 1</h1>
                 </nav>
           </header>
    )
   }