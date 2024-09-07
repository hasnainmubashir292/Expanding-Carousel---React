import { useState } from "react";

const imagesArray = [
  "/images/img.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const change = (index) => {
    setCurrent(index);
  };
  return (
    <div className="flex flex-row mx-5 max-w-screen gap-4 my-5">
      {imagesArray.map((value, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${value})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: index === current ? "100%" : "50px",
          }}
          onClick={() => change(index)}
          className={`h-[500px] transition-all  ease-in-out delay-800 rounded-3xl`} // Tailwind transition classes
        ></div>
      ))}
    </div>
  );
}
