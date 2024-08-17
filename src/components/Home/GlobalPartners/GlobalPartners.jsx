import { useState } from "react";

const logos = [
  {
    name: "Microsoft",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
  {
    name: "Kaspersky",
    src: "https://i.postimg.cc/HxrtR1Wy/Kaspersky-logo-svg-removebg-preview.png",
  },
  {
    name: "Oracle",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
  {
    name: "Sophos",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
  {
    name: "Microsoft",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
  {
    name: "Kaspersky",
    src: "https://i.postimg.cc/HxrtR1Wy/Kaspersky-logo-svg-removebg-preview.png",
  },
  {
    name: "Oracle",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
  {
    name: "Sophos",
    src: "https://i.postimg.cc/mDH43wrS/Frame-42.png",
  },
];

const GlobalPartners = () => {
  // Initialize with the Microsoft logo as the default selected logo
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  return (
    <div className="mt-20">
      <div className="text-5xl mb-8 text-center font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
        Global Partners
      </div>
      <div>
        <div className="logo-list flex container mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 text-2xl flex justify-center mb-4"
              onClick={() => handleLogoClick(logo)}
            >
              <h1>{logo.name}</h1>
            </div>
          ))}
        </div>

        {selectedLogo && (
          <div className="selected-logo">
            <img
              src={selectedLogo.src}
              alt={selectedLogo.name}
              style={{ width: "100%", height: "100%", marginTop: "20px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalPartners;
