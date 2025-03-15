"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";

interface ContentCardProps {
  title: string;
  description: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description }) => {
  // Memoized timestamp to prevent re-rendering issues
  const generatedTimestamp = useMemo(() => new Date().toLocaleString(), []);

  return (
    <Card className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition-all">
      {/* Card Header - Title Section */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      </CardHeader>

      {/* Card Content - Description and Timestamp */}
      <CardContent>
        <p className="text-gray-300">{description}</p>
        
        {/* Display generation timestamp */}
        <p className="text-sm text-gray-500 mt-2">Generated on: {generatedTimestamp}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
