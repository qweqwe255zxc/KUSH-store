// import { useEffect } from "react";
// import { buildTitle } from "../utils/buildTitle";

const Contact = () => {

    // useEffect(() => {
    //     document.title = buildTitle("contacts");
    // }, []);
    return (
        <>
            <div className="w-100 flex flex-col justify-center p-5 bg-gray-700 text-white border-2 rounded-xl relative">
                <h1 className="text-2xl font-bold">Are you sure?</h1>
                <span>Lorem ipsum dolor sit amet consectetur. Nisl tellus id phasellus at sapien commodo. Pellentesque fringilla posuere vestibulum cursus dis diam vestibulum. Eget erat orci non nunc ultrices morbi.</span>
                <div className=" absolute top-1.5 right-4 cursor-pointer">X</div>
            </div>
        </>
    );
};

export default Contact;