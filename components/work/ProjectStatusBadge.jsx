const labels = {
  live: "Live",
  "in-development": "In development",
  "github-only": "GitHub",
};

const styles = {
  live: "bg-accent text-primary",
  "in-development": "bg-white/15 text-white/90 border border-white/20",
  "github-only": "bg-white/10 text-white/80 border border-white/15",
};

export default function ProjectStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wide ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
