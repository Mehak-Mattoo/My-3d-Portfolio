import React, { Suspense, lazy, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Island = lazy(() => import("../models/Island"));
const Sky = lazy(() => import("../models/Sky"));
const Bird = lazy(() => import("../models/Bird"));
const Plane = lazy(() => import("../models/Plane"));
const HomeInfo = lazy(() => import("../components/HomeInfo"));

const Home = () => {
  const audioRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const playPromiseRef = useRef(null);

  useEffect(() => {
    // Initialize audio on component mount
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    setAudioInitialized(true);

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  // Handle audio play/pause when isPlayingMusic changes
  useEffect(() => {
    if (!audioRef.current || !audioInitialized) return;

    const playAudio = async () => {
      try {
        // Wait for any existing play promise to resolve or reject
        if (playPromiseRef.current) {
          try {
            await playPromiseRef.current;
          } catch (e) {
            // Ignore errors from previous play promises
          }
          playPromiseRef.current = null;
        }

        if (isPlayingMusic) {
          // Store the new play promise
          playPromiseRef.current = audioRef.current.play();
          await playPromiseRef.current;
        } else {
          audioRef.current.pause();
        }
      } catch (error) {
        console.log("Audio playback error:", error);
        setIsPlayingMusic(false);
      }
    };

    playAudio();
  }, [isPlayingMusic, audioInitialized]);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      // larger screen
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    const screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
    const screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <div>
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[10, 7, 2]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#ble1ff" groundColor={"#000000"} />
            <Bird />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-2 left-2">
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt="jukebox"
            onClick={toggleMusic}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
