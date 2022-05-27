import React from 'react'
import './App.css';
import {nanoid} from 'nanoid'
import Quizgame from './components/Quizgame';
import ApiFetch from './components/ApiFetch'
import {Marks} from './components/Quizgame'

function App() {

  const {response, loading} =ApiFetch("api.php?amount=10&type=multiple") 
  
  let dataArr=[]

  if(loading){
    return(
        <h2 className='loading'>Loading ...</h2>
    )
}
 
  
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  function getChoices(index){
          
      let choice=[]

          choice.push(response?.results[index].correct_answer)
          choice.push(response?.results[index].incorrect_answers[0])
          choice.push(response?.results[index].incorrect_answers[1])
          choice.push(response?.results[index].incorrect_answers[2])

          shuffle(choice)
          choice.push(response?.results[index].correct_answer)
          return choice
  }


  function getData(i){
       
    return{
      id: nanoid() ,
      question: response?.results[i].question,
      options: getChoices(i),
      index: i
    }

}


  function play(){
    let obj=[]
      for(let i=0;i<10;i++)
      {
        obj.push(getData(i))
      }
      
      return obj

      
  }
 

     dataArr=play()
    console.log(dataArr)

  
    function get(){
      let v= Marks()
      alert("Your score is "+v.score+"/7")
      
    }


  

  return (
    <div className="App">
        {
         dataArr.map(getdata => 
         <Quizgame key={getdata.id} data = {getdata} />)
        }
      <>  
      <button className='submit' onClick={get}>Submit</button>       </>
    </div>
  );
}

export default App;
