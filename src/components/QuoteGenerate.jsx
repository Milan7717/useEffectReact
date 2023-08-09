import React, { useEffect, useState } from 'react'

const QuoteGenerate = () => {
    const [quote, newQuote] = useState("Loading.......")
    const[author,setAuthor]=useState("")

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
          .then(response => response.json())
          .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            newQuote(data[randomIndex].text);
            setAuthor(data[randomIndex].author || 'Unknown');
          })
          .catch(error => console.error('Error fetching quotes:', error));
      }, []);

    return (
        <div className='h-[100vh] bg-gray-800 flex justify-center items-center'>
            <div className=' w-[60%] bg-red-400 text-white rounded-lg p-4'>
                <h1 className='text-2xl text-center my-4'>Quote Generator</h1>
                <div className='text-center'>
                    <p className='text-lg'>{quote}</p>
                    <p className='text-lg font-bold text-black'>{author}</p>

                    <button className='text-center bg-blue-600 p-2 text-xl rounded-lg mt-4 mb-2' onClick={()=> window.location.reload()}>New Quote</button>
                </div>
                

            </div>
        </div>
    )
}

export default QuoteGenerate