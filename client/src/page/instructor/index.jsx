import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { BarChart, Book, LogOut } from "lucide-react";
import React, { useContext, useState } from "react";

const InstructorDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { resetCredentials } = useContext(AuthContext);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "Dashboard",
      component: <InstructorDashboard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "Courses",
      component: <InstructorCourses />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "Logout",
      component: null,
    },
  ];

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };

  return (
    <div className="flex  min-h-screen bg-gray-100 h-full">
      <div className="md:hidden p-4">
        <Button onClick={() => setSidebarOpen(!sidebarOpen)}>Menu</Button>
      </div>
      <aside
        className={`w-64 bg-white shadow-sm ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem.value}
                className="w-full justify-start mb-2"
                variant={activeTab == menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "Logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 w-4 h-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <Tabs onValueChange={setActiveTab} value={activeTab}>
            {menuItems
              .filter((menuItem) => menuItem.component !== null)
              .map((menuItem) => (
                <TabsContent key={menuItem.value} value={menuItem.value}>
                  {menuItem.component}
                </TabsContent>
              ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboardPage;
