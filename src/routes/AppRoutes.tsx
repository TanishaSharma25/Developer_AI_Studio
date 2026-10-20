import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";

import Dashboard from "@/pages/Dashboard";
import AIChat from "@/pages/AIChat";
import CodeExplainer from "@/pages/CodeExplainer";
import CommitGenerator from "@/pages/CommitGenerator";
import TestCaseGenerator from "@/pages/TestCaseGenerator";
import JSONFormatter from "@/pages/JSONFormatter";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/code-explainer" element={<CodeExplainer />} />
          <Route path="/commit-generator" element={<CommitGenerator />} />
          <Route path="/test-case-generator" element={<TestCaseGenerator />} />
          <Route path="/json-formatter" element={<JSONFormatter />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
