import { useEffect, useState } from 'react';
import './App.css';

export default function App() {

  let [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
   
  }, [darkMode]);

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col dark:bg-black dark:text-white'>
      <button onClick={() => {
        setDarkMode(!darkMode)
      }} className=' absolute right-10 top-10 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 dark:bg-white dark:text-black'>{darkMode ? "Light" : "Dark"} Mood</button>
      <h1 className='text-5xl text-center font-extrabold mb-5'>REACT öğreniyoruz!</h1>
      <p className=' w-[50%] text-xl text-center mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacus eu quam pellentesque pretium vitae sit amet ipsum. Curabitur et mauris a erat faucibus dapibus sed vel erat. Duis sed maximus ex, sed gravida ligula. Quisque in interdum erat, vitae laoreet leo. Nulla ac lorem eget massa iaculis bibendum ut ut sapien. Donec et convallis urna. Sed maximus feugiat elit vitae lobortis. Cras nec euismod lorem, nec auctor arcu. Nam ullamcorper nulla quis vulputate convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <button className=' bg-indigo-600 text-white rounded px-5 py-3 hover:bg-indigo-300'>Get Started</button>
    </div>
  )
}

