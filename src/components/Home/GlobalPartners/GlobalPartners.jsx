import { useState } from "react";

const logos = [
  {
    name: "Microsoft",
    src: "https://i.postimg.cc/25zhRRG5/png-clipart-microsoft-logo-microsoft-computer-network-text-thumbnail-removebg-preview.png",
  },
  {
    name: "Kaspersky",
    src: "https://i.postimg.cc/HxrtR1Wy/Kaspersky-logo-svg-removebg-preview.png",
  },
  {
    name: "Oracle",
    src: "https://i.postimg.cc/25zhRRG5/png-clipart-microsoft-logo-microsoft-computer-network-text-thumbnail-removebg-preview.png",
  },
  {
    name: "Sophos",
    src: "https://i.postimg.cc/25zhRRG5/png-clipart-microsoft-logo-microsoft-computer-network-text-thumbnail-removebg-preview.png",
  },
];

const GlobalPartners = () => {
  // Initialize with the Microsoft logo as the default selected logo
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  return (
    <div className="container mx-auto">
      <div className="text-4xl text-center font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
        Global Partners
      </div>
      <div>
        <div className="logo-list flex">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              onClick={() => handleLogoClick(logo)}
              style={{
                cursor: "pointer",
                width: "200px",
                height: "100px",
                margin: "10px",
              }}
            />
          ))}
        </div>

        {selectedLogo && (
          <div className="selected-logo">
            <img
              src={selectedLogo.src}
              alt={selectedLogo.name}
              style={{ width: "300px", height: "150px", marginTop: "20px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalPartners;
