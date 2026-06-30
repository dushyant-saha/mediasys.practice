export default function RootLayout() {
  return (
    <div>
      <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>
      <Outlet />
    </div>
  );
}