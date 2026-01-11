import type { IconType } from "react-icons";

interface BadgeProps {
  label: string;
  icon?: IconType;
  align?: "left" | "right";
}

export const Badge = ({ label, icon: Icon, align = "left" }: BadgeProps) => {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1.5
        px-2.5
        py-1
        rounded-full
        text-xs
        font-light
        border
        bg-gray-100
        border-gray-300
        text-gray-700
        ${
          align === "right"
            ? "flex-row-reverse"
            : ""
        }
      `}
    >
      {Icon && <Icon className="text-xs text-gray-500" />}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
