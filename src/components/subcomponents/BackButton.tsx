"use client";

function BackButton() {
  return (
    <button className="back-button" onClick={() => history.back()}>
      Go back
    </button>
  );
}

export default BackButton;
