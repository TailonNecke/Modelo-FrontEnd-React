import React from "react";
import { Bottom } from "./styles";
import { MdOutlineHelp } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <>
      <Bottom>
        <div className="info">
          <p>
            © 2022 WEG | Engenharia Industrial | Projetos Industriais | v1.0
          </p>
        </div>
      </Bottom>
    </>
  );
};

export default Footer;
