import React, { useState } from 'react'

const FirstForm = () => {

    const [isClicked, setIsClicked] = useState(false)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [business, setBusiness] = useState('')
    const [service, setService] = useState('')
    const [others, setOthers] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const data = {
            name:name,
            mail:mail,
            phone:phone,
            business:business,
            service:service,
            others:others
        }


        fetch(`${process.env.REACT_APP_FIRST_FORM_URL}`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((r) => r.json())
            .then((data) => {
                // The response comes here
                console.log(data);
                setName('')
                setMail('')
                setPhone('')
                setBusiness('')
                setService('')
                setOthers('')
            })
            .catch((error) => {
                // Errors are reported there
                console.log(error);
        });



    }

    const handleChange = (e) => {
        const click = e.target.value
        if (click === "Others"){
            setIsClicked(true)
        }else{
            setIsClicked(false)
        }

        setService(e.target.value)
    }

  return (
    <div className="form-temp">
                    <form action="" className='formless' onSubmit={handleSubmit}>
                    <h3>Request service</h3>
                        <div>
                        <label for="full name">Full Name</label><br/>
                        <input type="text" className='form-control form-pop' name='full name' placeholder='Enter your full name' onChange={(e) => setName(e.target.value)} value={name}/>
                        </div>
                        <div>
                        <label for="email" class="form-label">Email address</label><br/>
                        <input type="email" class="form-control" name="email" placeholder='Enter your email address' onChange={(e) => setMail(e.target.value)} value={mail}/>
                        </div>
                        <div>
                        <label for="phone">Phone number</label><br/>
                        <input type="text" className='form-control form-pop' name='phone' placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)} value={phone}/>
                        </div>
                        <div>
                        <label for="business">Nature of business</label><br/>
                        <input type="text" className='form-control form-pop' name='business' placeholder='Enter your nature of business' onChange={(e) => setBusiness(e.target.value)} value={business}/>
                        </div>
                        <div>
                        <label for="service">Service/Solution</label><br/>
                        <select class="form-select" name='service' onChange={handleChange} value={service}>
                            <option selected style={{color:'grey'}}>Select service</option>
                            <option value="Content Creation" >Content Creation</option>
                            <option value="Content Writing">Content Writing</option>
                            <option value="Social Media Management">Social Media Management</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="Book Publishing">Book Publishing </option>
                            <option value="Book Project Management">Book Project Management </option>
                            <option value="Book Editing">Book Editing</option>
                            <option value="Typesetting/Composition">Typesetting/Composition </option>
                            <option value="Book Ghostwriting">Book Ghostwriting </option>
                            <option value="Book Cover Design">Book Cover Design</option>
                            <option value="Others" >Others </option>
                        </select>
                        </div>
                        <div style={isClicked? {display:"block"}: {display: "none"}}>
                        <label for="desc">State the kind of service you are looking for</label><br/>
                        <input type="text" className='form-control form-pop' name='desc' onChange={(e) => setOthers(e.target.value)} value={others}/>
                        </div>
                        <div><button type="submit" class="btn btn-dark">Submit</button></div>
                    </form>
                </div>
  )
}

export default FirstForm