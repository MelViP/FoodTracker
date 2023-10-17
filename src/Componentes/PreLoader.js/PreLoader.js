import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { preLoaderAnim } from "../../Animations/preLoaderAnim";
import "./PreLoader.css";

export const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

    return (
        <div className="loaderContainer">

            <section className="legendContainer">
                <p>Cocinando los componentes</p>

                <SyncLoader size={5} color={"#ffae00"}/>
            </section>  
            
            <section className="panLoader">

                <div className="loader"></div>

                <div className="panContainer">
                    <div className="pan"></div>
                    <div className="handle"></div>
                </div>

                <div className="shadow"></div>

            </section>

        </div>
    )
}