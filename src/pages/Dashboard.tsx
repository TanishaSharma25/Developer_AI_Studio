import {
  ArrowUpRight,
  Bot,
  Braces,
  GitCommit,
  Sparkles,
  TestTube,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { addAIRequest } from "@/store/aiSlice";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    title: "AI Chat",
    description:
      "Get instant AI assistance for your development questions and everyday coding tasks.",
    icon: Bot,
    path: "/ai-chat",
  },
  {
    title: "Code Explainer",
    description:
      "Understand complex code with clear, AI-powered explanations and examples.",
    icon: Braces,
    path: "/code-explainer",
  },
  {
    title: "Commit Generator",
    description:
      "Generate clean and meaningful Git commit messages from your changes.",
    icon: GitCommit,
    path: "/commit-generator",
  },
  {
    title: "Test Case Generator",
    description:
      "Generate test cases and improve your application's test coverage with AI.",
    icon: TestTube,
    path: "/test-case-generator",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const totalRequests = useSelector(
    (state: RootState) => state.ai.totalRequests,
  );

  const activities = useSelector((state: RootState) => state.ai.activities);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border bg-linear-to-br from-purple-600 via-violet-600 to-indigo-600 p-8 text-white shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-white/15 p-2 backdrop-blur">
              <Sparkles className="h-5 w-5" />
            </div>

            <span className="text-sm font-medium text-purple-100">
              AI Developer Workspace
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Build smarter.
            <br />
            Code faster.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100 md:text-base">
            Your AI-powered toolkit for everyday development tasks. Explore your
            tools and let AI handle the repetitive work.
          </p>

          <Button
            className="mt-6 bg-white text-purple-700 hover:bg-purple-50"
            onClick={() => navigate("/ai-chat")}
          >
            <Zap className="mr-2 h-4 w-4" />
            Explore Tools
          </Button>
        </div>

        {/* Decorative background */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </section>

      {/* Statistics */}
      <section className="grid gap-4 md:grid-cols-3">
        {/* AI Tools */}
        <Card className="border-purple-100 transition-shadow hover:shadow-md dark:border-purple-900">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                AI Tools
              </p>

              <p className="mt-2 text-3xl font-bold">{tools.length + 1}</p>

              <p className="mt-1 text-xs text-muted-foreground">
                Available tools
              </p>
            </div>

            <div className="rounded-xl bg-purple-500/10 p-3 text-purple-600">
              <Sparkles className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        {/* AI Requests */}
        <Card className="transition-shadow hover:shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                AI Requests
              </p>

              <p className="mt-2 text-3xl font-bold">{totalRequests}</p>

              <p className="mt-1 text-xs text-muted-foreground">
                Requests today
              </p>
            </div>

            <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-600">
              <Zap className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>

        {/* Workspace */}
        <Card className="transition-shadow hover:shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Workspace
              </p>

              <p className="mt-2 text-xl font-bold">Ready</p>

              <p className="mt-1 text-xs text-muted-foreground">
                Everything is set up
              </p>
            </div>

            <div className="rounded-xl bg-violet-500/10 p-3 text-violet-600">
              <Zap className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Developer Tools */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Developer Tools
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Tools designed to make your development workflow faster.
            </p>
          </div>

          <span className="hidden text-sm text-muted-foreground sm:block">
            {tools.length} tools available
          </span>
        </div>

        {/* Tool Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              path={tool.path}
            />
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight">Recent Activity</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Your recent AI development activity.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            {activities.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="rounded-full bg-purple-500/10 p-3 text-purple-600">
                  <Sparkles className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-semibold">No activity yet</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Start using an AI tool and your activity will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {activities.slice(0, 5).map((activity, index) => (
                  <div
                    key={`${activity.timestamp}-${index}`}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-purple-500/10 p-2 text-purple-600">
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-medium">{activity.tool}</p>

                        <p className="text-xs text-muted-foreground">
                          AI tool used
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Quick Action */}
      <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/20">
        <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-600">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="font-semibold">Ready to build something?</h3>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Start with AI Chat and get help with your next development task.
            </p>
          </div>

          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => {
              dispatch(addAIRequest("AI Chat"));
              navigate("/ai-chat");
            }}
          >
            Start with AI Chat
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
