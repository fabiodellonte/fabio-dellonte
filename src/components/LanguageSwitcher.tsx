import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const LanguageSwitcher = () => {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <Switch
        id="language-switch"
        aria-label="Toggle language"
        onCheckedChange={(checked) => {
          // TODO: Implement language switching logic
          console.log("Language switched:", checked ? "English" : "Italian");
        }}
      />
      <span className="text-sm text-muted-foreground">
        IT/EN
      </span>
    </div>
  );
};