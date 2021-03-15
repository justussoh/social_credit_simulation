import { Button } from "@material-ui/core";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";

import { useStickyState } from "../../common/hooks/useStickyState";

export const About = () => {
  // Control Hint
  const [hintEnabled, setHintEnabled] = useStickyState(false, "hintEnabled");
  const onToggleHint = () => {
    setHintEnabled(!hintEnabled);
  };
  return (
    <header className="App-header">
      Hello
      <Button
        variant="contained"
        startIcon={
          hintEnabled ? <HelpRoundedIcon /> : <HelpOutlineRoundedIcon />
        }
        onClick={onToggleHint}
      >
        {`${hintEnabled ? "Disable" : "Enable"} hint`}
      </Button>
    </header>
  );
};
