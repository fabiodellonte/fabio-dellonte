import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useSettings } from "@/contexts/SettingsContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useSettings();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <Switch
        id="language-switch"
        checked={language === "it"}
        onCheckedChange={(checked) => {
          setLanguage(checked ? "it" : "en");
        }}
      />
      <span className="text-sm text-muted-foreground">
        {language === "en" ? "IT/EN" : "EN/IT"}
      </span>
    </div>
  );
};