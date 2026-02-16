import { useContext } from "react";
import { languageContext } from "./languageContext";

const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};


export const Home = () => {
  const { language, setLanguage } = useContext(languageContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }
  
  return (
    <div>
      <div className="language-container">
        <button onClick={() => changeLanguage('English')}>English</button>
        <button onClick={() => changeLanguage('Hindi')}>Hindi</button>
        <button onClick={() => changeLanguage('Marathi')}>Marathi</button>
      </div>
      <p>{content[language]}</p>
    </div>
  );
};
