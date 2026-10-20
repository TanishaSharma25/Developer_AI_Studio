import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "AI Chat",
    path: "/ai-chat",
  },
  {
    title: "Code Explainer",
    path: "/code-explainer",
  },
  {
    title: "Commit Generator",
    path: "/commit-generator",
  },
  {
    title: "Test Case Generator",
    path: "/test-case-generator",
  },
  {
    title: "JSON Formatter",
    path: "/json-formatter",
  },
];

export default function AppSidebar() {
  return (
    <nav className="w-64 shrink-0 border-r bg-muted/30 p-4">
      <h2 className="mb-6 px-2 text-lg font-semibold">Navigation</h2>

      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
