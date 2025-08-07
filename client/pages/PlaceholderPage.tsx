import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ 
  title, 
  description = "This section is under development. Continue prompting to have the content generated for this page." 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Construction className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-6">{description}</p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
