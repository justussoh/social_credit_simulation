import "./option.css";
import { useStickyState } from "../../../common/hooks/useStickyState";

export const OptionButton = ({
  hint,
  wealth,
  className = "",
  children,
  augmentedUi = "",
  ...props
}) => {
  const [hintEnabled] = useStickyState(false, "hintEnabled");

  return (
    <div
      className={`${className} option-button`}
      data-augmented-ui={`border ${augmentedUi}`}
      {...props}
    >
      {children}{" "}
      {!hintEnabled && wealth && (
        <code>
          ({wealth > 0 ? "+" : "-"}${Math.abs(wealth)})
        </code>
      )}
      {hintEnabled && (hint !== undefined || wealth !== undefined) ? (
        <code>
          ({hint > 0 ? "+" : ""}
          {hint},{" "}
          {wealth ? `${wealth > 0 ? "+" : "-"}$${Math.abs(wealth)}` : "$0"})
        </code>
      ) : (
        ""
      )}
    </div>
  );
};
