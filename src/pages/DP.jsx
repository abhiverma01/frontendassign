import React from "react";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const getInitials = (name) => {
  const nameParts = name.trim().split(" ");
  if (nameParts.length > 1) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  } else {
    return nameParts[0][0].toUpperCase();
  }
};

const DP = ({ name, imageUrl }) => {
  const [backgroundColor] = React.useState(getRandomColor());
  const initials = getInitials(name);

  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.7em",
        color: "white",
        fontWeight: "bold",
        backgroundColor: imageUrl ? "transparent" : backgroundColor,
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="User"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default DP;
