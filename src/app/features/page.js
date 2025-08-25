import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    "Easy invoice creation",
    "Smart customer management",
    "Secure online payments",
    "Insightful reports & analytics",
  ];

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-lg">
            <CheckCircle className="text-blue-600" />
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
