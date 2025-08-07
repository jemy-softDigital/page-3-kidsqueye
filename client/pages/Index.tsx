import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  BarChart3,
  Download,
  Eye,
  FileText,
  Home,
  MessageSquare,
  QrCode,
  Settings,
  TrendingUp,
  Users,
  Zap,
  Clock,
  Target,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Overview", icon: Home, current: true },
  { name: "QR Codes", icon: QrCode, current: false },
  { name: "Analytics", icon: BarChart3, current: false },
  { name: "Waitlist", icon: UserPlus, current: false },
  { name: "Classrooms", icon: Users, current: false },
  { name: "Team Access", icon: Users, current: false },
  { name: "Settings", icon: Settings, current: false },
];

export default function Index() {
  const enrollmentMetrics = [
    { label: "Page Views", value: "1248", icon: Eye, color: "blue" },
    { label: "Form Started", value: "89", icon: FileText, color: "green" },
    { label: "Form Completed", value: "156", icon: Target, color: "purple" },
    { label: "Waiting List", value: "234", icon: Clock, color: "orange" },
    { label: "Enrolled", value: "45", icon: Users, color: "cyan" },
    { label: "Conversion", value: "23", icon: TrendingUp, color: "pink" },
  ];

  const operationalMetrics = [
    {
      label: "Enrollment vs Capacity",
      value: "85%",
      target: 100,
      current: 85,
      color: "green",
    },
    {
      label: "Open Seats",
      value: "12",
      subtitle: "Available for enrollment",
      color: "blue",
    },
    {
      label: "Median Response Time",
      value: "8.5h",
      subtitle: "To parent enquiry",
      color: "orange",
    },
    {
      label: "Messages Ignored",
      value: "5%",
      subtitle: "Needs improvement",
      color: "red",
    },
    {
      label: "Avg Review Score",
      value: "4.6",
      subtitle: "Out of 5.0",
      color: "yellow",
    },
    {
      label: "Last Availability Update",
      value: "3d",
      subtitle: "Days ago",
      color: "gray",
    },
  ];

  const benchmarkData = [
    {
      metric: "Response Time",
      value: "24h",
      percentile: "50th percentile",
      performance: "Bottom 30%",
      color: "orange",
    },
    {
      metric: "Parent Engagement",
      value: "89%",
      percentile: "95th percentile",
      performance: "Top 10%",
      color: "green",
    },
    {
      metric: "Satisfaction Score",
      value: "4.6",
      percentile: "71st percentile",
      performance: "Top 25%",
      color: "green",
    },
    {
      metric: "Page Views",
      value: "1248",
      percentile: "91st percentile",
      performance: "Top 10%",
      color: "green",
    },
  ];

  const campaignMetrics = [
    { label: "Total QR Scans", value: "479" },
    { label: "Top Campaign", value: "Fall Enrollment" },
    { label: "Conversion Actions", value: "67" },
    { label: "Conversion Rate", value: "14" },
  ];

  const engagementMetrics = [
    { label: "Returning Visitors", value: "35%" },
    { label: "Most Active Staff", value: "Sarah Johnson" },
    { label: "Reviews This Week", value: "8" },
    { label: "Parent Alerts Created", value: "12" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-3 overflow-y-auto bg-sidebar px-6 pb-4">
          <div className="pt-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-sidebar-foreground">
                    KidsQueue
                  </h1>
                  <p className="text-xs text-sidebar-foreground/70">
                    Admin Dashboard
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 ml-0.5">
                Welcome, <span className="font-bold">Test Admin</span>
              </p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-4">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className={cn(
                          item.current
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium",
                        )}
                      >
                        <item.icon
                          className={cn(
                            item.current
                              ? "text-sidebar-accent-foreground"
                              : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="bg-sidebar-accent/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    MY CENTER (1)
                  </h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
                      <div className="h-2 w-2 rounded-full bg-dashboard-purple"></div>
                      Bright Start Academy at Falls Point
                    </div>
                    <button className="text-xs text-black hover:text-primary/80 transition duration-200 flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      View Center Page
                    </button>
                  </div>
                </div>
              </li>
              <li className="mt-4">
                <div className="bg-sidebar-accent/30 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    QUICK STATS
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        6
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Waitlist
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        42
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Enrolled
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        8h
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Avg Response
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        4.5
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Rating
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-72 my-4">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="lg:hidden">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">K</span>
                  </div>
                  <span className="font-semibold text-gray-900">KidsQueue</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    Monthly
                  </Badge>
                  <span className="hidden sm:inline text-sm text-gray-500">
                    Analytics Overview
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Download className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Export to CSV</span>
                <span className="lg:hidden">CSV</span>
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Export to PDF</span>
                <span className="lg:hidden">PDF</span>
              </Button>
              <Button size="sm" className="bg-primary">
                <Download className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Export Insights</span>
                <span className="sm:hidden">Export</span>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-500 text-white text-sm">
                  E
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 my-3">
          <div className="space-y-8">
            {/* Enrollment Funnel Metrics */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Enrollment Funnel Metrics
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {enrollmentMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card key={index} className="relative overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-2 items-center justify-between">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              metric.color === "blue"
                                ? "bg-blue-50"
                                : metric.color === "green"
                                  ? "bg-green-50"
                                  : metric.color === "purple"
                                    ? "bg-purple-50"
                                    : metric.color === "orange"
                                      ? "bg-orange-50"
                                      : metric.color === "cyan"
                                        ? "bg-cyan-50"
                                        : metric.color === "pink"
                                          ? "bg-pink-50"
                                          : "bg-gray-50"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                metric.color === "blue"
                                  ? "text-blue-600"
                                  : metric.color === "green"
                                    ? "text-green-600"
                                    : metric.color === "purple"
                                      ? "text-purple-600"
                                      : metric.color === "orange"
                                        ? "text-orange-600"
                                        : metric.color === "cyan"
                                          ? "text-cyan-600"
                                          : metric.color === "pink"
                                            ? "text-pink-600"
                                            : "text-gray-600"
                              }`}
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {metric.label}
                            </p>
                            <p className="text-2xl font-bold text-black">
                              {metric.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border bg-primary/10">
                <p className="text-sm ">
                  <span className="font-semibold">Conversion Rate:</span> 2% of
                  visitors complete applications
                </p>
              </div>
            </section>

            {/* Operational Metrics */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Operational Metrics
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operationalMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-600">
                          {metric.label}
                        </h3>
                        {metric.target && (
                          <Badge
                            variant={
                              metric.current >= 80 ? "default" : "secondary"
                            }
                          >
                            {metric.current >= 80 ? "Good" : "Needs Attention"}
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <p className="text-3xl font-bold text-black">
                          {metric.value}
                        </p>
                        {metric.subtitle && (
                          <p className="text-sm text-gray-500">
                            {metric.subtitle}
                          </p>
                        )}
                        {metric.target && (
                          <div className="space-y-1">
                            <Progress value={metric.current} className="h-2" />
                            <p className="text-xs text-gray-500">
                              {metric.current}% of capacity
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benchmarking & Performance */}
            <section>
              <div className="flex flex-col  space-x-2 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Benchmarking & Performance
                </h2>
                <p className="text-sm text-gray-500">
                  Compare your performance against industry standards
                </p>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benchmarkData.map((item, index) => (
                      <div
                        key={index}
                        className="space-y-3 shadow p-4 rounded-[15px]"
                      >
                        <div className="flex items-center justify-between ">
                          <h4 className="text-sm font-medium text-gray-600">
                            {item.metric}
                          </h4>
                          <Badge variant={"secondary"}>
                            {item.performance}
                          </Badge>
                        </div>
                        <p className="text-2xl font-bold text-black">
                          {item.value}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.percentile}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Bottom Row - QR Campaign & Engagement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* QR Campaign Performance */}
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <QrCode className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    QR Campaign Performance
                  </h2>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {campaignMetrics.map((metric, index) => (
                        <div key={index} className="space-y-1">
                          <p className="text-sm font-medium text-gray-600 flex justify-between">
                            {metric.label}{" "}
                            <span>
                              {metric?.label == "Conversion Rate"
                                ? `${metric?.value}%`
                                : ""}
                            </span>
                          </p>
                          <p className="text-xl font-bold text-black">
                            {metric?.label == "Conversion Rate" ? (
                              <Progress
                                value={+metric.value}
                                className="h-2 mt-2.5"
                              />
                            ) : (
                              metric.value
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Engagement Metrics */}
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-pink-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Engagement Metrics
                  </h2>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {engagementMetrics.map((metric, index) => (
                        <div key={index} className="space-y-1">
                          <p className="text-sm font-medium text-gray-600">
                            {metric.label}
                          </p>
                          <p className="text-xl font-bold text-black">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
