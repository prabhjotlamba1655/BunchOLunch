import React, { useState } from 'react'
import './Review.css'
import { db } from "./firebase";

function Review() {   

    const StarRating = ({ count, value,
        inactiveColor = '#ddd',
        size = 24,
        activeColor = '#f00', onChange }) => {

        // short trick 
        const stars = Array.from({ length: count }, () => '🟊')

        // Internal handle change function
        const handleChange = (value) => {
            onChange(value + 1);
        }

        return (
            <div>
                {stars.map((s, index) => {
                    let style = inactiveColor;
                    if (index < value) {
                        style = activeColor;
                    }
                    return (
                        <span className={"star"}
                            key={index}
                            style={{ color: style, width: size, height: size, fontSize: size }}
                            onClick={() => handleChange(index)}>{s}</span>
                    )
                })}
            </div>
        )
    }

    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [review, setReview] = useState("");

    const handleChange = (value) => {
        setRating(value);
    }
    
    const saveReview = (event) => {
        event.preventDefault();

        if (name && email && number && review && (number.length === 10) && email === ":@:") {
            db.collection("Reviews").add({
                name: name,
                email: email,
                number: number,
                review: review,
                rating: rating,
            })
                .then(alert("Review Saved Successfully"))
                .catch((error) => {
                    alert(error.message);
                });
        }
        else {
            alert("Please fill all the fields properly");
        }
        setName("");
        setEmail("");
        setNumber("");
        setReview("");
        // setRating(0) ;
    };


    return (
        <div className="review">
            <div className="review__img">
                <h1> Your Experience </h1>

                <div className="review__form"  >

                    <form className="review__table">

                        <label>Name</label>
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label>Email</label>
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label>Mobile</label>
                        <input type="tel" value={number}
                            onChange={(e) => setNumber(e.target.value)} />

                        <label>Review</label>
                        <textarea value={review}
                            onChange={(e) => setReview(e.target.value)} />
                        <div className="review__star">
                            <h4>Rating:</h4> 
                            <StarRating
                                count={5}
                                size={40}
                                value={rating}
                                activeColor={'yellow'}
                                inactiveColor={'#ddd'}
                                onChange={handleChange} />
                        </div>

                        <input className="review__button" type="submit" onClick={saveReview} />
                       
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Review
