import "./crt.css";

export const CRT = ({ children }) => {
  return (
    <header className="App-header">
      <div class="scanline" />
      <div className="crt">{children}</div>
    </header>
  );
};
