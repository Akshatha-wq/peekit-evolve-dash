import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface SectionFeedbackProps {
  sectionName: string;
}

const feedbackOptions = [
  "Hard to understand or navigate",
  "Data doesn't seem accurate or relevant",
  "Insights or trends aren't clear",
  "Too slow or takes time to load",
  "Doesn't meet my specific needs",
];

export const SectionFeedback = ({ sectionName }: SectionFeedbackProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"positive" | "negative" | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [additionalComments, setAdditionalComments] = useState("");
  const { toast } = useToast();

  const handleFeedbackClick = (type: "positive" | "negative") => {
    setFeedbackType(type);
    setIsOpen(true);
    setSelectedOptions([]);
    setAdditionalComments("");
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    }
  };

  const handleSubmit = () => {
    // Here you could save to database if needed
    console.log({
      sectionName,
      feedbackType,
      selectedOptions,
      additionalComments,
      timestamp: new Date().toISOString(),
    });

    toast({
      title: "Feedback submitted",
      description: "Thank you for helping us improve!",
    });

    setIsOpen(false);
    setSelectedOptions([]);
    setAdditionalComments("");
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleFeedbackClick("positive")}
          className="p-1.5 rounded-md text-muted-foreground/50 hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
          aria-label="Thumbs up"
        >
          <ThumbsUp className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleFeedbackClick("negative")}
          className="p-1.5 rounded-md text-muted-foreground/50 hover:text-destructive hover:bg-destructive/10 transition-all hover:scale-110"
          aria-label="Thumbs down"
        >
          <ThumbsDown className="h-5 w-5" />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {feedbackType === "positive" ? "👍" : "👎"}
              <span>
                {feedbackType === "positive"
                  ? "What did you like about this section?"
                  : "Help us improve this section"}
              </span>
            </DialogTitle>
            <DialogDescription>
              {feedbackType === "positive"
                ? "We'd love to know what worked well for you."
                : "Your feedback helps us make the dashboard better."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {feedbackType === "negative" && (
              <div className="space-y-3">
                {feedbackOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={selectedOptions.includes(option)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(option, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={option}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="comments" className="text-sm font-medium">
                📝 Anything specific you'd like us to improve?{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </label>
              <Textarea
                id="comments"
                placeholder="Share your thoughts..."
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit Feedback</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
