import React, { useState } from 'react'

const SecondForm = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [word_count, setCount] = useState('')
    const [book_title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [pub, setPub] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const data = {
            name:name,
            mail:mail,
            phone:phone,
            word_count:word_count,
            book_title:book_title,
            genre:genre,
            publish_republish: pub
        }


        fetch(`${process.env.REACT_APP_SECOND_FORM_URL}`, {
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
                setCount('')
                setTitle('')
                setGenre('')
                setPub('')
            })
            .catch((error) => {
                // Errors are reported there
                console.log(error);
        });
    }

  return (
                <div className="form-temp">
                    <form action="" className='formless' onSubmit={handleSubmit}>
                    <h3>Enter details</h3>
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
                        <label for="count">Word count</label><br/>
                        <input type="text" className='form-control form-pop' name='count' placeholder='Enter word count' onChange={(e) => setCount(e.target.value)} value={word_count}/>
                        </div>
                        <div>
                        <label for="title">Book title</label><br/>
                        <input type="text" className='form-control form-pop' name='title' placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={book_title}/>
                        </div>
                        <div>
                        <label for="genre">Genre of book</label><br/>
                        <input type="text" className='form-control form-pop' name='genre' placeholder='Enter genre' onChange={(e) => setGenre(e.target.value)} value={genre}/>
                        </div>

                        <div>
                        <label for="genre">Would you like to publish/republish?</label><br/>
                        <input type="text" className='form-control form-pop' name='genre' placeholder='Publish/Republish' onChange={(e) => setPub(e.target.value)} value={pub}/>
                        </div>
                        <div><button type="submit" class="btn btn-dark">Submit</button></div>
                    </form>
                </div>
  )
}


export default SecondForm