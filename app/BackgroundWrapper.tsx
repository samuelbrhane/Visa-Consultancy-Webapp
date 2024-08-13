import React from "react";

type BackgroundWrapperProps = {
  children: React.ReactNode;
  backgroundImage: string;
};

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
