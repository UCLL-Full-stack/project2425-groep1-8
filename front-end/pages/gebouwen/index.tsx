import Header from "@components/header";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Gebouw } from "@types";
import GebouwenList from "@components/GebouwenList"
import GebouwenService from "@services/GebouwenService";


const Lecturers: React.FC = () => {

    const [gebouwen, setGebouwen] = useState<Array<Gebouw>>([]);


    const getGebouwen = async () => {
        const response = await GebouwenService.getAllGebouwen();
        const gebouwen = await response.json();
        setGebouwen(gebouwen);
    }

    useEffect(() => {
        getGebouwen()
    }, []);

    return (
        <>
            <Head>
                <title>Gebouwen</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>gebouwen</h1>
                <section>
                    {gebouwen && (
                        <GebouwenList gebouwen={gebouwen} />
                    )}
                </section>
            </main>
        </>
    );
};
export default Lecturers;