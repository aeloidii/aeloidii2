import ExclusiveApp from "@components/ExclusiveApp";
import ExclusiveEntrance from "@components/ExclusiveEntrance";
import ExclusiveInfo from "@components/ExclusiveInfo";
import ExclusivePayment from "@components/ExclusivePayment";



const exclusive = () => {
    return (
    <>
        <ExclusiveEntrance />
        <ExclusiveInfo />
        <ExclusiveApp />
        <ExclusivePayment />
    </>
);
    
}

export default exclusive;