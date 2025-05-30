export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "green" }}>Header (Marketing)</header>
      {children}
      <footer style={{ background: "orange" }}>Footer (Marketing)</footer>
    </>
  );
}
