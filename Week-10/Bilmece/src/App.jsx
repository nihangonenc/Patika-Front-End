import { useState, useEffect } from 'react'
import './App.css'
import { DATA } from './data';
const alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerArray, setAnswerArray] = useState ([]); //karıştırdığımız harflerin array değişkeni
  const [keyWords, setKeywords] = useState([]); // seçilenleri bastırmak için
  const [isResult, setIsResult] = useState(false);
  const [isWrong, setIsWrong] = useState(false); //yanlış mı? kontrolü
  const [isVibrate, setIsVibrate] = useState(false);

  const shuffle = (array)=> { //elemanları karıştırdık
    return array.sort(()=> Math.random() - 0.5) //-0.5 ile 0.5 arasında değer üretir. N/P durumuna göre yer değiştirir
  }
  
  const setKeyword = (keyWord) => {
   
    if(keyWords.length < answer.length){
      keyWords.push(keyWord);
      setKeywords([...keyWords]);
    }
    
    if(keyWords.length == answer.length){
      if (answer == keyWords.join("")) {
        setIndex(index + 1); //bir sonraki soruya geçiyoruz
        setKeywords([]); //cevap doğruysa seçilen harfleri sıfırlıyoruz
        setIsResult(true);
      } else {
        setIsWrong(true);
        setIsVibrate(true);
      }
    }
  }

  useEffect (() => {
    setIsWrong(false);
    setIsResult(false);
    setAnswer("");
     if (typeof DATA[index] != "undefined" ){
      console.log(DATA[index]);
      const answer = DATA[index].answer.toLowerCase();
      setAnswer(answer);
      setQuestion(DATA[index].question);
      const stringToArray = answer.split("");
      stringToArray.push(alphabet[Math.floor(Math.random()* alphabet.length)]); //bir tane harf ekledik
      stringToArray.push(alphabet[Math.floor(Math.random()* alphabet.length)]); 
      stringToArray.push(alphabet[Math.floor(Math.random()* alphabet.length)]); //toplam 3 harf eklemiş olduk
      const alphabetLowerData = stringToArray.map((answer)=> answer.toLowerCase());
      setAnswerArray(shuffle(alphabetLowerData));
    }
  },[isResult]);

  const removeKeyword = (index) => {
    keyWords.splice(index,1);
    setKeywords ([...keyWords]);
    setIsVibrate(false);
  }

  return (
    <div className='app'>
      {answer != "" && 
      <>
        <div>
          <span className={"question"}> {/*soruyu gösterir.*/}
          {question}
          </span>
        </div>
        <div className={(isVibrate) ? 'vibrate' : 'answer-area'}> {/*seçilen harfleri gösterir*/}
          {keyWords.map((item,index) => (
            <span style= {{"border-bottom": (isWrong) ? "3px solid red" : "3px solid #ddd" } } className = {"answer"} onClick= {()=> removeKeyword(index)} key= {index}>
              {item}
            </span>
          ))}
        </div>
        <div className= {"button-area"}> {/* Cevap harflerini içerir*/ }
          {answerArray.map((item,index) => (
            <button className= {"button"} key= {index} onClick={() => setKeyword(item)}>
              {item}
            </button>
          ))}
        </div>
      </>
    }
    { answer == "" && 
      <div className= {"end"} > Sorular Bitti! </div>
    }
  </div>   
  )
}

export default App
