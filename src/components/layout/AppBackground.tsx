import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";

export default function AppBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <EtherealShadow
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 60, speed: 35 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
      <div className="vx-ambient" />
    </div>
  );
}
