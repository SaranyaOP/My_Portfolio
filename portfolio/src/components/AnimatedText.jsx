import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  //FaDesktop, 
  FaSearch, 
  FaTools, 
  FaPalette, 
  FaRobot 
} from "react-icons/fa";

export default function AnimatedText() {
  const roles = [
   {role: "Frontend Developer", icon:<FaPalette/>},
   {role: "React Specialist",icon:<FaSearch/>},
    {role: "Fullstack Developer",icon:<FaTools/>},
   {role: "Upcoming Agentic Fullstack Developer",icon:<FaRobot/>}
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // change every 2.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden mt-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl flex"
        >
         

          <span>
            {roles[index].role}
          </span>
           <span className="text-3xl mx-2">
            {roles[index].icon}
          </span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}