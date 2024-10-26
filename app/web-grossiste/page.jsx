import GrossisteWebEntrance from "@components/GrossisteWebEntrance";
import GrossisteWebLogin from "@components/GrossisteWebLogin";
import GrossisteWebDashboard from "@components/GrossisteWebDashboard";

const webGrossiste = () => {
  return (
    <>
      <GrossisteWebEntrance />
      <GrossisteWebLogin />
      <GrossisteWebDashboard />
    </>
  );
};

export default webGrossiste;
