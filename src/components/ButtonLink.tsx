import type { IconType } from "react-icons";

interface ButtonLinkProps {
  label: string;
  url: string;
  icon?: IconType;
}

export const ButtonLink = ({ label, url, icon: Icon }: ButtonLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-orange-500/70
        text-orange-600
        text-sm
        font-light

        bg-orange-50/50
        backdrop-blur-sm

        shadow-[4px_4px_0px_rgba(234,88,12,0.35)]
        hover:shadow-[6px_6px_0px_rgba(234,88,12,0.45)]

        hover:-translate-x-0.5
        hover:-translate-y-0.5

        transition-all
        duration-200
      "
    >
      {Icon && <Icon className="text-base text-orange-500" />}
      <span>{label}</span>
    </a>
  );
}