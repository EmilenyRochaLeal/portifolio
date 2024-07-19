import Header  from "@/components/Header"
import Footer from "@/components/Footer"
export default function Projeto(){
    return(
        <>
        <Header/>
            <div className="py-24 bg-gray-200">
                <div className="container">
                    <p className="uppercase font-semibold text-center mb-1 text-purple-500 text-x1">{`É sou eu`}</p> 
                    <h1 className="oswald text-center font-semibold text-5x1 mt-5">
                        Meus Projetos
                    </h1>
                </div>

            </div>
        <Footer/>
        </>
    )
}