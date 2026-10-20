import { useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = () => {
    if (!input.trim()) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((previousMessages) => [...previousMessages, userMessage]);

    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-purple-500/10 p-3 text-purple-600">
            <Bot className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">AI Chat</h1>

            <p className="text-sm text-muted-foreground">
              Ask questions and get help with your development tasks.
            </p>
          </div>
        </div>
      </div>

      {/* Chat */}
      <Card className="flex min-h-0 flex-1 flex-col">
        <CardContent className="flex min-h-0 flex-1 flex-col p-0">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-full bg-purple-500/10 p-4 text-purple-600">
                  <Sparkles className="h-8 w-8" />
                </div>

                <h2 className="mt-4 text-lg font-semibold">
                  How can I help you?
                </h2>

                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Ask me about React, JavaScript, TypeScript, testing,
                  debugging, or any development problem.
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-600">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] rounded-xl px-4 py-3 text-sm ${
                      message.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>

                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-3">
              <Textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask something about your code..."
                className="min-h-12.5 resize-none"
              />

              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="h-auto bg-purple-600 px-4 hover:bg-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-2 text-xs text-muted-foreground">
              Press Enter to send • Shift + Enter for a new line
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
