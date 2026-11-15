import type { Metadata } from "next";
import MaintenanceView from "./MaintenanceView";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "Misun Academy is undergoing scheduled maintenance. We’ll be back shortly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
