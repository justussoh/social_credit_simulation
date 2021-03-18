import "./option.css";
import { useStickyState } from "../../../common/hooks/useStickyState";

export const OptionButton = ({
  hint,
  className,
  children,
  augmentedUi,
  ...props
}) => {
  const [hintEnabled] = useStickyState(false, "hintEnabled");

  return (
    <div
      className={`${className} option-button`}
      data-augmented-ui={`border ${augmentedUi}`}
      {...props}
    >
      {children} {hintEnabled && hint ? <code>({hint})</code> : ""}
    </div>
  );
};
