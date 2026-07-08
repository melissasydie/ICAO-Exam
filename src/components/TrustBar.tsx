import { CheckCircle2 } from "lucide-react";

const trustItems = [
  "ICAO Examiner",
  "Aviation English Specialist",
  "Online Worldwide",
  "Group & Private Classes",
  "Flexible Scheduling",
];

export default function TrustBar() {
  return (
    <div className="bg-aircraft text-white py-6 border-y border-white/10 relative z-20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
