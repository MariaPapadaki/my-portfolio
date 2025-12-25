import { useState } from "react";
import "../../styles/global.css";

function Form(){
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const updateForm = (e) =>{
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitForm = (e) =>{
        e.preventDefault();
        console.log('User message: ',data);
        alert(
            `Thank you for your message ${data.name}!`
        );
        
        setData({
            name:'',
            email:'',
            message:''
        });
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={submitForm} className="flex flex-col gap-4">

                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="name" className="px-4 py-3 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Fullname. . ." value={data.name} onChange={updateForm} required/>
                    <input type="email" name="email" className="px-4 py-3 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Email. . ." value={data.email} onChange={updateForm} required/>
                </div>

                <textarea name="message" className="px-4 py-3 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Message. . ." value={data.message} onChange={updateForm} required/>

                <button 
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg text-base font-semibold self-start transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Form;