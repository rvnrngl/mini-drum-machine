import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Play Me!");

  const drumPad = [
    {
      keyCode: 81,
      text: "Q",
      name: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      name: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      let drumName = "";
      for (let i in drumPad) {
        if (drumPad[i].text === event.key.toUpperCase()) {
          drumName = drumPad[i].name;
        }
      }
      playAudio(event.key.toUpperCase(), drumName);
    });
  }, []);

  const playAudio = (id, name) => {
    const audio = document.getElementById(id);
    if (audio !== null) {
      audio.play();
      setText(name);
    }
  };

  return (
    <>
      <div className=" bg-neutral-800 w-screen h-screen overflow-hidden flex justify-center items-center">
        <div
          id="drum-machine"
          className=" bg-neutral-700 rounded-md flex flex-col w-[300px] shadow-lg"
        >
          <h1 className="uppercase text-center mt-5 text-teal-600 text-2xl font-bold drop-shadow-[2px_3px_1px_#000000]">
            mini drum
          </h1>
          <div
            id="pad-container"
            className="w-full h-64 p-5 grid grid-cols-3 gap-3"
          >
            {drumPad.map((item) => (
              <div
                key={item.src}
                id={item.src}
                onClick={() => {
                  playAudio(item.text, item.name);
                }}
                className="drum-pad bg-neutral-500 text-center pt-4 text-teal-500 text-2xl font-bold rounded-md shadow-[5px_5px_5px_#000000] transition duration-300 ease-out active:transform active:scale-90 active:bg-red-900 active:text-neutral-500"
              >
                <p className="drop-shadow-[1px_2px_2px_#000000]">{item.text}</p>
                <audio className="clip" id={item.text} src={item.src}></audio>
              </div>
            ))}
          </div>
          <div
            id="controller-container"
            className="flex justify-center items-center text-gray-300"
          >
            <div
              id="display"
              className="px-7 py-2 pb-3 mb-2 bg-neutral-800 rounded-md"
            >
              {text}
            </div>
          </div>
          <a href="https://github.com/rvnrngl" target="_blank">
            <h1 className="text-center mb-2 text-2xl text-gray-400 font-extrabold drop-shadow-[2px_2px_2px_#000000] hover:text-gray-600">
              <span className="text-3xl text-teal-700 hover:text-red-700">
                &#123;
              </span>
              RR
              <span className="text-3xl text-teal-700 hover:text-red-700">
                &#125;
              </span>
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
