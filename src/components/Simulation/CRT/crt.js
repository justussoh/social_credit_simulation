import "./crt.css";

export const CRT = ({ children }) => {
  return (
    <header className="App-header">
      <div className="scanline" />
      <div className="crt">{children}</div>
    </header>
  );
};
