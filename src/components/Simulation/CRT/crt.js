import "./crt.css";

export const CRT = ({ children, state }) => {
  return (
    <header className={`App-header `}>
      {state !== "GAME" ? <div className="scanline" /> : ""}
      <div className={`crt ${state !== "GAME" ? "crt-text-shadow" : ""}`}>
        {children}
      </div>
    </header>
  );
};
